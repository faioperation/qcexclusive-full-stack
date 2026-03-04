"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, Trash2, Plus } from "lucide-react";
import { Modal } from "@/components/ui/modal";

interface DocsLinkForm {
  name: string;
  projectName: string;
  docsLink: string;
  postGenerate: string;
  prompt: string;
}

// Sample data to match the UI state perfectly
const sampleData = [
  { id: 1, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 2, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 3, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 4, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 5, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 6, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 7, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 8, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
  { id: 9, name: "Name Of Documents", project: "Name Of Documents", link: "www.figma.com/design/4uK", posts: 0 },
];

export function DocsLinkPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const { register, handleSubmit, reset } = useForm<DocsLinkForm>();

  const onAddDocsSave = (data: DocsLinkForm) => {
    console.log("Saving Docs Link:", data);
    reset();
    setIsAddOpen(false);
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
            <thead className="bg-[#FAFBFD] text-gray-600 font-medium">
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
              {sampleData.map((row) => (
                <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{String(row.id).padStart(2, "0")}</td>
                  <td className="px-6 py-4">{row.name}</td>
                  <td className="px-6 py-4">{row.project}</td>
                  <td className="px-6 py-4">
                    <a href={`https://${row.link}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                      {row.link}
                    </a>
                  </td>
                  <td className="px-6 py-4">{row.posts}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-gray-400 hover:text-[#00A651] transition-colors">
                        <Eye size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Docs Link Modal */}
      <Modal isOpen={isAddOpen} onClose={() => { reset(); setIsAddOpen(false); }} title="Add Docs link">
        <form onSubmit={handleSubmit(onAddDocsSave)} className="space-y-5">
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
              {...register("postGenerate", { required: true })}
              placeholder="0"
              type="number"
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
             ></textarea>
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
              className="px-6 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
            >
              Save Link
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
