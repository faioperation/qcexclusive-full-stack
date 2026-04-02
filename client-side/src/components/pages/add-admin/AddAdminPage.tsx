"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Loader2 } from "lucide-react";
import Swal from "sweetalert2";
import { Modal } from "@/components/ui/modal";
import { createAdmin, deleteAdmin, getAllAdmins, toggleBlockAdmin } from "@/services/admin/admin.apis";
import { IAdmin } from "@/services/admin/admin.types";
import { ERole } from "@/services/auth/auth.types";
import { useUser } from "@/context/UserContext";

interface AdminForm {
  name: string;
  email: string;
  contactNo: string;
  password: string;
}

export function AddAdminPage() {
  const router = useRouter();
  const { user } = useUser();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [admins, setAdmins] = useState<IAdmin[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [createError, setCreateError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AdminForm>();

  const isAdmin = user?.role === ERole.Admin;

  useEffect(() => {
    if (user && user.role !== ERole.Admin) {
      router.push("/");
    }
  }, [user, router]);

  const fetchAdmins = useCallback(async () => {
    setIsLoading(true);
    try {
      const result = await getAllAdmins();
      if (result?.success) {
        setAdmins(result.data?.data ?? result.data ?? []);
      }
    } catch {
      // silently fail
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isAdmin) {
      fetchAdmins();
    }
  }, [isAdmin, fetchAdmins]);

  const onAddAdmin = async (data: AdminForm) => {
    setCreateError(null);
    setIsSubmitting(true);
    try {
      const result = await createAdmin({
        name: data.name,
        email: data.email,
        contactNo: data.contactNo,
        password: data.password,
      });
      if (result?.success) {
        reset();
        setIsAddOpen(false);
        fetchAdmins();
        Swal.fire("Success!", "Admin created successfully.", "success");
      } else {
        setCreateError(result?.message || "Failed to create admin.");
      }
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setCreateError(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (adminId: string) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    });

    if (result.isConfirmed) {
      try {
        await deleteAdmin(adminId);
        fetchAdmins();
        Swal.fire("Deleted!", "Admin has been deleted.", "success");
      } catch {
        Swal.fire("Error!", "Failed to delete admin.", "error");
      }
    }
  };

  const handleToggleBlock = async (adminId: string) => {
    try {
      await toggleBlockAdmin(adminId);
      fetchAdmins();
    } catch {
      Swal.fire("Error!", "Failed to update admin status.", "error");
    }
  };

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="p-6 md:p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => { setCreateError(null); setIsAddOpen(true); }}
          className="flex items-center gap-2 px-5 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-semibold rounded-[8px] transition-colors shadow-sm cursor-pointer"
        >
          <Plus size={18} />
          Add Admin
        </button>
      </div>

      <div className="bg-white rounded-[16px] shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto w-full">
          <table className="w-full text-left text-sm text-gray-700">
            <thead className="bg-[#FAFBFD] text-gray-600 font-medium">
              <tr>
                <th className="px-6 py-4 font-semibold w-16">#</th>
                <th className="px-6 py-4 font-semibold">Name</th>
                <th className="px-6 py-4 font-semibold">Email</th>
                <th className="px-6 py-4 font-semibold">Number</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold text-center w-24">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center">
                    <Loader2 className="w-8 h-8 animate-spin text-[#00A651] mx-auto" />
                  </td>
                </tr>
              ) : admins.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-4 py-16 text-center text-gray-400 font-medium">
                    No admins found.
                  </td>
                </tr>
              ) : (
                admins.map((admin, idx) => (
                  <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-gray-900">{String(idx + 1).padStart(2, "0")}</td>
                    <td className="px-6 py-4 font-medium text-gray-900">{admin.name}</td>
                    <td className="px-6 py-4 text-gray-500">{admin.email}</td>
                    <td className="px-6 py-4 text-gray-500">{admin.contactNo ?? "—"}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleToggleBlock(admin.id)}
                        className={`text-sm font-semibold transition-colors ${
                          admin.isBlocked
                            ? "text-red-500 hover:text-red-700"
                            : "text-[#00A651] hover:text-[#009345]"
                        }`}
                      >
                        {admin.isBlocked ? "Blocked" : "Active"}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button
                          onClick={() => handleDelete(admin.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors bg-red-50 hover:bg-red-100 p-1.5 rounded-md"
                        >
                          <Trash2 size={16} className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        {!isLoading && admins.length === 0 && null}
      </div>

      {/* Add Admin Modal */}
      <Modal
        isOpen={isAddOpen}
        onClose={() => { reset(); setIsAddOpen(false); setCreateError(null); }}
        title="Add Admin"
        width="max-w-md"
      >
        <form onSubmit={handleSubmit(onAddAdmin)} className="space-y-4">
          {createError && (
            <div className="px-4 py-3 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-600 font-medium">
              {createError}
            </div>
          )}

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Enter name"
              className={`w-full h-11 px-4 border ${errors.name ? "border-red-500" : "border-gray-200"} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Enter email"
              className={`w-full h-11 px-4 border ${errors.email ? "border-red-500" : "border-gray-200"} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
            {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Contact Number</label>
            <input
              {...register("contactNo", { required: "Contact number is required" })}
              placeholder="Enter phone number"
              className={`w-full h-11 px-4 border ${errors.contactNo ? "border-red-500" : "border-gray-200"} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
            {errors.contactNo && <p className="mt-1 text-xs text-red-500">{errors.contactNo.message}</p>}
          </div>

          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Set Password</label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
              })}
              placeholder="••••••••"
              type="password"
              className={`w-full h-11 px-4 border ${errors.password ? "border-red-500" : "border-gray-200"} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
            {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
          </div>

          <div className="flex justify-end gap-3 pt-6 pb-2">
            <button
              type="button"
              onClick={() => { reset(); setIsAddOpen(false); setCreateError(null); }}
              className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors cursor-pointer disabled:opacity-60 flex items-center gap-2"
            >
              {isSubmitting && <Loader2 size={16} className="animate-spin" />}
              Save Admin
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}