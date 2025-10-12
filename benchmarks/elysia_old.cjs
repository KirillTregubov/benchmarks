"use strict";

const { Elysia, t } = require("elysia");
const { node } = require("@elysiajs/node");

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
