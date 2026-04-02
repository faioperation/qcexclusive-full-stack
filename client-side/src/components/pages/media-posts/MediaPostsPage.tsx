"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Download, Trash2, Copy, Check, Loader2 } from "lucide-react";
import {
  getAllDocsLinks,
  getPostsByDocsLinkId,
  EPostStatus,
} from "@/services/docs-link/docs.apis";

interface Post {
  id: string;
  content: string;
  status: string;
  createdAt: string;
  docsLinkId?: string;
}

interface DocsLink {
  id: string;
  name: string;
  projectName: string;
}

export function MediaPostsPage() {
  const [activeTab, setActiveTab] = useState<EPostStatus>("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [docsLinks, setDocsLinks] = useState<DocsLink[]>([]);
  const [selectedDocsId, setSelectedDocsId] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const tabs: EPostStatus[] = ["All", "Posted", "Draft"];

  // Fetch all docs links first so user can pick one
  useEffect(() => {
    (async () => {
      try {
        const result = await getAllDocsLinks({ page: 1, limit: 100 });
        if (result?.success) {
          const links: DocsLink[] = result.data?.data ?? result.data ?? [];
          setDocsLinks(links);
          if (links.length > 0) {
            setSelectedDocsId(links[0].id);
          } else {
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
        }
      } catch {
        setIsLoading(false);
      }
    })();
  }, []);

  const fetchPosts = useCallback(async () => {
    if (!selectedDocsId) return;
    setIsLoading(true);
    try {
      const result = await getPostsByDocsLinkId(selectedDocsId, activeTab);
      if (result?.success) {
        setPosts(result.data?.data ?? result.data ?? []);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  }, [selectedDocsId, activeTab]);

  useEffect(() => {
    if (selectedDocsId) {
      fetchPosts();
    }
  }, [fetchPosts, selectedDocsId]);

  const handleCopy = (id: string, content: string) => {
    navigator.clipboard.writeText(content);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const formatTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return iso;
    }
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Docs Link selector */}
          {docsLinks.length > 0 && (
            <select
              value={selectedDocsId}
              onChange={(e) => setSelectedDocsId(e.target.value)}
              className="h-[42px] px-3 border border-gray-200 rounded-[10px] text-sm text-gray-700 focus:outline-none focus:border-[#00A651] bg-white"
            >
              {docsLinks.map((doc) => (
                <option key={doc.id} value={doc.id}>
                  {doc.name} — {doc.projectName}
                </option>
              ))}
            </select>
          )}

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
        </div>

        {/* Export Button */}
        <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-[8px] transition-colors shadow-sm">
          <Download size={18} />
          Export CSV
        </button>
      </div>

      {/* Grid Content */}
      {isLoading ? (
        <div className="flex justify-center py-24">
          <Loader2 className="w-10 h-10 animate-spin text-[#00A651]" />
        </div>
      ) : docsLinks.length === 0 ? (
        <div className="text-center py-24">
          <p className="text-gray-400 font-medium text-lg mb-2">No docs links found.</p>
          <p className="text-gray-400 text-sm">
            Go to <span className="font-semibold text-[#00A651]">Docs Link</span> page and add your first one to generate media posts.
          </p>
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 font-medium">
          No posts found in this category.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => {
            const isCopied = copiedId === post.id;

            return (
              <div
                key={post.id}
                className="bg-white rounded-[16px] p-6 border border-gray-100 shadow-sm hover:border-gray-200 transition-all duration-200"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-tight">
                      Post
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      Post Time : {formatTime(post.createdAt)}
                    </p>
                  </div>
                  {/* Actions */}
                  <div className="flex items-center gap-2 ml-4">
                    <button
                      onClick={() => handleCopy(post.id, post.content)}
                      className="p-2 text-gray-400 hover:text-[#00A651] bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                      title="Copy Content"
                    >
                      {isCopied ? (
                        <Check size={18} className="text-[#00A651]" />
                      ) : (
                        <Copy size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Body */}
                <div className="pt-2">
                  <p className="text-[15px] text-gray-600 leading-relaxed font-medium whitespace-pre-wrap">
                    {post.content}
                  </p>
                </div>

                {/* Status Badge */}
                <div className="mt-6 flex justify-end">
                  <span
                    className={`px-3 py-1 rounded-[6px] text-xs font-semibold ${
                      post.status === "Posted"
                        ? "bg-green-100 text-[#00A651]"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {post.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
