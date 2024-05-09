import { createCookie } from "@remix-run/node"; // or cloudflare/deno

export const langCookie = createCookie("lang");
