"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Download, Copy, Check, Loader2, Search, ChevronLeft, ChevronRight, CloudCog } from "lucide-react";
import {
  getAllPosts,
  EPostStatus,
} from "@/services/docs-link/docs.apis";

interface Post {
  id: string;
  heading: string;
  body: string;
  status: string;
  createdAt: string;
  docsLink: {
    id: string;
    name: string;
    projectName: string;
  };
}

interface PaginationMeta {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export function MediaPostsPage() {
  const [activeTab, setActiveTab] = useState<EPostStatus>("All");
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [pagination, setPagination] = useState<PaginationMeta>({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  });

  const tabs: EPostStatus[] = ["All", "Posted", "Draft"];

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);
    try {
      const statusParam = activeTab !== "All" ? activeTab : undefined;
      const result = await getAllPosts({
        page: pagination.page,
        limit: pagination.limit,
        searchTerm: searchTerm || undefined,
        // removed sortBy and sortOrder
      });

      console.log(result);

      if (result?.success) {
        let filteredPosts = result.data?.data ?? result.data ?? [];

        if (statusParam) {
          filteredPosts = filteredPosts.filter((p: Post) => p.status === statusParam);
        }

        setPosts(filteredPosts);
        setPagination((prev) => ({
          ...prev,
          total: result.data?.meta?.total ?? filteredPosts.length,
          totalPages: result.data?.meta?.totalPages ?? 1,
        }));
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  }, [pagination.page, pagination.limit, activeTab, searchTerm]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setPagination((prev) => ({ ...prev, page: 1 }));
    fetchPosts();
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= pagination.totalPages) {
      setPagination((prev) => ({ ...prev, page: newPage }));
    }
  };

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
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-[#F5F5F5] p-1 rounded-[12px]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setPagination((prev) => ({ ...prev, page: 1 }));
                }}
                className={`px-5 py-2.5 rounded-[8px] text-sm font-medium transition-all ${activeTab === tab
                  ? "bg-[#00A651] text-white shadow-sm"
                  : "text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search & Export */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <form onSubmit={handleSearch} className="relative flex-1 sm:flex-none">
            <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[42px] pl-10 pr-4 border border-gray-200 rounded-[8px] text-sm text-gray-700 focus:outline-none focus:border-[#00A651] w-full sm:w-[200px]"
            />
          </form>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-[8px] transition-colors shadow-sm">
            <Download size={18} />
            Export CSV
          </button>
        </div>
      </div>

      {/* Grid Content */}
      {isLoading ? (
        <div className="flex justify-center py-24">
          <Loader2 className="w-10 h-10 animate-spin text-[#00A651]" />
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center py-20 text-gray-500 font-medium">
          No posts found.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => {
              const isCopied = copiedId === post.id;
              const content = `${post.heading}\n\n${post.body}`;

              return (
                <div
                  key={post.id}
                  className="bg-white rounded-[16px] p-6 border border-gray-100 shadow-sm hover:border-gray-200 transition-all duration-200"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 leading-tight truncate">
                        {post.heading}
                      </h3>
                      <p className="text-xs text-gray-500 mt-1 truncate">
                        {post.docsLink?.name} — {post.docsLink?.projectName}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5">
                        Post Time: {formatTime(post.createdAt)}
                      </p>
                    </div>
                    {/* Actions */}
                    <div className="flex items-center gap-2 ml-4">
                      <button
                        onClick={() => handleCopy(post.id, content)}
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
                    <p className="text-[15px] text-gray-600 leading-relaxed font-medium whitespace-pre-wrap line-clamp-4">
                      {post.body}
                    </p>
                  </div>

                  {/* Status Badge */}
                  <div className="mt-6 flex justify-end">
                    <span
                      className={`px-3 py-1 rounded-[6px] text-xs font-semibold ${post.status === "Posted"
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

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={() => handlePageChange(pagination.page - 1)}
                disabled={pagination.page === 1}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="text-sm text-gray-600">
                Page {pagination.page} of {pagination.totalPages}
              </span>
              <button
                onClick={() => handlePageChange(pagination.page + 1)}
                disabled={pagination.page === pagination.totalPages}
                className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}