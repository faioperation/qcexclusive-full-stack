"use server";

import { revalidateTag } from "next/cache";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

// ─── Types ────────────────────────────────────────────────────────────────────

export interface IConfig {
  id: string;
  key: string;
  value: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getAuthHeader = async () => ({
  Authorization: `Bearer ${(await cookies()).get("accessToken")?.value ?? ""}`,
});

// ─── Get All Configs ───────────────────────────────────────────────────────────

export const getAllConfigs = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/config`, {
      method: "GET",
      headers: await getAuthHeader(),
      next: {
        tags: ["config"],
      },
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Upsert Config ────────────────────────────────────────────────────────────

export const upsertConfig = async (payload: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/config/upsert`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("config","max");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Update Config ────────────────────────────────────────────────────────────

export const updateConfig = async (id: string, payload: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/config/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        ...(await getAuthHeader()),
      },
      body: JSON.stringify(payload),
    });
    revalidateTag("config","max");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

// ─── Delete Config ────────────────────────────────────────────────────────────

export const deleteConfig = async (id: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}/config/${id}`, {
      method: "DELETE",
      headers: await getAuthHeader(),
    });
    revalidateTag("config","max");
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
