"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Eye, Trash2, Plus, Loader2, ExternalLink, CloudCog } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import {
  getAllDocsLinks,
  createDocsLink,
  deleteDocsLink,
} from "@/services/docs-link/docs.apis";

interface DocsLinkForm {
  name: string;
  projectName: string;
  docsLink: string;
  postGenerate: number;
  prompt: string;
}

interface DocsRow {
  id: string;
  name: string;
  projectName: string;
  docsLink: string;
  _count?: { posts: number };
  postGenerate?: number;
}

export function DocsLinkPage() {
  const [docs, setDocs] = useState<DocsRow[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<DocsLinkForm>();

  const fetchDocs = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getAllDocsLinks({ page: 1, limit: 50 });
      console.log(result);
      if (result?.success) {
        setDocs(result.data?.data ?? result.data ?? []);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDocs();
  }, [fetchDocs]);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this docs link?")) return;
    try {
      await deleteDocsLink(id);
      fetchDocs();
    } catch {
      alert("Failed to delete.");
    }
  };

  const onAddDocsSave = async (data: DocsLinkForm) => {
    setCreateError(null);
    try {
      const result = await createDocsLink({
        ...data,
        postGenerate: Number(data.postGenerate),
      });
      if (result?.success) {
        reset();
        setIsAddOpen(false);
        fetchDocs();
      } else {
        setCreateError(result?.message || "Failed to create docs link.");
      }
    } catch {
      setCreateError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors"
        >
          <Plus size={18} />
          Add Docs link
        </button>
      </div>

      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-[#FAFBFD] text-gray-600 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-semibold w-16">#</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Project Name</th>
                <th className="px-6 py-4 font-semibold">Docs Link</th>
                <th className="px-6 py-4 font-semibold">Post Generate</th>
                <th className="px-6 py-4 font-semibold text-center w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#00A651] mx-auto" />
                  </td>
                </tr>
              ) : docs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-gray-400 font-medium">
                    No docs links found. Add your first one!
                  </td>
                </tr>
              ) : (
                docs.map((row, idx) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {String(idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-900">{row.name}</td>
                    <td className="px-6 py-4 text-gray-600">{row.projectName}</td>
                    <td className="px-6 py-4">
                      <a
                        href={row.docsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline flex items-center gap-1 max-w-[200px] truncate"
                      >
                        <span className="truncate">{row.docsLink}</span>
                        <ExternalLink size={12} className="shrink-0" />
                      </a>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      {row._count?.posts ?? row.postGenerate ?? 0}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          className="text-gray-400 hover:text-[#00A651] transition-colors"
                          title="View posts"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(row.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Docs Link Modal */}
      <Modal
        isOpen={isAddOpen}
        onClose={() => { reset(); setIsAddOpen(false); setCreateError(null); }}
        title="Add Docs link"
      >
        <form onSubmit={handleSubmit(onAddDocsSave)} className="space-y-5">
          {createError && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
              {createError}
            </div>
          )}

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Docs link name"
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Project Name</label>
            <input
              {...register("projectName", { required: true })}
              placeholder="e.g. Acme corp strategy"
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Docs Link</label>
            <input
              {...register("docsLink", { required: true })}
              placeholder="https://docs.google.com/..."
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Post Generate</label>
            <input
              {...register("postGenerate", { required: true, min: 0 })}
              placeholder="0"
              type="number"
              min={0}
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Prompt</label>
            <textarea
              {...register("prompt", { required: true })}
              rows={4}
              placeholder="Write instructions for text generation..."
              className="w-full p-4 border border-gray-200 rounded-[8px] text-sm resize-none focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => { reset(); setIsAddOpen(false); }}
              className="px-6 py-2.5 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors disabled:opacity-60 flex items-center gap-2"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              Save Link
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
