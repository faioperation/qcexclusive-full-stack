"use client";

import React, { useState } from "react";
import { Search, Filter, Download, MessageSquare, Trash2, Plus, ChevronLeft, ChevronRight } from "lucide-react";

// Mock data to match the UI state perfectly
const MOCK_LEADS = [
  { id: 1, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Instagram", followers: "1M", status: "Running" },
  { id: 2, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Facebook", followers: "1M", status: "Start" },
  { id: 3, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Video Editor", campaign: "05/01/2026", platform: "LinkedIn", followers: "1M", status: "Complete" },
  { id: 4, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Instagram", followers: "1M", status: "Running" },
  { id: 5, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Instagram", followers: "1M", status: "Running" },
  { id: 6, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Facebook", followers: "1M", status: "Start" },
  { id: 7, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Video Editor", campaign: "05/01/2026", platform: "LinkedIn", followers: "1M", status: "Complete" },
  { id: 8, name: "Sojol Hossen", location: "Dhaka, Bangladesh", industry: "Digital Creator", campaign: "05/01/2026", platform: "Instagram", followers: "1M", status: "Running" },
];

export function LeadsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const getPlatformStyle = (platform: string) => {
    switch(platform) {
      case "Instagram": return "bg-pink-50 text-pink-600";
      case "Facebook": return "bg-blue-50 text-blue-600";
      case "LinkedIn": return "bg-sky-50 text-sky-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "Running": return "bg-orange-50 text-orange-600";
      case "Start": return "bg-blue-50 text-blue-600";
      case "Complete": return "bg-green-50 text-[#00A651]";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      {/* Top Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto">
          {/* Search bar */}
          <div className="relative w-full sm:w-[280px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-10 pl-10 pr-4 bg-white border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
            />
          </div>
          {/* Filter button */}
          <button className="flex items-center justify-center w-10 h-10 bg-white border border-gray-200 text-gray-600 rounded-[8px] hover:bg-gray-50 transition-colors shrink-0">
            <Filter size={18} />
          </button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-[8px] transition-colors whitespace-nowrap">
            <Download size={18} />
            Export CSV
          </button>
          <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-5 h-10 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors whitespace-nowrap">
            <Plus size={18} />
            Create Campaign
          </button>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden flex flex-col">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm text-gray-700 whitespace-nowrap">
            <thead className="bg-[#FAFBFD] text-gray-600 font-medium border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 w-12 text-center">
                  <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00A651] focus:ring-[#00A651]" />
                </th>
                <th className="px-4 py-4 font-semibold w-16">#</th>
                <th className="px-4 py-4 font-semibold">Name</th>
                <th className="px-4 py-4 font-semibold">Location</th>
                <th className="px-4 py-4 font-semibold">Industry</th>
                <th className="px-4 py-4 font-semibold">Campaign</th>
                <th className="px-4 py-4 font-semibold">Platform</th>
                <th className="px-4 py-4 font-semibold">Followers</th>
                <th className="px-4 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {MOCK_LEADS.map((lead, idx) => (
                <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 text-center">
                     <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#00A651] focus:ring-[#00A651]" />
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-900">{String(idx + 1).padStart(2, "0")}</td>
                  <td className="px-4 py-4 font-medium text-gray-900">{lead.name}</td>
                  <td className="px-4 py-4 text-gray-500">{lead.location}</td>
                  <td className="px-4 py-4 text-gray-500">{lead.industry}</td>
                  <td className="px-4 py-4 text-gray-500">{lead.campaign}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getPlatformStyle(lead.platform)}`}>
                      {lead.platform}
                    </span>
                  </td>
                  <td className="px-4 py-4 font-medium text-gray-900">{lead.followers}</td>
                  <td className="px-4 py-4">
                    <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusStyle(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-gray-400 hover:text-[#00A651] transition-colors" title="Message">
                        <MessageSquare size={18} />
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors" title="Delete">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Footer */}
        <div className="flex flex-col sm:flex-row items-center justify-between px-6 py-4 border-t border-gray-100 gap-4">
          <p className="text-sm text-gray-500">
            Showing <span className="font-medium text-gray-900">1</span> to <span className="font-medium text-gray-900">18</span> of <span className="font-medium text-gray-900">120</span> entries
          </p>
          <div className="flex items-center gap-1">
            <button className="flex items-center justify-center px-3 h-8 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors">
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </button>
            <button className="w-8 h-8 rounded bg-[#00A651] text-white text-sm font-medium flex items-center justify-center">1</button>
            <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center transition-colors">2</button>
            <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center transition-colors">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-400 text-sm">...</span>
            <button className="w-8 h-8 rounded hover:bg-gray-100 text-gray-600 text-sm font-medium flex items-center justify-center transition-colors">5</button>
            <button className="flex items-center justify-center px-3 h-8 rounded border border-gray-200 text-gray-500 hover:bg-gray-50 text-sm font-medium transition-colors">
              Next
              <ChevronRight size={16} className="ml-1" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
