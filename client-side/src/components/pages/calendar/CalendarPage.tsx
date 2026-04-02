"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Clock, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/modal";

interface Meeting {
  id: number;
  name: string;
  role: string;
  avatar: string;
  time: string;
  duration: string;
  link: string;
  status: "start" | "complete";
}

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 5, 1)); // June 2026
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [meetings, setMeetings] = useState<Meeting[]>([
    {
      id: 1,
      name: "Cameron Williamson",
      role: "Developer",
      avatar: "https://ui-avatars.com/api/?name=Cameron+Williamson&background=E5E7EB&color=374151",
      time: "10:30 AM-11:30 AM",
      duration: "1 hour",
      link: "meet.google.com/cnz-jdhg",
      status: "start"
    },
    {
      id: 2,
      name: "Brooklyn Simmons",
      role: "Developer",
      avatar: "https://ui-avatars.com/api/?name=Brooklyn+Simmons&background=E5E7EB&color=374151",
      time: "01:00 PM-02:30 PM",
      duration: "1 hour",
      link: "meet.google.com/cnz-jdhg",
      status: "start"
    }
  ]);

  const toggleMeetingStatus = (id: number) => {
    setMeetings(prev => prev.map(m => 
      m.id === id ? { ...m, status: m.status === "start" ? "complete" : "start" } : m
    ));
  };

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // Custom meetings mock data to mimic Figma "Have a 2 Meeting" elements
  const mockEvents: Record<number, { count: number; attendees: string[] }>  = {
    1: { count: 2, attendees: ["CW", "BS"] },
    12: { count: 2, attendees: ["JH", "SA"] },
    15: { count: 1, attendees: ["AR"] },
    25: { count: 3, attendees: ["MK", "TR", "LP"] },
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  const renderCells = () => {
    const cells = [];
    
    // Empty padding for days before start of month
    for (let i = 0; i < firstDay; i++) {
       cells.push(<div key={`empty-${i}`} className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 p-4"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
       const hasEvent = mockEvents[day];
       
       cells.push(
         <div 
           key={day} 
           onClick={() => hasEvent && day === 1 && setIsModalOpen(true)}
           className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 p-3 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group"
         >
           <span className="text-sm font-semibold text-gray-700 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#00A651] group-hover:text-white transition-colors mb-2">
             {day}
           </span>
           
           {hasEvent && (
             <div className="mt-1 flex flex-col gap-2 w-full">
               <div className="bg-[#FFEFE5] border border-[#FFD5B8] rounded-[8px] p-2 hover:shadow-sm transition-all cursor-pointer">
                  <div className="flex -space-x-2 overflow-hidden mb-1.5 px-0.5">
                    {hasEvent.attendees.map((initials, idx) => (
                      <div key={idx} className="inline-block h-6 w-6 rounded-full ring-2 ring-white bg-[#00A651] flex items-center justify-center text-[10px] text-white font-bold">
                        {initials}
                      </div>
                    ))}
                  </div>
                  <p className="text-[11px] font-semibold text-[#E56E25]">Have a {hasEvent.count} Meeting</p>
               </div>
             </div>
           )}
         </div>
       );
    }
    
    // Fill remaining grid to keep structure nice
    const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;
    const remainingCells = totalCells - (firstDay + daysInMonth);
    for (let i = 0; i < remainingCells; i++) {
        cells.push(<div key={`end-empty-${i}`} className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 p-4"></div>);
    }

    return cells;
  };

  const monthName = currentDate.toLocaleString('default', { month: 'short' }).toUpperCase();
  const year = currentDate.getFullYear();

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Calendar Header */}
        <div className="h-[72px] px-6 border-b border-gray-100 flex justify-between items-center bg-[#FAFBFD]">
          <h2 className="text-xl font-bold text-gray-900">{monthName} {year}</h2>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={prevMonth}
              className="w-10 h-10 bg-white border border-gray-200 rounded-[8px] flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#00A651] transition-colors shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={nextMonth}
              className="w-10 h-10 bg-white border border-gray-200 rounded-[8px] flex items-center justify-center text-gray-600 hover:bg-gray-50 hover:text-[#00A651] transition-colors shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 border-b border-gray-100 bg-white">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-4 text-center text-sm font-bold text-gray-400 tracking-wider font-montserrat">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-[#F0F0F0] gap-px">
          {renderCells()}
        </div>

      </div>

      {/* Meeting Schedule Modal */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Meeting Schedule" 
        width="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-gray-600 font-medium">
            <CalendarIcon size={18} />
            <span>1 June 2026</span>
          </div>
          
          <div className="space-y-8 divide-y divide-gray-100">
            {meetings.map((meeting, idx) => (
              <div key={meeting.id} className={idx > 0 ? "pt-8" : ""}>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-500 mb-3">Information</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-100 relative">
                        <Image src={meeting.avatar} fill className="object-cover" alt={meeting.name} />
                      </div>
                      <div>
                        <p className="text-[15px] font-bold text-gray-900">{meeting.name}</p>
                        <p className="text-xs text-gray-500 font-medium">{meeting.role}</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[13px] font-semibold text-gray-500">Date & Time</p>
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <CalendarIcon size={16} className="text-gray-400" />
                        <span>Thursday, 1 June 2026</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                        <Clock size={16} className="text-gray-400" />
                        <span>{meeting.time} <span className="text-gray-400 font-normal">({meeting.duration})</span></span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-[13px] font-semibold text-gray-500">Meeting Link</p>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-11 bg-[#F8F9FA] border border-gray-100 rounded-[8px] px-4 flex items-center text-sm text-blue-600 font-medium">
                        {meeting.link}
                      </div>
                      <button 
                        onClick={() => toggleMeetingStatus(meeting.id)}
                        className={`h-11 px-6 rounded-[8px] text-[15px] font-bold flex items-center justify-between transition-all ${
                          meeting.status === "start" 
                          ? "bg-[#00A651] hover:bg-[#009345] text-white min-w-[150px] justify-center" 
                          : "bg-[#00A651] text-white w-[180px]"
                        }`}
                      >
                        {meeting.status === "start" ? (
                          "Start Meeting"
                        ) : (
                          <>
                            <span>Complete</span>
                            <ChevronDown size={20} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal>

    </div>
  );
}
