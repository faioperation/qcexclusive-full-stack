"use client";

import React, { useState } from "react";
import { Search, MoreVertical, Paperclip, Send } from "lucide-react";

const MOCK_CONVERSATIONS = [
  { id: 1, name: "Sojol Hossen", role: "Digital Creator", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 2, active: true },
  { id: 2, name: "Istiak Ahmed", role: "Digital Creator", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 0, active: false },
  { id: 3, name: "Abirul Islam", role: "Digital Creator", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 0, active: false },
  { id: 4, name: "Sojib Hossen", role: "Digital Creator", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 0, active: false },
  { id: 5, name: "Khabib Nurmagomedov", role: "Fighter", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 1, active: false },
  { id: 6, name: "Conor McGregor", role: "Fighter", msg: "I recently noticed your channel...", time: "11:21 PM", unread: 0, active: false },
];

const MOCK_MESSAGES = [
  { id: 1, sender: "me", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.", time: "11:21 PM" },
  { id: 2, sender: "them", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.", time: "11:22 PM" },
  { id: 3, sender: "me", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking.", time: "11:25 PM" },
  { id: 4, sender: "them", text: "There are many variations of passages of Lorem Ipsum available.", time: "11:30 PM" },
];

export function InboxPage() {
  const [conversations] = useState(MOCK_CONVERSATIONS);
  const [messages, setMessages] = useState(MOCK_MESSAGES);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setMessages([...messages, { id: messages.length + 1, sender: "me", text: newMessage, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setNewMessage("");
  };

  const activeContact = conversations.find(c => c.active) || conversations[0];

  return (
    <div className="flex h-[calc(100vh-72px)]  p-6 gap-6 w-full max-w-[1500px] mx-auto overflow-hidden">
      
      {/* Left Panel - Conversation List */}
      <div className="w-[380px] bg-white rounded-[16px] border border-gray-100 flex flex-col shadow-sm shrink-0 overflow-hidden hidden md:flex">
        
        {/* Search Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search Name..." 
              className="w-full h-[46px] pl-10 pr-4 bg-[#F8F9FA] rounded-[8px] text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#00A651] transition-colors"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div 
              key={chat.id} 
              className={`flex items-center gap-3 p-4 border-b border-gray-50 cursor-pointer transition-colors ${
                chat.active ? "bg-gray-50 border-l-4 border-l-[#00A651]" : "hover:bg-gray-50 border-l-4 border-l-transparent"
              }`}
            >
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                <img 
                  src={`https://ui-avatars.com/api/?name=${chat.name.replace(" ", "+")}&background=random`} 
                  alt={chat.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-semibold text-gray-900 truncate pr-2">{chat.name}</h4>
                  <span className="text-xs text-gray-400 shrink-0 mt-0.5">{chat.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 truncate mr-2">{chat.msg}</p>
                  {chat.unread > 0 && (
                    <span className="w-5 h-5 bg-[#00A651] text-white text-[10px] font-bold flex items-center justify-center rounded-full shrink-0">
                      {chat.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Panel - Chat Area */}
      <div className="flex-1 bg-white rounded-[16px] border border-gray-100 flex flex-col shadow-sm overflow-hidden">
        
        {/* Chat Header */}
        <div className="h-[76px] px-6 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100">
              <img 
                src={`https://ui-avatars.com/api/?name=${activeContact.name.replace(" ", "+")}&background=random`} 
                alt={activeContact.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 leading-tight">{activeContact.name}</h3>
              <p className="text-sm text-gray-500">{activeContact.role}</p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-700 transition-colors p-2">
            <MoreVertical size={20} />
          </button>
        </div>

        {/* Messages Flow */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
          <div className="text-center">
            <span className="text-xs font-medium text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">
              Today, May 12
            </span>
          </div>

          {messages.map((msg, idx) => {
            const isMe = msg.sender === "me";
            return (
              <div key={idx} className={`flex ${isMe ? "justify-end" : "justify-start"}`}>
                <div className={`flex flex-col max-w-[70%] ${isMe ? "items-end" : "items-start"}`}>
                  <div 
                    className={`p-4 rounded-[16px] text-[15px] leading-relaxed mb-1 ${
                      isMe 
                        ? "bg-[#00A651] text-white rounded-tr-sm" 
                        : "bg-white border border-gray-100 text-gray-800 rounded-tl-sm shadow-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[11px] text-gray-400 font-medium px-1">
                    {msg.time}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        
        

      </div>
    </div>
  );
}
