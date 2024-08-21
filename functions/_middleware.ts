import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";

export const onRequest: PagesFunction = cloudflareAccessPlugin({
  domain: "https://thanenotes.cloudflareaccess.com",
  aud: "bc19729563fe5aa6a46bfab12b174e61e8e726d510e6c83953ebb83cbb235e3a",
});