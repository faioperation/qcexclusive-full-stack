"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Search,
  Filter,
  Download,
  Mail,
  MailCheck,
  MailX,
  Trash2,
  Plus,
  ChevronLeft,
  ChevronRight,
  Loader2,
  X,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { useForm } from "react-hook-form";
import { getAllLeads, deleteLead, sendEmailToLead, bulkSendEmailToLeads } from "@/services/lead/lead.apis";
import { createCampaign } from "@/services/campaign/campaign.apis";

interface CampaignForm {
  name: string;
  location: string;
  industry: string;
  specification?: string;
  platform: "GoogleMaps" | "Instagram" | "Facebook";
}

interface Lead {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  website?: string;
  platformUrl?: string;
  imageUrl?: string;
  status: string;
  platform: string;
  createdAt: string;
  campaign?: { name: string };
  industry?: { name: string };
  location?: { city?: string; state?: string; country?: string };
}

type EmailStatus = "idle" | "sending" | "sent" | "error";

interface IFilters {
  city: string;
  industryName: string;
  campaignName: string;
  platform: string;
  status: string;
}

const EMPTY_FILTERS: IFilters = {
  city: "",
  industryName: "",
  campaignName: "",
  platform: "",
  status: "",
};

// removed PAGE_SIZE constant

export function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Filter panel state
  const [filterOpen, setFilterOpen] = useState(false);
  const [draftFilters, setDraftFilters] = useState<IFilters>(EMPTY_FILTERS);
  const [appliedFilters, setAppliedFilters] = useState<IFilters>(EMPTY_FILTERS);

  // Per-row email send state: leadId → status
  const [emailStatusMap, setEmailStatusMap] = useState<Record<string, EmailStatus>>({});

  // Bulk selection state
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [isBulkModalOpen, setIsBulkModalOpen] = useState(false);
  const [bulkMessage, setBulkMessage] = useState("");
  const [isBulkSending, setIsBulkSending] = useState(false);

  const { register, handleSubmit, reset, formState: { isSubmitting } } = useForm<CampaignForm>({
    defaultValues: { platform: "GoogleMaps" },
  });

  const activeFilterCount = Object.values(appliedFilters).filter(Boolean).length;

  // Debounce search
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(searchTerm), 400);
    return () => clearTimeout(t);
  }, [searchTerm]);

  const fetchLeads = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getAllLeads({
        page,
        limit,
        searchTerm: debouncedSearch || undefined,
        city: appliedFilters.city || undefined,
        industryName: appliedFilters.industryName || undefined,
        campaignName: appliedFilters.campaignName || undefined,
        platform: appliedFilters.platform || undefined,
        status: appliedFilters.status || undefined,
      });
      if (result?.success) {
        setLeads(result.data?.data ?? result.data ?? []);
        setTotal(result.data?.meta?.total ?? result.meta?.total ?? 0);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  }, [page, limit, debouncedSearch, appliedFilters]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const handleApplyFilters = () => {
    setPage(1);
    setAppliedFilters({ ...draftFilters });
    setFilterOpen(false);
  };

  const handleClearFilters = () => {
    setPage(1);
    setDraftFilters(EMPTY_FILTERS);
    setAppliedFilters(EMPTY_FILTERS);
  };

  const handleDelete = async (leadId: string) => {
    if (!confirm("Are you sure you want to delete this lead?")) return;
    try {
      await deleteLead(leadId);
      fetchLeads();
    } catch {
      alert("Failed to delete lead.");
    }
  };

  const handleSendEmail = async (leadId: string) => {
    setEmailStatusMap((prev) => ({ ...prev, [leadId]: "sending" }));
    try {
      const result = await sendEmailToLead(leadId);
      if (result?.success) {
        setEmailStatusMap((prev) => ({ ...prev, [leadId]: "sent" }));
        fetchLeads();
        setTimeout(() => {
          setEmailStatusMap((prev) => ({ ...prev, [leadId]: "idle" }));
        }, 3000);
      } else {
        setEmailStatusMap((prev) => ({ ...prev, [leadId]: "error" }));
        alert(result?.message || "Failed to send email.");
        setTimeout(() => {
          setEmailStatusMap((prev) => ({ ...prev, [leadId]: "idle" }));
        }, 3000);
      }
    } catch {
      setEmailStatusMap((prev) => ({ ...prev, [leadId]: "error" }));
      alert("Failed to send email.");
      setTimeout(() => {
        setEmailStatusMap((prev) => ({ ...prev, [leadId]: "idle" }));
      }, 3000);
    }
  };

  const handleBulkSend = () => {
    if (selectedIds.length === 0) return;
    setBulkMessage("");
    setIsBulkModalOpen(true);
  };

  const confirmBulkSend = async () => {
    if (!bulkMessage.trim()) {
      alert("Please enter a message.");
      return;
    }

    setIsBulkSending(true);
    try {
      const result = await bulkSendEmailToLeads(selectedIds, bulkMessage);
      if (result?.success) {
        alert("Bulk outreach process completed.");
        setSelectedIds([]);
        setIsBulkModalOpen(false);
        fetchLeads();
      } else {
        alert(result?.message || "Failed to process bulk outreach.");
      }
    } catch {
      alert("Something went wrong during bulk outreach.");
    } finally {
      setIsBulkSending(false);
    }
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedIds.length === leads.length && leads.length > 0) {
      setSelectedIds([]);
    } else {
      setSelectedIds(leads.map((l) => l.id));
    }
  };

  const onSaveCampaign = async (data: CampaignForm) => {
    setCreateError(null);
    try {
      const result = await createCampaign(data);
      if (result?.success) {
        reset();
        setIsCreateOpen(false);
        fetchLeads();
      } else {
        setCreateError(result?.message || "Failed to create campaign.");
      }
    } catch {
      setCreateError("Something went wrong. Please try again.");
    }
  };

  const getPlatformStyle = (platform: string) => {
    switch (platform) {
      case "Instagram": return "bg-pink-50 text-pink-600";
      case "Facebook": return "bg-blue-50 text-blue-600";
      case "GoogleMaps": return "bg-yellow-50 text-yellow-700";
      case "LinkedIn": return "bg-sky-50 text-sky-600";
      case "Twitter": return "bg-gray-900 text-white";
      case "TikTok": return "bg-black text-white";
      case "YouTube": return "bg-red-50 text-red-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "New": return "bg-blue-50 text-blue-600";
      case "Running": return "bg-indigo-50 text-indigo-600";
      case "Contacted": return "bg-orange-50 text-orange-600";
      case "Interested": return "bg-emerald-50 text-emerald-600";
      case "Scheduled": return "bg-purple-50 text-purple-600";
      case "Completed": return "bg-green-50 text-[#00A651]";
      case "Converted": return "bg-green-100 text-green-800";
      case "NotInterested": return "bg-red-50 text-red-500";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  const totalPages = Math.max(1, Math.ceil(total / limit));

  const renderEmailButton = (lead: Lead) => {
    const status = emailStatusMap[lead.id] ?? "idle";
    const hasEmail = !!lead.email;

    if (!hasEmail) {
      return (
        <button
          disabled
          title="No email address available"
          className="text-gray-200 cursor-not-allowed"
        >
          <Mail size={18} />
        </button>
      );
    }

    if (status === "sending") {
      return (
        <button disabled title="Sending…" className="text-[#00A651] cursor-wait">
          <Loader2 size={18} className="animate-spin" />
        </button>
      );
    }

    if (status === "sent") {
      return (
        <button disabled title="Email sent!" className="text-[#00A651]">
          <MailCheck size={18} />
        </button>
      );
    }

    if (status === "error") {
      return (
        <button disabled title="Send failed" className="text-red-500">
          <MailX size={18} />
        </button>
      );
    }

    return (
      <button
        onClick={() => handleSendEmail(lead.id)}
        className="text-gray-400 hover:text-[#00A651] transition-colors"
        title={`Send outreach email to ${lead.email}`}
      >
        <Mail size={18} />
      </button>
    );
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search leads..."
              value={searchTerm}
              onChange={(e) => { setSearchTerm(e.target.value); setPage(1); }}
              className="w-full h-10 pl-10 pr-4 bg-white border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
            />
          </div>

          {/* Filter button with active count badge */}
          <button
            onClick={() => {
              setDraftFilters({ ...appliedFilters });
              setFilterOpen((v) => !v);
            }}
            className={`relative flex items-center justify-center w-10 h-10 border rounded-[8px] transition-colors shrink-0 ${
              filterOpen || activeFilterCount > 0
                ? "bg-[#00A651] border-[#00A651] text-white"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
            title="Toggle filters"
          >
            <Filter size={18} />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-orange-500 text-white text-[10px] font-bold flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          {selectedIds.length > 0 && (
            <button
              onClick={handleBulkSend}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold rounded-[8px] transition-colors whitespace-nowrap shadow-sm"
            >
              <Mail size={18} />
              Send Outreach ({selectedIds.length})
            </button>
          )}
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-[8px] transition-colors whitespace-nowrap">
            <Download size={18} />
            Export CSV
          </button>
          <button
            onClick={() => setIsCreateOpen(true)}
            className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors whitespace-nowrap"
          >
            <Plus size={18} />
            Create Campaign
          </button>
        </div>
      </div>

      {/* Filter Panel */}
      {filterOpen && (
        <div className="mb-4 bg-white border border-gray-200 rounded-[12px] p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-semibold text-gray-700">Filter Leads</span>
            <button
              onClick={() => setFilterOpen(false)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {/* Location */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Location
              </label>
              <input
                type="text"
                placeholder="City, e.g. New York"
                value={draftFilters.city}
                onChange={(e) => setDraftFilters((f) => ({ ...f, city: e.target.value }))}
                className="w-full h-9 px-3 bg-[#FAFBFD] border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
              />
            </div>

            {/* Industry */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Industry
              </label>
              <input
                type="text"
                placeholder="e.g. Real Estate"
                value={draftFilters.industryName}
                onChange={(e) => setDraftFilters((f) => ({ ...f, industryName: e.target.value }))}
                className="w-full h-9 px-3 bg-[#FAFBFD] border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
              />
            </div>

            {/* Campaign */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Campaign
              </label>
              <input
                type="text"
                placeholder="e.g. Real Estate Push"
                value={draftFilters.campaignName}
                onChange={(e) => setDraftFilters((f) => ({ ...f, campaignName: e.target.value }))}
                className="w-full h-9 px-3 bg-[#FAFBFD] border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
              />
            </div>

            {/* Platform */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Platform
              </label>
              <select
                value={draftFilters.platform}
                onChange={(e) => setDraftFilters((f) => ({ ...f, platform: e.target.value }))}
                className="w-full h-9 px-3 bg-[#FAFBFD] border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
              >
                <option value="">All Platforms</option>
                <option value="GoogleMaps">Google Maps</option>
                <option value="Instagram">Instagram</option>
                <option value="Facebook">Facebook</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Twitter">Twitter</option>
                <option value="TikTok">TikTok</option>
                <option value="YouTube">YouTube</option>
              </select>
            </div>

            {/* Status */}
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1.5 uppercase tracking-wide">
                Status
              </label>
              <select
                value={draftFilters.status}
                onChange={(e) => setDraftFilters((f) => ({ ...f, status: e.target.value }))}
                className="w-full h-9 px-3 bg-[#FAFBFD] border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
              >
                <option value="">All Statuses</option>
                <option value="New">New</option>
                <option value="Running">Running</option>
                <option value="Contacted">Contacted</option>
                <option value="Interested">Interested</option>
                <option value="Scheduled">Scheduled</option>
                <option value="Completed">Completed</option>
                <option value="Converted">Converted</option>
                <option value="NotInterested">Not Interested</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3 mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={handleClearFilters}
              className="px-4 h-9 text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors"
            >
              Clear All
            </button>
            <button
              onClick={handleApplyFilters}
              className="px-5 h-9 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors"
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}

      {/* Active filter tags */}
      {activeFilterCount > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-xs text-gray-400 font-medium">Active filters:</span>
          {appliedFilters.city && (
            <FilterTag
              label={`Location: ${appliedFilters.city}`}
              onRemove={() => {
                const next = { ...appliedFilters, city: "" };
                setAppliedFilters(next);
                setDraftFilters(next);
                setPage(1);
              }}
            />
          )}
          {appliedFilters.industryName && (
            <FilterTag
              label={`Industry: ${appliedFilters.industryName}`}
              onRemove={() => {
                const next = { ...appliedFilters, industryName: "" };
                setAppliedFilters(next);
                setDraftFilters(next);
                setPage(1);
              }}
            />
          )}
          {appliedFilters.campaignName && (
            <FilterTag
              label={`Campaign: ${appliedFilters.campaignName}`}
              onRemove={() => {
                const next = { ...appliedFilters, campaignName: "" };
                setAppliedFilters(next);
                setDraftFilters(next);
                setPage(1);
              }}
            />
          )}
          {appliedFilters.platform && (
            <FilterTag
              label={`Platform: ${appliedFilters.platform}`}
              onRemove={() => {
                const next = { ...appliedFilters, platform: "" };
                setAppliedFilters(next);
                setDraftFilters(next);
                setPage(1);
              }}
            />
          )}
          {appliedFilters.status && (
            <FilterTag
              label={`Status: ${appliedFilters.status}`}
              onRemove={() => {
                const next = { ...appliedFilters, status: "" };
                setAppliedFilters(next);
                setDraftFilters(next);
                setPage(1);
              }}
            />
          )}
        </div>
      )}

      {/* Main Table Card */}
      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm text-gray-700 whitespace-nowrap">
            <thead className="bg-[#FAFBFD] text-gray-600 font-medium border-b border-gray-100">
              <tr>
                <th className="px-4 py-4 font-semibold w-12 text-center">
                   <input 
                    type="checkbox" 
                    className="w-4 h-4 rounded border-gray-300 text-[#00A651] focus:ring-[#00A651] cursor-pointer"
                    checked={leads.length > 0 && selectedIds.length === leads.length}
                    onChange={toggleSelectAll}
                  />
                </th>
                <th className="px-4 py-4 font-semibold w-16">#</th>
                <th className="px-4 py-4 font-semibold">Name</th>
                <th className="px-4 py-4 font-semibold">Location</th>
                <th className="px-4 py-4 font-semibold">Industry</th>
                <th className="px-4 py-4 font-semibold">Campaign</th>
                <th className="px-4 py-4 font-semibold">Platform</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {isLoading ? (
                <tr>
                  <td colSpan={9} className="px-4 py-16 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#00A651] mx-auto" />
                  </td>
                </tr>
              ) : leads.length === 0 ? (
                <tr>
                  <td colSpan={9} className="px-4 py-16 text-center text-gray-400 font-medium">
                    No leads found.
                  </td>
                </tr>
              ) : (
                leads.map((lead, idx) => (
                  <tr key={lead.id} className={`hover:bg-gray-50 transition-colors ${selectedIds.includes(lead.id) ? 'bg-green-50/50' : ''}`}>
                    <td className="px-4 py-4 text-center">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-gray-300 text-[#00A651] focus:ring-[#00A651] cursor-pointer"
                        checked={selectedIds.includes(lead.id)}
                        onChange={() => toggleSelect(lead.id)}
                      />
                    </td>
                    <td className="px-4 py-4 font-medium text-gray-900">
                      {String((page - 1) * limit + idx + 1).padStart(2, "0")}
                    </td>
                    <td className="px-4 py-4 font-medium text-gray-900">
                      <div>{lead.name}</div>
                      {lead.email && (
                        <div className="text-xs text-gray-400 font-normal mt-0.5">{lead.email}</div>
                      )}
                    </td>
                    <td className="px-4 py-4 text-gray-500">
                      {[lead.location?.city, lead.location?.country].filter(Boolean).join(", ") || "—"}
                    </td>
                    <td className="px-4 py-4 text-gray-500">{lead.industry?.name || "—"}</td>
                    <td className="px-4 py-4 text-gray-500">{lead.campaign?.name || "—"}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getPlatformStyle(lead.platform)}`}>
                        {lead.platform}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusStyle(lead.status)}`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        {renderEmailButton(lead)}
                        <button
                          onClick={() => handleDelete(lead.id)}
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

        {/* Pagination Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 border-t border-gray-100 gap-4">
          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">
              Showing{" "}
              <span className="font-medium text-gray-900">
                {total === 0 ? 0 : (page - 1) * limit + 1}
              </span>{" "}
              to{" "}
              <span className="font-medium text-gray-900">
                {Math.min(page * limit, total)}
              </span>{" "}
              of{" "}
              <span className="font-medium text-gray-900">{total}</span> entries
            </p>
            
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-gray-400">|</span>
              <select 
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setPage(1);
                }}
                className="bg-transparent text-sm font-medium text-gray-600 focus:outline-none cursor-pointer hover:text-[#00A651] transition-colors"
              >
                <option value={10}>10 per page</option>
                <option value={50}>50 per page</option>
                <option value={100}>100 per page</option>
                <option value={200}>200 per page</option>
                <option value={500}>500 per page</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center justify-center px-3 h-8 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </button>
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-8 h-8 rounded text-sm font-medium flex items-center justify-center transition-colors ${
                  page === p
                    ? "bg-[#00A651] text-white"
                    : "hover:bg-gray-100 text-gray-600"
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center justify-center px-3 h-8 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Create Campaign Modal */}
      <Modal
        isOpen={isCreateOpen}
        onClose={() => { reset(); setIsCreateOpen(false); setCreateError(null); }}
        title="Create Campaign"
        width="max-w-2xl"
      >
        <form onSubmit={handleSubmit(onSaveCampaign)} className="space-y-4">
          {createError && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
              {createError}
            </div>
          )}

          <div className="bg-[#FAFBFD] p-5 rounded-[12px] border border-gray-100">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Campaign Name</label>
            <input
              {...register("name", { required: true })}
              placeholder="Enter campaign name"
              className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
            />
          </div>

          <div className="bg-[#FAFBFD] p-5 rounded-[12px] border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Scraping Logic</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Location</label>
                <input
                  {...register("location", { required: true })}
                  placeholder="e.g. New York, USA"
                  className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Industry</label>
                <input
                  {...register("industry", { required: true })}
                  placeholder="e.g. Real Estate"
                  className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Platform</label>
                <select
                  {...register("platform", { required: true })}
                  className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
                >
                  <option value="GoogleMaps">Google Maps</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Specification (optional)</label>
                <input
                  {...register("specification")}
                  placeholder="e.g. with phone number"
                  className="w-full h-12 px-4 bg-white border border-gray-200 rounded-[10px] text-sm focus:outline-none focus:border-[#00A651] transition-colors"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 bg-[#00A651] hover:bg-[#009345] text-white text-[15px] font-bold rounded-[8px] transition-colors shadow-sm disabled:opacity-60 flex items-center gap-2"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              Start Campaign
            </button>
          </div>
        </form>
      </Modal>

      {/* Bulk Outreach Modal */}
      <Modal
        isOpen={isBulkModalOpen}
        onClose={() => { if (!isBulkSending) setIsBulkModalOpen(false); }}
        title={`Bulk Outreach (${selectedIds.length} leads)`}
        width="max-w-2xl"
      >
        <div className="space-y-5">
          <div className="bg-[#FAFBFD] p-6 rounded-[16px] border border-gray-100 shadow-inner">
            <div className="flex items-center justify-between mb-3">
              <label className="block text-sm font-bold text-gray-700">Message Content</label>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-white border border-gray-100 rounded-md shadow-sm">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Placeholder:</span>
                <code className="text-[11px] font-mono font-bold text-[#00A651] bg-green-50 px-1 rounded">{`{name}`}</code>
              </div>
            </div>
            
            <textarea
              value={bulkMessage}
              onChange={(e) => setBulkMessage(e.target.value)}
              rows={10}
              placeholder="Write your personalized outreach message here..."
              className="w-full p-5 bg-white border border-gray-200 rounded-[12px] text-[15px] leading-relaxed text-gray-700 resize-none focus:outline-none focus:border-[#00A651] focus:ring-4 focus:ring-green-50 transition-all placeholder:text-gray-300 shadow-sm"
            />
            
            <div className="mt-4 flex items-start gap-2.5 p-3 bg-blue-50/50 rounded-lg border border-blue-100/50">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
              <p className="text-xs text-blue-600 font-medium leading-normal">
                Personalization works! Use <code className="font-bold">{`{name}`}</code> to automatically insert the lead's name into the email.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between px-2 pt-2">
            <p className="text-xs text-gray-400 font-medium">
              Targeting <span className="text-gray-900 font-bold">{selectedIds.length}</span> verified leads
            </p>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBulkModalOpen(false)}
                disabled={isBulkSending}
                className="px-6 py-2.5 text-gray-500 hover:text-gray-800 text-sm font-bold transition-colors disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmBulkSend}
                disabled={isBulkSending}
                className="px-8 py-3 bg-[#00A651] hover:bg-[#009345] text-white text-[15px] font-bold rounded-[10px] transition-all shadow-md hover:shadow-lg active:scale-[0.98] disabled:opacity-60 flex items-center gap-2.5"
              >
                {isBulkSending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Messages...
                  </>
                ) : (
                  <>
                    <Mail size={18} />
                    Send Messages Now
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

// ── Small helper component for active filter tags ────────────────────────────

function FilterTag({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-[#e6f7f0] text-[#00A651] text-xs font-semibold rounded-full">
      {label}
      <button onClick={onRemove} className="hover:text-[#007a3d] transition-colors">
        <X size={12} />
      </button>
    </span>
  );
}
