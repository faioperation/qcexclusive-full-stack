"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Edit2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";

interface ProfileFormData {
  name: string;
  email: string;
  phone: string;
}

interface PasswordFormData {
  oldPassword: string;
  newPassword: string;
  confirmPassword: string;
}

export function ProfilePage() {
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [isChangePasswordOpen, setIsChangePasswordOpen] = useState(false);

  const { register: registerProfile, handleSubmit: handleSubmitProfile, reset: resetProfile } = useForm<ProfileFormData>({
    defaultValues: {
      name: "Akash Rohman",
      email: "algoridomai@gmail.com",
      phone: "+8801486545864",
    }
  });

  const { register: registerPassword, handleSubmit: handleSubmitPassword, watch, reset: resetPassword, formState: { errors: pwdErrors } } = useForm<PasswordFormData>();
  
  const newPassword = watch("newPassword");

  const onProfileSave = (data: ProfileFormData) => {
    console.log("Profile update:", data);
    setIsEditProfileOpen(false);
  };

  const onPasswordSave = (data: PasswordFormData) => {
    console.log("Password update:", data);
    resetPassword();
    setIsChangePasswordOpen(false);
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 relative">
        <h2 className="text-[22px] font-bold text-gray-900 mb-8">Profile</h2>
        
        {/* Edit Icon top right corner */}
        <button 
          onClick={() => setIsEditProfileOpen(true)}
          className="absolute top-8 right-8 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <Edit2 size={18} />
        </button>

        <div className="flex flex-col md:flex-row md:items-start gap-6 w-full">
          {/* Avatar Section */}
          <div className="flex flex-col items-center sm:items-start gap-4 flex-shrink-0">
            <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden ring-4 ring-gray-50">
              <img 
                src="https://ui-avatars.com/api/?name=Akash+Rohman&background=E5E7EB&color=374151&size=256" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>

          {/* Form Fields Display Area */}
          <div className="flex-1 space-y-5">
            <div className="flex justify-end mb-2">
              <button 
                onClick={() => setIsChangePasswordOpen(true)}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md transition-colors"
              >
                Change Password
              </button>
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Name</label>
              <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                Akash Rohman
              </div>
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Email</label>
              <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800 relative">
                algoridomai@gmail.com
              </div>
            </div>

            <div>
              <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Number</label>
              <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                +8801486545864
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <Modal isOpen={isEditProfileOpen} onClose={() => setIsEditProfileOpen(false)} title="Edit Profile">
        <form onSubmit={handleSubmitProfile(onProfileSave)} className="space-y-5">
          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border border-gray-200">
              <img 
                src="https://ui-avatars.com/api/?name=Akash+Rohman&background=E5E7EB&color=374151" 
                alt="Profile" 
                className="w-full h-full object-cover" 
              />
            </div>
            <button type="button" className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-gray-700 text-xs font-semibold rounded-md transition-colors border border-gray-200">
              Upload File
            </button>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Name</label>
            <input 
              {...registerProfile("name", { required: true })}
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
            <input 
              {...registerProfile("email", { required: true })}
              type="email"
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Number</label>
            <input 
              {...registerProfile("phone", { required: true })}
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={() => { resetProfile(); setIsEditProfileOpen(false); }}
              className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
            >
              Save Change
            </button>
          </div>
        </form>
      </Modal>

      {/* Change Password Modal */}
      <Modal isOpen={isChangePasswordOpen} onClose={() => { resetPassword(); setIsChangePasswordOpen(false); }} title="Change Password">
        <form onSubmit={handleSubmitPassword(onPasswordSave)} className="space-y-5">
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Old Password</label>
            <input 
              {...registerPassword("oldPassword", { required: "Required" })}
              type="password"
              placeholder="••••••"
              className={`w-full h-11 px-4 border ${pwdErrors.oldPassword ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]`}
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">New Password</label>
            <input 
              {...registerPassword("newPassword", { required: "Required", minLength: 6 })}
              type="password"
              placeholder="••••••"
              className={`w-full h-11 px-4 border ${pwdErrors.newPassword ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]`}
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Confirm Password</label>
            <input 
              {...registerPassword("confirmPassword", { 
                required: "Required",
                validate: value => value === newPassword || "Passwords do not match"
              })}
              type="password"
              placeholder="••••••"
              className={`w-full h-11 px-4 border ${pwdErrors.confirmPassword ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]`}
            />
            {pwdErrors.confirmPassword && (
              <p className="mt-1 text-xs text-red-500">{pwdErrors.confirmPassword.message}</p>
            )}
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button 
              type="button" 
              onClick={() => { resetPassword(); setIsChangePasswordOpen(false); }}
              className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
            >
              Save Change
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
