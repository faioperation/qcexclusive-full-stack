"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Edit2, Loader2, Save, X, Settings2, PackageOpen } from "lucide-react";
import Swal from "sweetalert2";
import {
  getAllConfigs,
  upsertConfig,
  updateConfig,
  deleteConfig,
  IConfig,
} from "@/services/config/config.apis";

interface ConfigFormValues {
  key: string;
  value: string;
}

export function ConfigPage() {
  const [configs, setConfigs] = useState<IConfig[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const {
    register: registerNew,
    handleSubmit: handleSubmitNew,
    reset: resetNew,
    formState: { errors: newErrors },
  } = useForm<ConfigFormValues>();

  const {
    register: registerEdit,
    handleSubmit: handleSubmitEdit,
    reset: resetEdit,
  } = useForm<ConfigFormValues>();

  const fetchConfigs = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getAllConfigs();
      if (result?.success) {
        setConfigs(result.data || []);
      }
    } catch (error) {
      console.error("Failed to fetch configs:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchConfigs();
  }, [fetchConfigs]);

  const onSubmitNew = async (data: ConfigFormValues) => {
    try {
      const result = await upsertConfig(data);
      if (result?.success) {
        Swal.fire("Success", "Config saved successfully", "success");
        fetchConfigs();
        setIsAdding(false);
        resetNew();
      }
    } catch {
      Swal.fire("Error", "Failed to save config", "error");
    }
  };

  const onEditSave = async (data: ConfigFormValues) => {
    if (!editingId) return;
    try {
      const result = await updateConfig(editingId, { value: data.value });
      if (result?.success) {
        Swal.fire("Success", "Config updated successfully", "success");
        fetchConfigs();
        setEditingId(null);
      }
    } catch {
      Swal.fire("Error", "Failed to update config", "error");
    }
  };

  const handleDelete = async (id: string) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (confirm.isConfirmed) {
      try {
        const result = await deleteConfig(id);
        if (result?.success) {
          Swal.fire("Deleted!", "Config has been deleted.", "success");
          fetchConfigs();
        }
      } catch {
        Swal.fire("Error", "Failed to delete config", "error");
      }
    }
  };

  const handleCancelAdd = () => {
    setIsAdding(false);
    resetNew();
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#00A651]" />
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8 w-full max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2.5">
          <Settings2 className="w-5 h-5 text-[#00A651]" />
          <h2 className="text-2xl font-bold text-gray-800">Configurations</h2>
        </div>
        <button
          onClick={() => {
            setIsAdding((prev) => !prev);
            if (isAdding) resetNew();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors shadow-sm"
        >
          {isAdding ? <X size={16} /> : <Plus size={16} />}
          {isAdding ? "Cancel" : "Add Config"}
        </button>
      </div>

      {/* Add New Config Form */}
      {isAdding && (
        <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 mb-6">
          <h3 className="text-base font-semibold text-gray-800 mb-4">New Configuration</h3>
          <form
            onSubmit={handleSubmitNew(onSubmitNew)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Config Key
              </label>
              <input
                {...registerNew("key", { required: "Key is required" })}
                placeholder="e.g. SLACK_WEBHOOK"
                className={`w-full h-11 px-4 border rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors ${newErrors.key ? "border-red-400" : "border-gray-200"
                  }`}
              />
              {newErrors.key && (
                <p className="text-xs text-red-500 mt-1">{newErrors.key.message}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">
                Config Value
              </label>
              <input
                {...registerNew("value", { required: "Value is required" })}
                placeholder="e.g. https://hooks.slack.com/..."
                className={`w-full h-11 px-4 border rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors ${newErrors.value ? "border-red-400" : "border-gray-200"
                  }`}
              />
              {newErrors.value && (
                <p className="text-xs text-red-500 mt-1">{newErrors.value.message}</p>
              )}
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 pt-1">
              <button
                type="button"
                onClick={handleCancelAdd}
                className="px-5 py-2 border border-gray-200 text-gray-600 rounded-[8px] text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-[#00A651] text-white rounded-[8px] text-sm font-medium hover:bg-[#009345] transition-colors shadow-sm"
              >
                Save Configuration
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-[#FAFBFD] border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 font-semibold text-gray-600 w-1/3">Key</th>
              <th className="px-6 py-4 font-semibold text-gray-600">Value</th>
              <th className="px-6 py-4 font-semibold text-gray-600 text-center w-28">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {configs.length === 0 ? (
              <tr>
                <td colSpan={3}>
                  <div className="flex flex-col items-center justify-center py-16 text-gray-400">
                    <PackageOpen className="w-10 h-10 mb-3 text-gray-300" />
                    <p className="text-sm font-medium text-gray-500">No configurations found</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Click &ldquo;Add Config&rdquo; to create your first configuration.
                    </p>
                  </div>
                </td>
              </tr>
            ) : (
              configs.map((config) => (
                <tr key={config.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{config.key}</td>
                  <td className="px-6 py-4">
                    {editingId === config.id ? (
                      <input
                        {...registerEdit("value", { required: "Required" })}
                        defaultValue={config.value}
                        autoFocus
                        className="w-full h-9 px-3 border border-gray-200 rounded-[6px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
                      />
                    ) : (
                      <span className="truncate block max-w-sm text-gray-500 font-mono text-xs">
                        {config.value.length > 60
                          ? config.value.substring(0, 60) + "..."
                          : config.value}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-1.5">
                      {editingId === config.id ? (
                        <>
                          <button
                            onClick={handleSubmitEdit(onEditSave)}
                            className="p-1.5 text-[#00A651] hover:bg-green-50 rounded-full transition-colors"
                            title="Save Changes"
                          >
                            <Save size={16} />
                          </button>
                          <button
                            onClick={() => setEditingId(null)}
                            className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-full transition-colors"
                            title="Cancel"
                          >
                            <X size={16} />
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => {
                              setEditingId(config.id);
                              resetEdit({ value: config.value });
                            }}
                            className="p-1.5 text-blue-500 hover:bg-blue-50 rounded-full transition-colors"
                            title="Edit Value"
                          >
                            <Edit2 size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(config.id)}
                            className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                            title="Delete Config"
                          >
                            <Trash2 size={16} />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}