import { serve } from "https://deno.land/std/http/server.ts";

const s = serve({ port: 8899 });

for await (const req of s) {
  req.respond({ body: "Hey This is Server !" });
}
