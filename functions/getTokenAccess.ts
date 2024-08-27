import type { PluginData } from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest: PagesFunction<unknown, any, PluginData> = async ({
  data,
}) => {
  console.log('data', data);
  return new Response(
    `Hello, ${data.cloudflareAccess || "service user"}!`,
  );
};