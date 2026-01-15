import { treaty } from "@elysiajs/eden";
import type { App } from "../app/api/[[...slugs]]/route";

// Use only the TYPE of the app - never import the actual instance on client side
export const client = treaty<App>("localhost:3000");
