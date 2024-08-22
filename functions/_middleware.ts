import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";
import { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = cloudflareAccessPlugin({
  domain: "https://thanenotes.cloudflareaccess.com",
  aud: "bc065b6b1e7bee66c8afebe8e8cc13b0e450fb9614bebe554e3f319528308f4a",
  // aud: "bc19729563fe5aa6a46bfab12b174e61e8e726d510e6c83953ebb83cbb235e3a",
  // aud: "b6159909a-abb6-456b-883d-7370609d82cf"
});