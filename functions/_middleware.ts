import cloudflareAccessPlugin from "@cloudflare/pages-plugin-cloudflare-access";
import { PagesFunction } from "@cloudflare/workers-types";

// export const onRequest: PagesFunction = cloudflareAccessPlugin({
//   domain: "https://thanenotes.cloudflareaccess.com",
//   aud: "c2df1929795cdddc558843fddf12eb52f043159c51a6379931dc3c43e090c73c", // This is the AUD tag for "my-fourth-pages-app - Cloudflare Pages" found in Zero Trust/Applications/Access
// });

export const onRequest: PagesFunction = (context: any) => {
    if ('BYPASS_AUTH' in context.env && context.env.BYPASS_AUTH === 'true') {
      return context.next();
    }
  
    return cloudflareAccessPlugin({
      domain: "https://thanenotes.cloudflareaccess.com",
      aud: "c2df1929795cdddc558843fddf12eb52f043159c51a6379931dc3c43e090c73c",
    })(context);
  };