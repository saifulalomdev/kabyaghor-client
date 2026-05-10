// src/lib/auth-client.ts
import { createAuthClient } from "better-auth/react";
import { magicLinkClient } from "better-auth/client/plugins";
import { Capacitor } from "@capacitor/core";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://127.0.0.1:8787"; 

export const authClient = createAuthClient({
  baseURL: BACKEND_URL,
  plugins: [magicLinkClient()],
  fetchOptions: { credentials: "include" }
});

export const getAuthCallbackURL = (targetPath: string = "/") => {
  // Normalize the path (ensure it starts with a single slash)
  const cleanPath = targetPath.startsWith("/") ? targetPath : `/${targetPath}`;
  
  if (Capacitor.getPlatform() === "android") {
    // Android App Link (Use your real registered production domain)
    // Avoid custom schemes like myapp:// as they are less reliable on modern Android
    const baseAppUrl = import.meta.env.VITE_FRONTEND_URL || "https://yourdomain.com";
    return `${baseAppUrl}${cleanPath}`;
  }
  
  // Web browser fallback
  return `${window.location.origin}${cleanPath}`;
};
