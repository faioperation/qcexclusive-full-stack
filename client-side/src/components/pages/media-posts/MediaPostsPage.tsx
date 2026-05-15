"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Download,
  Copy,
  Check,
  Loader2,
  Search,
  ChevronLeft,
  ChevronRight,
  RefreshCw,
  Maximize2,
  Image as ImageIcon,
} from "lucide-react";

import {
  getAllPosts,
  updatePostStatus,
  EPostStatus,
  IAllPostsResponse,
} from "@/services/docs-link/docs.apis";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

export function MediaPostsPage() {
  const [activeTab, setActiveTab] = useState<EPostStatus>("All");
  const [posts, setPosts] = useState<IAllPostsResponse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedPost, setSelectedPost] =
    useState<IAllPostsResponse | null>(null);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPages: 0,
  });

  const tabs: EPostStatus[] = ["All", "Posted", "Draft"];

  const fetchPosts = useCallback(async () => {
    setIsLoading(true);

    try {
      const result = await getAllPosts({
        page: pagination.page,
        limit: pagination.limit,
        searchTerm: searchTerm || undefined,
      });

      if (result?.success) {
        let filteredPosts =
          result.data?.data ?? result.data ?? [];
          console.log("Fetched posts:", filteredPosts);

        if (activeTab !== "All") {
          filteredPosts = filteredPosts.filter(
            (p: IAllPostsResponse) =>
              p.status === activeTab
          );
        }

        setPosts(filteredPosts);

        setPagination((prev) => ({
          ...prev,
          total:
            result.data?.meta?.total ??
            filteredPosts.length,

          totalPages:
            result.data?.meta?.totalPages ?? 1,
        }));
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [
    pagination.page,
    pagination.limit,
    activeTab,
    searchTerm,
  ]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setPagination((prev) => ({
      ...prev,
      page: 1,
    }));

    fetchPosts();
  };

  const handlePageChange = (
    newPage: number
  ) => {
    if (
      newPage >= 1 &&
      newPage <= pagination.totalPages
    ) {
      setPagination((prev) => ({
        ...prev,
        page: newPage,
      }));
    }
  };

  const handleCopy = (
    id: string,
    content: string
  ) => {
    navigator.clipboard.writeText(content);

    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const handleToggleStatus = async (
    post: IAllPostsResponse
  ) => {
    const newStatus =
      post.status === "Draft"
        ? "Posted"
        : "Draft";

    setUpdatingId(post.id);

    try {
      const result = await updatePostStatus(
        post.id,
        newStatus
      );

      if (result?.success) {
        setPosts((prev) =>
          prev.map((p) =>
            p.id === post.id
              ? {
                  ...p,
                  status: newStatus,
                }
              : p
          )
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setUpdatingId(null);
    }
  };

  const formatTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleDateString(
        "en-US",
        {
          month: "short",
          day: "numeric",
          year: "numeric",
        }
      );
    } catch {
      return iso;
    }
  };

  const displayImageUrl = (
    post: IAllPostsResponse
  ) => {
    return (
      post.thumbnailUrl ||
      post.imageUrl ||
      null
    );
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1600px] mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div className="flex flex-wrap items-center gap-3">
          {/* Tabs */}
          <div className="flex items-center gap-1 bg-gray-50 p-1 rounded-xl">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);

                  setPagination((prev) => ({
                    ...prev,
                    page: 1,
                  }));
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <form
            onSubmit={handleSearch}
            className="relative flex-1 sm:flex-none"
          >
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) =>
                setSearchTerm(e.target.value)
              }
              className="h-10 pl-10 pr-4 border border-gray-200 rounded-lg text-sm text-gray-700 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-200 w-full sm:w-[260px]"
            />
          </form>

          <Button
            variant="secondary"
            className="h-10 px-4 gap-2"
          >
            <Download size={18} />
            Export
          </Button>
        </div>
      </div>

      {/* Content */}
      {isLoading ? (
        <PostsSkeleton />
      ) : posts.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-4">
            <ImageIcon
              size={32}
              className="text-gray-400"
            />
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            No posts yet
          </h3>

          <p className="text-gray-500 max-w-sm">
            Create a docs link to start generating
            AI-powered social media posts.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {posts.map((post) => {
              const isCopied =
                copiedId === post.id;

              const isUpdating =
                updatingId === post.id;

              const content = `${post.heading}\n\n${post.body}`;

              const isPosted =
                post.status === "Posted";

              const imgUrl =
                displayImageUrl(post);

              return (
                <MediaPostCard
                  key={post.id}
                  post={post}
                  imgUrl={imgUrl}
                  isCopied={isCopied}
                  isUpdating={isUpdating}
                  isPosted={isPosted}
                  onCopy={() =>
                    handleCopy(post.id, content)
                  }
                  onToggleStatus={() =>
                    handleToggleStatus(post)
                  }
                  onView={() =>
                    setSelectedPost(post)
                  }
                  formatTime={formatTime}
                />
              );
            })}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-10">
              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  handlePageChange(
                    pagination.page - 1
                  )
                }
                disabled={pagination.page === 1}
              >
                <ChevronLeft size={16} />
              </Button>

              <span className="text-sm text-gray-600 font-medium">
                Page {pagination.page} of{" "}
                {pagination.totalPages}
              </span>

              <Button
                variant="secondary"
                size="sm"
                onClick={() =>
                  handlePageChange(
                    pagination.page + 1
                  )
                }
                disabled={
                  pagination.page ===
                  pagination.totalPages
                }
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          )}
        </>
      )}

      {/* Modal */}
      {selectedPost && (
        <PostDetailModal
          post={selectedPost}
          imgUrl={displayImageUrl(
            selectedPost
          )}
          onClose={() =>
            setSelectedPost(null)
          }
          formatTime={formatTime}
        />
      )}
    </div>
  );
}

/* =========================================
   CARD COMPONENT
========================================= */

interface MediaPostCardProps {
  post: IAllPostsResponse;
  imgUrl: string | null;
  isCopied: boolean;
  isUpdating: boolean;
  isPosted: boolean;
  onCopy: () => void;
  onToggleStatus: () => void;
  onView: () => void;
  formatTime: (iso: string) => string;
}

function MediaPostCard({
  post,
  imgUrl,
  isCopied,
  isUpdating,
  isPosted,
  onCopy,
  onToggleStatus,
  onView,
  formatTime,
}: MediaPostCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden">
      {/* Image */}
      <div className="relative aspect-video bg-gray-50 overflow-hidden">
        {imgUrl ? (
          <>
            <img
              src={imgUrl}
              alt={
                post.imageAlt ||
                post.heading
              }
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <button
              onClick={onView}
              className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-sm"
            >
              <Maximize2
                size={16}
                className="text-gray-700"
              />
            </button>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <ImageIcon
              size={24}
              className="text-gray-400"
            />
          </div>
        )}
      </div>

      {/* Body */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-base font-semibold text-gray-900 line-clamp-2">
          {post.heading}
        </h3>

        <p className="text-xs text-gray-500 mt-1">
          {post.docsLink?.projectName}
        </p>

        <p className="text-sm text-gray-600 mt-4 line-clamp-3 flex-1">
          {post.body}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <div>
            <span
              className={`px-2 py-1 rounded-full text-xs ${
                isPosted
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-600"
              }`}
            >
              {post.status}
            </span>

            <p className="text-xs text-gray-400 mt-1">
              {formatTime(post.createdAt)}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onCopy}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isCopied ? (
                <Check
                  size={18}
                  className="text-green-600"
                />
              ) : (
                <Copy size={18} />
              )}
            </button>

            <button
              onClick={onToggleStatus}
              disabled={isUpdating}
              className="p-2 rounded-lg hover:bg-gray-100"
            >
              {isUpdating ? (
                <Loader2
                  size={18}
                  className="animate-spin"
                />
              ) : (
                <RefreshCw size={18} />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================
   SKELETON
========================================= */

function PostsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map(
        (_, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
          >
            <Skeleton className="aspect-video w-full bg-gray-100" />

            <div className="p-5">
              <Skeleton className="h-5 w-3/4 mb-2 bg-gray-100" />
              <Skeleton className="h-4 w-1/2 mb-4 bg-gray-100" />
              <Skeleton className="h-4 w-full mb-2 bg-gray-100" />
            </div>
          </div>
        )
      )}
    </div>
  );
}

/* =========================================
   MODAL
========================================= */

interface PostDetailModalProps {
  post: IAllPostsResponse;
  imgUrl: string | null;
  onClose: () => void;
  formatTime: (iso: string) => string;
}

function PostDetailModal({
  post,
  imgUrl,
  onClose,
  formatTime,
}: PostDetailModalProps) {
  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) =>
          e.stopPropagation()
        }
      >
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold">
              {post.heading}
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              {formatTime(post.createdAt)}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg"
          >
            ✕
          </button>
        </div>

        <div className="p-5">
          {imgUrl && (
            <img
              src={imgUrl}
              alt={
                post.imageAlt ||
                post.heading
              }
              className="w-full rounded-xl mb-5"
            />
          )}

          <div className="whitespace-pre-wrap text-gray-700">
            {post.body}
          </div>
        </div>
      </div>
    </div>
  );
}