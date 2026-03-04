"use client";

import React from "react";
import { useForm } from "react-hook-form";

interface OpenAiFormValues {
  openAiKey: string;
}

interface ApifyFormValues {
  apifyKey: string;
}

export function ConfigPage() {
  const {
    register: registerOpenAi,
    handleSubmit: handleSubmitOpenAi,
  } = useForm<OpenAiFormValues>();

  const {
    register: registerApify,
    handleSubmit: handleSubmitApify,
  } = useForm<ApifyFormValues>();

  const onSubmitOpenAi = (data: OpenAiFormValues) => {
    console.log("Saving Open AI Key:", data);
    // TODO: integrate with actual API
  };

  const onSubmitApify = (data: ApifyFormValues) => {
    console.log("Saving APIFY Key:", data);
    // TODO: integrate with actual API
  };

  return (
    <div className="p-6 md:p-8 w-full max-w-4xl mx-auto">
      <div className="bg-white rounded-[16px] p-6 lg:p-8 shadow-sm">
        <h2 className="text-xl font-semibold text-gray-800 mb-6">API key</h2>

        <div className="space-y-8">
          {/* Open AI Key Form */}
          <form onSubmit={handleSubmitOpenAi(onSubmitOpenAi)}>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Open AI Key
              </label>
              <input
                {...registerOpenAi("openAiKey", { required: "Required" })}
                type="text"
                placeholder="wdfsafishdklhikv"
                className="w-full h-[48px] px-4 rounded-[8px] border border-gray-200 text-gray-800 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="px-8 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
              >
                Save
              </button>
            </div>
          </form>

          {/* APIFY Key Form */}
          <form onSubmit={handleSubmitApify(onSubmitApify)}>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                APIFY Key
              </label>
              <input
                {...registerApify("apifyKey", { required: "Required" })}
                type="text"
                placeholder="hhfgljsdl;fghlsdnl"
                className="w-full h-[48px] px-4 rounded-[8px] border border-gray-200 text-gray-800 focus:outline-none focus:border-[#00A651] focus:ring-1 focus:ring-[#00A651] transition-colors"
              />
            </div>
            <div className="flex justify-end mt-4">
              <button
                type="submit"
                className="px-8 py-2.5 bg-[#00A651] hover:bg-[#009345] text-white text-sm font-medium rounded-[8px] transition-colors"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
