"use client";

import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Edit2, Loader2 } from "lucide-react";
import Image from "next/image";
import { Modal } from "@/components/ui/modal";
import { getMyProfile, updateMyProfile, IUserProfile } from "@/services/user/user.apis";

interface ProfileFormData {
  name: string;
  contactNo: string;
}

export function ProfilePage() {
  const [profile, setProfile] = useState<IUserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
  const [updateError, setUpdateError] = useState<string | null>(null);
  const [updateSuccess, setUpdateSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register: registerProfile,
    handleSubmit: handleSubmitProfile,
    reset: resetProfile,
    formState: { errors: profileErrors },
  } = useForm<ProfileFormData>();

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const result = await getMyProfile();
      if (result?.success) {
        const data: IUserProfile = result.data;
        setProfile(data);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const openEditModal = () => {
    if (profile) {
      resetProfile({
        name: profile.name,
        contactNo: profile.contactNo ?? "",
      });
    }
    setUpdateError(null);
    setUpdateSuccess(null);
    setIsEditProfileOpen(true);
  };

  const onProfileSave = async (data: ProfileFormData) => {
    setUpdateError(null);
    setUpdateSuccess(null);
    setIsSubmitting(true);
    try {
      const result = await updateMyProfile(data);
      if (result?.success) {
        setUpdateSuccess("Profile updated successfully!");
        await fetchProfile();
        setTimeout(() => {
          setIsEditProfileOpen(false);
          setUpdateSuccess(null);
        }, 1200);
      } else {
        setUpdateError(result?.message || "Failed to update profile.");
      }
    } catch {
      setUpdateError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile?.name ?? "User")}&background=E5E7EB&color=374151&size=256`;

  return (
    <div className="p-6 md:p-8 w-full max-w-3xl mx-auto mt-6">
      <div className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100 relative">
        <h2 className="text-[22px] font-bold text-gray-900 mb-8">Profile</h2>

        {/* Edit Icon top right corner */}
        <button
          onClick={openEditModal}
          className="absolute top-8 right-8 w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
        >
          <Edit2 size={18} />
        </button>

        {isLoading ? (
          <div className="flex justify-center py-16">
            <Loader2 className="w-8 h-8 animate-spin text-[#00A651]" />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row md:items-start gap-6 w-full">
            {/* Avatar Section */}
            <div className="flex flex-col items-center sm:items-start gap-4 flex-shrink-0">
              <div className="w-24 h-24 rounded-full bg-gray-100 overflow-hidden ring-4 ring-gray-50 relative">
                <Image
                  src={profile?.photo ?? avatarUrl}
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Info Fields */}
            <div className="flex-1 space-y-5">
              <div>
                <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Name</label>
                <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                  {profile?.name ?? "—"}
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Email</label>
                <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                  {profile?.email ?? "—"}
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Contact Number</label>
                <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                  {profile?.contactNo ?? "—"}
                </div>
              </div>

              <div>
                <label className="block text-[13px] text-gray-500 mb-1.5 ml-1">Role</label>
                <div className="w-full h-11 px-4 flex items-center bg-white border border-gray-200 rounded-[8px] text-sm text-gray-800">
                  <span className="px-2.5 py-1 bg-[#E5F6EC] text-[#00A651] rounded-[6px] text-xs font-semibold">
                    {profile?.role ?? "—"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Edit Profile Modal */}
      <Modal
        isOpen={isEditProfileOpen}
        onClose={() => { setIsEditProfileOpen(false); setUpdateError(null); setUpdateSuccess(null); }}
        title="Edit Profile"
      >
        <form onSubmit={handleSubmitProfile(onProfileSave)} className="space-y-5">
          {updateError && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
              {updateError}
            </div>
          )}
          {updateSuccess && (
            <div className="px-4 py-3 bg-green-50 border border-green-200 rounded-[10px] text-sm text-[#00A651] font-medium">
              {updateSuccess}
            </div>
          )}

          <div className="flex items-center gap-4 mb-2">
            <div className="w-16 h-16 rounded-full bg-gray-100 overflow-hidden border border-gray-200 relative">
              <Image
                src={profile?.photo ?? avatarUrl}
                alt="Profile"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Name</label>
            <input
              {...registerProfile("name", { required: "Name is required" })}
              placeholder="Your full name"
              className={`w-full h-11 px-4 border ${profileErrors.name ? "border-red-500" : "border-gray-200"} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]`}
            />
            {profileErrors.name && (
              <p className="mt-1 text-xs text-red-500">{profileErrors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Contact Number</label>
            <input
              {...registerProfile("contactNo")}
              placeholder="+1 (555) 000-0000"
              className="w-full h-11 px-4 border border-gray-200 rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651]"
            />
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => { setIsEditProfileOpen(false); setUpdateError(null); setUpdateSuccess(null); }}
              className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors disabled:opacity-60 flex items-center gap-2"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              Save Changes
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
