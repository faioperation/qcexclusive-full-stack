"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Edit2, Loader2, Save, X } from "lucide-react";
import Swal from "sweetalert2";
import {
  getAllConfigs,
  upsertConfig,
  updateConfig,
  deleteConfig,
  IConfig,
} from "@/services/config/config.apis";

interface OpenAiFormValues {
  openAiKey: string;
}

interface ApifyFormValues {
  apifyKey: string;
}

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
    register: registerOpenAi,
    handleSubmit: handleSubmitOpenAi,
    reset: resetOpenAi,
  } = useForm<OpenAiFormValues>();

  const {
    register: registerApify,
    handleSubmit: handleSubmitApify,
    reset: resetApify,
  } = useForm<ApifyFormValues>();

  const {
    register: registerNew,
    handleSubmit: handleSubmitNew,
    reset: resetNew,
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

  const onSubmitOpenAi = async (data: OpenAiFormValues) => {
    try {
      const result = await upsertConfig({ key: "Open AI Key", value: data.openAiKey });
      if (result?.success) {
        Swal.fire("Success", "Open AI Key saved successfully", "success");
        fetchConfigs();
        resetOpenAi();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to save Open AI Key", "error");
    }
  };

  const onSubmitApify = async (data: ApifyFormValues) => {
    try {
      const result = await upsertConfig({ key: "APIFY Key", value: data.apifyKey });
      if (result?.success) {
        Swal.fire("Success", "APIFY Key saved successfully", "success");
        fetchConfigs();
        resetApify();
      }
    } catch (error) {
      Swal.fire("Error", "Failed to save APIFY Key", "error");
    }
  };

  const onSubmitNew = async (data: ConfigFormValues) => {
    try {
      const result = await upsertConfig(data);
      if (result?.success) {
        Swal.fire("Success", "Config saved successfully", "success");
        fetchConfigs();
        setIsAdding(false);
        resetNew();
      }
    } catch (error) {
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
    } catch (error) {
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
      } catch (error) {
        Swal.fire("Error", "Failed to delete config", "error");
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader2 className="w-8 h-8 animate-spin text-[#00A651]" />
      </div>
    );
  }

  // If no data initially, show the setup forms
  if (configs.length === 0 && !isAdding) {
    return (
      <div className="p-6 md:p-8 w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-[16px] p-6 lg:p-8 shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-6">API key</h2>

          <div className="space-y-8">
            <form onSubmit={handleSubmitOpenAi(onSubmitOpenAi)}>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Open AI Key
                </label>
                <input
                  {...registerOpenAi("openAiKey", { required: "Required" })}
                  type="text"
                  placeholder="wdfsafishdklhikv"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-gray-200 text-gray-800 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
                >
                  Save
                </button>
              </div>
            </form>

            <form onSubmit={handleSubmitApify(onSubmitApify)}>
              <div className="mb-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  APIFY Key
                </label>
                <input
                  {...registerApify("apifyKey", { required: "Required" })}
                  type="text"
                  placeholder="hhfgljsdl;fghlsdnl"
                  className="w-full h-[48px] px-4 rounded-[8px] border border-gray-200 text-gray-800 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
                />
              </div>
              <div className="flex justify-end mt-4">
                <button
                  type="submit"
                  className="px-8 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // If there are data, show data in table format
  return (
    <div className="p-6 md:p-8 w-full max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Configurations</h2>
        <button
          onClick={() => setIsAdding(!isAdding)}
          className="flex items-center gap-2 px-4 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors"
        >
          {isAdding ? <X size={18} /> : <Plus size={18} />}
          {isAdding ? "Cancel" : "Add Config"}
        </button>
      </div>

      {isAdding && (
        <div className="bg-white rounded-[16px] p-6 shadow-sm border border-gray-100 mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Add New Configuration</h3>
          <form onSubmit={handleSubmitNew(onSubmitNew)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Config Key</label>
              <input
                {...registerNew("key", { required: "Key is required" })}
                placeholder="e.g. SLACK_WEBHOOK"
                className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1.5">Config Value</label>
              <input
                {...registerNew("value", { required: "Value is required" })}
                placeholder="e.g. https://hooks.slack.com/..."
                className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651]"
              />
            </div>
            <div className="md:col-span-2 flex justify-end gap-3 mt-2">
              <button
                type="button"
                onClick={() => setIsAdding(false)}
                className="px-6 py-2 border border-gray-200 text-gray-600 rounded-[8px] text-sm font-medium hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 bg-[#00A651] text-white rounded-[8px] text-sm font-medium hover:bg-[#009345] transition-colors"
              >
                Save Configuration
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-sm text-gray-700">
          <thead className="bg-[#FAFBFD] text-gray-600 font-medium">
            <tr>
              <th className="px-6 py-4 font-semibold">Key</th>
              <th className="px-6 py-4 font-semibold">Value</th>
              <th className="px-6 py-4 font-semibold text-center w-32">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 bg-white">
            {configs.map((config) => (
              <tr key={config.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 font-medium text-gray-900">{config.key}</td>
                <td className="px-6 py-4">
                  {editingId === config.id ? (
                    <input
                      {...registerEdit("value", { required: "Required" })}
                      defaultValue={config.value}
                      autoFocus
                      className="w-full h-9 px-3 border border-gray-200 rounded-[6px] text-sm focus:outline-none focus:border-[#00A651]"
                    />
                  ) : (
                    <span className="truncate block max-w-md text-gray-500 font-mono">
                      {config.value.length > 50 ? config.value.substring(0, 50) + "..." : config.value}
                    </span>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-2">
                    {editingId === config.id ? (
                      <>
                        <button
                          onClick={handleSubmitEdit(onEditSave)}
                          className="p-1.5 text-[#00A651] hover:bg-green-50 rounded-full transition-colors"
                          title="Save Changes"
                        >
                          <Save size={18} />
                        </button>
                        <button
                          onClick={() => setEditingId(null)}
                          className="p-1.5 text-gray-400 hover:bg-gray-100 rounded-full transition-colors"
                          title="Cancel"
                        >
                          <X size={18} />
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
                          <Edit2 size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(config.id)}
                          className="p-1.5 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                          title="Delete Config"
                        >
                          <Trash2 size={18} />
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
