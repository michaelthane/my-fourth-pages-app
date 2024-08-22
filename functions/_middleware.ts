import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";
import { PagesFunction } from "@cloudflare/workers-types";

export const onRequest: PagesFunction = cloudflareAccessPlugin({
  domain: "https://thanenotes.cloudflareaccess.com",
  // aud: "bc065b6b1e7bee66c8afebe8e8cc13b0e450fb9614bebe554e3f319528308f4a",
  aud: "c2df1929795cdddc558843fddf12eb52f043159c51a6379931dc3c43e090c73c",
  // aud: "b6159909a-abb6-456b-883d-7370609d82cf"
});