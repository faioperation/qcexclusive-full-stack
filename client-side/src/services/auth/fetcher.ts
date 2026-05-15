"use client";

import { logoutUser } from "./auth.apis";

export const fetcher = async (
  url: string,
  options?: RequestInit
) => {
  try {
    const res = await fetch(url, {
      ...options,
      credentials: "include",
    });

    // Token expired / unauthorized
    if (res.status === 401) {
      await logoutUser();

      // redirect to login
      window.location.href = "/login";

      return null;
    }

    return res;
  } catch (error) {
    console.log(error);
    throw error;
  }
};