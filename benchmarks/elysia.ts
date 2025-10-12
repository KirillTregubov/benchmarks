// build with tsc
"use strict";

import { Elysia, t } from "elysia";
import { node } from "@elysiajs/node";

new Elysia({
  serve: {
    hostname: "127.0.0.1",
  },
  adapter: node(),
})
  .get(
    "/",
    () => {
      return { hello: "world" };
    },
    {
      response: t.Object({
        hello: t.String(),
      }),
    }
  )
  .listen(3000);
