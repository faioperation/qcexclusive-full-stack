"use client";

import React from "react";
import { 
  Users, 
  Send, 
  Calendar as CalendarIcon, 
  UserPlus, 
  TrendingUp,
  TrendingDown,
  MoreVertical,
  ArrowUpRight,
  Video
} from "lucide-react";
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  PieChart, Pie, Cell 
} from "recharts";

// Mock Data
const LINE_DATA = [
  { name: '1 Jan', current: 150, previous: 100 },
  { name: '5 Jan', current: 210, previous: 180 },
  { name: '10 Jan', current: 170, previous: 220 },
  { name: '15 Jan', current: 250, previous: 190 },
  { name: '20 Jan', current: 480, previous: 170 },
  { name: '25 Jan', current: 350, previous: 380 },
  { name: '30 Jan', current: 420, previous: 500 },
];

const DONUT_DATA = [
  { name: 'Meetings Booked', value: 52.1, color: '#31333E' },
  { name: 'Interested Leads', value: 22.8, color: '#90CDF4' },
  { name: 'Message Response', value: 13.9, color: '#A3E635' },
  { name: "Don't Reply", value: 11.2, color: '#6366F1' },
];

const RECENT_LEADS = [
  { id: 1, name: "Jane Cooper", industry: "Home Builders", location: "Lafayette, California", platform: "Instagram", status: "1 min ago" },
  { id: 2, name: "Jacob Jones", industry: "Construction", location: "Lansing, Illinois", platform: "Facebook", status: "50 min ago" },
  { id: 3, name: "Dianne Russell", industry: "Real Estate", location: "Corona, Michigan", platform: "Instagram", status: "2 hours ago" },
  { id: 4, name: "Theresa Webb", industry: "Marketing", location: "Pasadena, Oklahoma", platform: "Facebook", status: "6 hours ago" },
  { id: 5, name: "Courtney Henry", industry: "Finance", location: "Stockton, New Hampshire", platform: "Instagram", status: "1 day ago" },
  { id: 6, name: "Kathryn Murphy", industry: "Marketer", location: "Portland, Illinois", platform: "Facebook", status: "8 day ago" },
  { id: 7, name: "Eleanor Pena", industry: "Plumbing", location: "Syracuse, Connecticut", platform: "Facebook", status: "9 day ago" },
];

const MEETINGS = [
  { title: "Dev Sync Meeting", date: "Mon, July 8, 2026-10:00 AM" },
  { title: "Retrospective Meeting", date: "Tue, July 9, 2026-09:00 AM" },
  { title: "QA Alignment Call", date: "Thu, July 11, 2026-11:00 AM" },
  { title: "QA Alignment Call", date: "Thu, July 11, 2026-11:00 AM" },
];

export function DashboardPage() {

  const getPlatformStyle = (platform: string) => {
    switch(platform) {
      case "Instagram": return "bg-pink-50 text-pink-600";
      case "Facebook": return "bg-blue-50 text-blue-600";
      default: return "bg-gray-50 text-gray-600";
    }
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1600px] mx-auto space-y-8 bg-[#F8F9FA]">
      
      {/* 4 Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Leads", val: "85", icon: <Users size={22} />, bg: "bg-[#F3E8FF] text-purple-500", inc: "20.2%", trend: "up" },
          { title: "Messages Sent", val: "69", icon: <Send size={22} />, bg: "bg-[#FFF3E0] text-orange-500", inc: "30.5%", trend: "up" },
          { title: "Meetings Booked", val: "15", icon: <CalendarIcon size={22} />, bg: "bg-[#E0F2FE] text-blue-500", inc: "5.2%", trend: "down" },
          { title: "Interested Leads", val: "25", icon: <UserPlus size={22} />, bg: "bg-[#E1F7E3] text-[#00A651]", inc: "2.2%", trend: "up" },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-[24px] p-6 shadow-sm border border-gray-100 flex items-start justify-between">
            <div className="space-y-4">
              <p className="text-[15px] font-semibold text-gray-700">{stat.title}</p>
              <h3 className="text-[40px] font-bold text-gray-900 leading-none">{stat.val}</h3>
              <div className="flex items-center gap-2">
                <span className={`flex items-center text-xs font-bold px-2 py-1 rounded-[8px] ${stat.trend === 'up' ? 'text-[#00A651] bg-[#E1F7E3]' : 'text-red-500 bg-red-50'}`}>
                  {stat.inc} {stat.trend === 'up' ? '↗' : '↘'}
                </span>
                <span className="text-xs font-medium text-gray-400">From last month</span>
              </div>
            </div>
            <div className={`w-12 h-12 rounded-[14px] ${stat.bg} flex items-center justify-center`}>
              {stat.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Line Chart */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-[18px] font-bold text-gray-900">Total Leads</h3>
            <div className="flex items-center gap-8 text-[13px] font-bold">
              <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-purple-500"></div> This Month</span>
              <span className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-blue-200"></div> Last Month</span>
            </div>
          </div>
          <div className="h-[320px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={LINE_DATA} margin={{ top: 5, right: 10, bottom: 5, left: -20 }}>
                <CartesianGrid strokeDasharray="0" vertical={false} stroke="#F3F4F6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 13, fontWeight: 500}} dy={15} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#9CA3AF', fontSize: 13, fontWeight: 500}} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  labelStyle={{ fontWeight: 'bold' }}
                />
                <Line type="monotone" dataKey="current" stroke="#A855F7" strokeWidth={3} dot={false} activeDot={{ r: 6, fill: '#fff', stroke: '#A855F7', strokeWidth: 3 }} />
                <Line type="monotone" dataKey="previous" stroke="#BFDBFE" strokeWidth={2} strokeDasharray="5 5" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Donut Chart */}
        <div className="col-span-1 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100 flex flex-col">
           <div className="flex justify-between items-center mb-8">
            <h3 className="text-[18px] font-bold text-gray-900">Traffic by Location</h3>
          </div>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="h-[210px] w-full relative mb-10">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={DONUT_DATA} innerRadius={65} outerRadius={90} paddingAngle={2} dataKey="value" startAngle={90} endAngle={450}>
                    {DONUT_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="absolute inset-0 flex items-center justify-center flex-col pointer-events-none">
                <span className="text-2xl font-bold text-gray-900">100%</span>
              </div>
            </div>

            <div className="space-y-4">
              {DONUT_DATA.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center text-[13px]">
                  <div className="flex items-center gap-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="font-semibold text-gray-600">{item.name}</span>
                  </div>
                  <span className="font-bold text-gray-900">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 pb-6">
        
        {/* Recent Leads Table */}
        <div className="col-span-1 lg:col-span-2 bg-white rounded-[24px] shadow-sm border border-gray-100 overflow-hidden">
           <div className="flex justify-between items-center p-8">
            <h3 className="text-[18px] font-bold text-gray-900">Recent Leads</h3>
            <button className="p-1 hover:bg-gray-50 rounded-md transition-colors text-gray-400">
              <MoreVertical size={20} />
            </button>
          </div>
          <div className="overflow-x-auto w-full">
            <table className="w-full text-left text-[13px] whitespace-nowrap">
              <thead className="bg-[#FAFBFD] text-gray-500 font-bold border-y border-gray-50">
                <tr>
                  <th className="px-8 py-4">#</th>
                  <th className="px-4 py-4 uppercase tracking-wider">Name</th>
                  <th className="px-4 py-4 uppercase tracking-wider">Industry</th>
                  <th className="px-4 py-4 uppercase tracking-wider">Location</th>
                  <th className="px-4 py-4 uppercase tracking-wider">Platform</th>
                  <th className="px-8 py-4 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {RECENT_LEADS.map((lead, idx) => (
                  <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-5 font-bold text-gray-500">{String(idx + 1).padStart(2, '0')}</td>
                    <td className="px-4 py-5 font-bold text-gray-800">{lead.name}</td>
                    <td className="px-4 py-5 font-semibold text-gray-500">{lead.industry}</td>
                    <td className="px-4 py-5 font-semibold text-gray-500">{lead.location}</td>
                    <td className="px-4 py-5">
                      <span className={`px-2.5 py-1 rounded-[6px] font-bold text-[11px] ${getPlatformStyle(lead.platform)}`}>
                        {lead.platform}
                      </span>
                    </td>
                    <td className="px-8 py-5 font-bold text-gray-900">{lead.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Upcoming Meetings List */}
        <div className="col-span-1 bg-white rounded-[24px] p-8 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-[18px] font-bold text-gray-900">Upcoming Meeting</h3>
            <button className="p-1 hover:bg-gray-50 rounded-md transition-colors text-gray-400">
              <MoreVertical size={20} />
            </button>
          </div>
          
          <div className="space-y-4">
             {MEETINGS.map((meeting, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 border border-gray-50 rounded-[16px] hover:border-gray-200 transition-colors cursor-pointer bg-[#FAFBFD]">
                   <div className="w-11 h-11 rounded-[12px] bg-white shadow-sm border border-gray-100 flex items-center justify-center shrink-0">
                     <div className="w-6 h-6 rounded-md bg-[#FAFBFD] flex items-center justify-center text-[#34A853]">
                        <Video size={16} fill="currentColor" />
                     </div>
                   </div>
                   <div className="flex-1 min-w-0">
                     <h4 className="font-bold text-gray-900 text-[14px] mb-0.5 truncate">{meeting.title}</h4>
                     <p className="text-[11px] font-bold text-gray-400">{meeting.date}</p>
                   </div>
                </div>
             ))}
          </div>

        </div>

      </div>
    </div>
  );
}
