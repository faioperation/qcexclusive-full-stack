"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Plus, Trash2, Edit } from "lucide-react";
import { Modal } from "@/components/ui/modal";

interface AdminForm {
  name: string;
  email: string;
  phone: string;
  password?: string;
}

const MOCK_ADMINS = [
  { id: 1, name: "Istiak Ahmed", email: "istiak@gmail.com", phone: "+880155225566", status: "Active" },
  { id: 2, name: "Rony Hasan", email: "rony@gmail.com", phone: "+880155225588", status: "Active" },
  { id: 3, name: "Sojol Hossen", email: "sojol@gmail.com", phone: "+880155225562", status: "Active" },
  { id: 4, name: "Abirul Islam", email: "abirul@gmail.com", phone: "+880155225599", status: "Active" },
];

export function AddAdminPage() {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [admins, setAdmins] = useState(MOCK_ADMINS);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<AdminForm>();

  const onAddAdmin = (data: AdminForm) => {
    console.log("Saving new admin:", data);
    setAdmins([
      ...admins,
      {
        id: admins.length + 1,
        name: data.name,
        email: data.email,
        phone: data.phone,
        status: "Active"
      }
    ]);
    reset();
    setIsAddOpen(false);
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-[1200px] mx-auto">
      <div className="flex justify-end mb-6">
        <button
          onClick={() => setIsAddOpen(true)}
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
              {admins.map((admin, idx) => (
                <tr key={admin.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{String(idx + 1).padStart(2, "0")}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{admin.name}</td>
                  <td className="px-6 py-4 text-gray-500">{admin.email}</td>
                  <td className="px-6 py-4 text-gray-500">{admin.phone}</td>
                  <td className="px-6 py-4">
                    <span className="text-[#00A651] font-semibold">{admin.status}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-3">
                      <button className="text-gray-400 hover:text-blue-500 transition-colors">
                         <span className="text-sm border border-gray-200 px-2 py-1 rounded-md text-blue-500 hover:bg-blue-50">Details</span>
                      </button>
                      <button className="text-gray-400 hover:text-red-500 transition-colors bg-red-50 hover:bg-red-100 p-1.5 rounded-md">
                        <Trash2 size={16} className="text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {admins.length === 0 && (
          <div className="text-center py-12 text-gray-500">No admins found.</div>
        )}
      </div>

      {/* Add Admin Modal */}
      <Modal isOpen={isAddOpen} onClose={() => { reset(); setIsAddOpen(false); }} title="Add Admin" width="max-w-md">
        <form onSubmit={handleSubmit(onAddAdmin)} className="space-y-4">
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Name</label>
            <input 
              {...register("name", { required: "Name is required" })}
              placeholder="Enter name"
              className={`w-full h-11 px-4 border ${errors.name ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Email</label>
            <input 
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })}
              type="email"
              placeholder="Enter email"
              className={`w-full h-11 px-4 border ${errors.email ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
          </div>
          <div>
            <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Number</label>
            <input 
              {...register("phone", { required: "Number is required" })}
              placeholder="Enter number"
              className={`w-full h-11 px-4 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
          </div>
          <div>
             <label className="block text-[13px] font-medium text-gray-700 mb-1.5">Set Password</label>
            <input 
              {...register("password", { required: "Password is required", minLength: 6 })}
              placeholder="********"
              type="password"
              className={`w-full h-11 px-4 border ${errors.password ? 'border-red-500' : 'border-gray-200'} rounded-[8px] text-sm focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors`}
            />
          </div>

          <div className="flex justify-end gap-3 pt-6 pb-2">
             <button 
              type="button" 
              onClick={() => { reset(); setIsAddOpen(false); }}
              className="px-6 py-2 border border-red-500 text-red-500 hover:bg-red-50 text-sm font-medium rounded-[8px] transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button 
              type="submit"
              className="px-6 py-2 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors cursor-pointer"
            >
              Save Admin
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
