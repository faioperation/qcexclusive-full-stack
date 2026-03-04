"use client";

import React, { useState } from "react";
import { Download, Trash2, Copy, Check } from "lucide-react";

// Mock data to match the UI state perfectly
const MOCK_POSTS = Array.from({ length: 6 }).map((_, i) => ({
  id: i + 1,
  title: "Heading Text",
  time: "20.10.12 ; 05:00 PM",
  content: "This helps algorithms understand your content better. The same principle applies to internal links—link between your own pages using descriptive anchor text...",
  status: i % 3 === 0 ? "Draft" : "Posted", // mix of statuses
}));

export function MediaPostsPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const tabs = ["All", "Posted", "Draft"];

  const filteredPosts = MOCK_POSTS.filter(post => {
    if (activeTab === "All") return true;
    return post.status === activeTab;
  });

  const toggleSelect = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleCopy = (id: number, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        {/* Tabs */}
        <div className="flex items-center gap-1 bg-[#F5F5F5] p-1 rounded-[12px]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#00A651] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-[8px] transition-colors shadow-sm">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredPosts.map((post) => {
          const isSelected = selectedIds.includes(post.id);

          return (
            <div 
              key={post.id} 
              className={`bg-white rounded-[16px] p-6 border transition-all duration-200 ${
                isSelected ? "border-[#00A651] shadow-md relative" : "border-gray-100 shadow-sm"
              }`}
            >
              {/* Checkbox */}
              <div 
                className="absolute left-6 top-6 cursor-pointer z-10"
                onClick={() => toggleSelect(post.id)}
              >
                <div className={`w-5 h-5 rounded-[4px] border flex items-center justify-center transition-colors ${
                  isSelected ? "bg-[#00A651] border-[#00A651]" : "border-gray-300 bg-white"
                }`}>
                  {isSelected && <Check size={14} className="text-white" />}
                </div>
              </div>

              {/* Header */}
              <div className="flex justify-between items-start mb-4 ml-8">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">{post.title}</h3>
                  <p className="text-sm text-gray-500 mt-1">Post Time : {post.time}</p>
                </div>
                {/* Actions */}
                <div className="flex items-center gap-2 ml-4">
                  <button 
                    onClick={() => handleCopy(post.id, post.content)}
                    className="p-2 text-gray-400 hover:text-[#00A651] bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                    title="Copy Content"
                  >
                    {copiedId === post.id ? <Check size={18} className="text-[#00A651]" /> : <Copy size={18} />}
                  </button>
                  {isSelected && (
                    <button 
                      className="p-2 text-red-400 hover:text-red-600 bg-red-50 hover:bg-red-100 rounded-full transition-colors"
                      title="Delete Selected"
                    >
                      <Trash2 size={18} />
                    </button>
                  )}
                </div>
              </div>

              {/* Body */}
              <div className="pt-2">
                <p className="text-[15px] text-gray-600 leading-relaxed font-medium">
                  {post.content}
                </p>
              </div>

              {/* Status Badge */}
              <div className="mt-6 flex justify-end">
                <span className={`px-3 py-1 rounded-[6px] text-xs font-semibold ${
                  post.status === "Posted" 
                    ? "bg-green-100 text-[#00A651]" 
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {post.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
      {filteredPosts.length === 0 && (
         <div className="text-center py-20 text-gray-500">
           No posts found in this category.
         </div>
      )}
    </div>
  );
}
