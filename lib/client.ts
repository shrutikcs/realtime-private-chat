import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

// Use only the TYPE of the app - never import the actual instance on client side
// Use window.location.origin for browser, fallback to localhost for SSR
const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return "http://localhost:3000";
};

export const client = treaty<App>(getBaseUrl());
