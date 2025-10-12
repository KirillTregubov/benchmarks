"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var elysia_1 = require("elysia");
var node_1 = require("@elysiajs/node");
new elysia_1.Elysia({
    serve: {
        hostname: "127.0.0.1",
    },
    adapter: (0, node_1.node)(),
})
    .get("/", function () {
    return { hello: "world" };
}, {
    response: elysia_1.t.Object({
        hello: elysia_1.t.String(),
    }),
})
    .listen(3000);
