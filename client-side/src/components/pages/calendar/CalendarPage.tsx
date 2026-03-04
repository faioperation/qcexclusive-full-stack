"use client";

import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CalendarPage() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // May 2026

  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  
  // Custom meetings mock data to mimic Figma "Have a 2 Meeting" elements
  const mockEvents: Record<number, { count: number; attendees: string[] }>  = {
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
       cells.push(<div key={`empty-${i}`} className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 border-l-0 p-4"></div>);
    }

    // Actual days
    for (let day = 1; day <= daysInMonth; day++) {
       const hasEvent = mockEvents[day];
       
       cells.push(
         <div key={day} className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 p-3 flex flex-col hover:bg-gray-50 transition-colors cursor-pointer group">
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
    const remainingCells = 42 - (firstDay + daysInMonth); // 6 rows of 7
    for (let i = 0; i < remainingCells; i++) {
        cells.push(<div key={`end-empty-${i}`} className="min-h-[140px] bg-white border border-[#f0f0f0] border-t-0 border-l-0 p-4"></div>);
    }

    return cells;
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <div className="p-6 md:p-8 w-full max-w-[1400px] mx-auto">
      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        
        {/* Calendar Header */}
        <div className="h-[72px] px-6 border-b border-gray-100 flex justify-between items-center bg-[#FAFBFD]">
          <h2 className="text-xl font-bold text-gray-900">{monthName}, {year}</h2>
          
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
            <div key={day} className="py-4 text-center text-sm font-bold text-gray-500 tracking-wider">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 bg-gray-50">
          {renderCells()}
        </div>

      </div>
    </div>
  );
}
