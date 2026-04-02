"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, MoreVertical, Paperclip, Send, Loader2 } from "lucide-react";
import Image from "next/image";
import { getAllConversations } from "@/services/inbox/inbox.apis";

interface Conversation {
  id: string;
  lead: {
    id: string;
    name: string;
    platform?: string;
    industry?: { name: string };
  };
  lastMessage?: string;
  updatedAt: string;
  unreadCount?: number;
}

interface Message {
  id: string;
  content: string;
  sender: "me" | "them";
  createdAt: string;
}

export function InboxPage() {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConv, setSelectedConv] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoadingConvs, setIsLoadingConvs] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const fetchConversations = useCallback(async () => {
    setIsLoadingConvs(true);
    try {
      const result = await getAllConversations();
      if (result?.success) {
        const convs = result.data?.data ?? result.data ?? [];
        setConversations(convs);
        if (!selectedConv && convs.length > 0) {
          setSelectedConv(convs[0]);
        }
      }
    } catch {
      // silently fail
    } finally {
      setIsLoadingConvs(false);
    }
  }, [selectedConv]);

  useEffect(() => {
    fetchConversations();
  }, [fetchConversations]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!newMessage.trim()) return;
    const now = new Date();
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        content: newMessage,
        sender: "me",
        createdAt: now.toISOString(),
      },
    ]);
    setNewMessage("");
    // TODO: call sendInboxMessage API when available
  };

  const formatTime = (iso: string) => {
    try {
      return new Date(iso).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    } catch {
      return "";
    }
  };

  const activeContact = selectedConv;

  return (
    <div className="flex h-[calc(100vh-72px)] p-6 gap-6 w-full max-w-[1500px] mx-auto overflow-hidden">

      {/* Left Panel - Conversation List */}
      <div className="w-[380px] bg-white rounded-[16px] border border-gray-100 flex flex-col shadow-sm shrink-0 overflow-hidden hidden md:flex">

        {/* Search Header */}
        <div className="p-5 border-b border-gray-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search Name..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full h-[46px] pl-10 pr-4 bg-[#F8F9FA] rounded-[8px] text-sm focus:outline-none focus:bg-white focus:ring-1 focus:ring-[#00A651] transition-colors"
            />
          </div>
        </div>

        {/* Contact List */}
        <div className="flex-1 overflow-y-auto">
          {isLoadingConvs ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="w-6 h-6 animate-spin text-[#00A651]" />
            </div>
          ) : conversations.length === 0 ? (
            <p className="text-center text-gray-400 text-sm py-12 font-medium">No conversations yet.</p>
          ) : (
            conversations.map((chat) => {
              const isActive = selectedConv?.id === chat.id;
              return (
                <div
                  key={chat.id}
                  onClick={() => setSelectedConv(chat)}
                  className={`flex items-center gap-3 p-4 border-b border-gray-50 cursor-pointer transition-colors ${
                    isActive
                      ? "bg-gray-50 border-l-4 border-l-[#00A651]"
                      : "hover:bg-gray-50 border-l-4 border-l-transparent"
                  }`}
                >
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-100">
                    <Image
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(chat.lead?.name || "U")}&background=random`}
                      alt={chat.lead?.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-semibold text-gray-900 truncate pr-2">{chat.lead?.name}</h4>
                      <span className="text-xs text-gray-400 shrink-0 mt-0.5">{formatTime(chat.updatedAt)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 truncate mr-2">
                        {chat.lastMessage || chat.lead?.industry?.name || "No messages yet"}
                      </p>
                      {(chat.unreadCount ?? 0) > 0 && (
                        <span className="w-5 h-5 bg-[#00A651] text-white text-[10px] font-bold flex items-center justify-center rounded-full shrink-0">
                          {chat.unreadCount}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Right Panel - Chat Area */}
      <div className="flex-1 bg-white rounded-[16px] border border-gray-100 flex flex-col shadow-sm overflow-hidden">

        {activeContact ? (
          <>
            {/* Chat Header */}
            <div className="h-[76px] px-6 border-b border-gray-100 flex items-center justify-between shrink-0 bg-white">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gray-100 relative">
                  <Image
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(activeContact.lead?.name || "U")}&background=random`}
                    alt={activeContact.lead?.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 leading-tight">{activeContact.lead?.name}</h3>
                  <p className="text-sm text-gray-500">{activeContact.lead?.industry?.name || activeContact.lead?.platform || "Lead"}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-700 transition-colors p-2">
                <MoreVertical size={20} />
              </button>
            </div>

            {/* Messages Flow */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#FAFAFA]">
              {messages.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-400 text-sm font-medium">No messages yet. Start the conversation!</p>
                </div>
              ) : (
                <>
                  <div className="text-center">
                    <span className="text-xs font-medium text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-100">
                      Today
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
                            {msg.content}
                          </div>
                          <span className="text-[11px] text-gray-400 font-medium px-1">
                            {formatTime(msg.createdAt)}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                  <div ref={messagesEndRef} />
                </>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-gray-100 bg-white shrink-0">
              <div className="flex items-center gap-3 px-4 py-3 bg-[#F8F9FA] rounded-[12px]">
                <button className="text-gray-400 hover:text-gray-600 transition-colors shrink-0">
                  <Paperclip size={20} />
                </button>
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="flex-1 bg-transparent text-sm text-gray-800 focus:outline-none placeholder:text-gray-400"
                />
                <button
                  onClick={handleSend}
                  disabled={!newMessage.trim()}
                  className="w-9 h-9 rounded-full bg-[#00A651] hover:bg-[#009345] text-white flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-gray-400 text-sm font-medium">Select a conversation to start chatting.</p>
          </div>
        )}
      </div>
    </div>
  );
}
