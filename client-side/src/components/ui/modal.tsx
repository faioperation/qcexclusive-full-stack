import React, { useEffect, useSyncExternalStore } from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  width?: string;
}

const emptySubscribe = () => () => {};

export function Modal({ isOpen, onClose, title, children, width = "w-full max-w-xl" }: ModalProps) {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity" 
        onClick={onClose}
      />
      <div className={`relative bg-white rounded-[16px] shadow-lg ${width} max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-200`}>
        <div className="flex items-center justify-between p-6 pb-2">
          <h2 className="text-[20px] font-bold text-gray-900">{title}</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-900 transition-colors bg-white p-1 rounded-full hover:bg-gray-100"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 pt-4 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>,
    document.body
  );
}
