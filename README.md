<div align="center"> <a href="https://fastify.dev/">
    <img
      src="https://raw.githubusercontent.com/fastify/graphics/HEAD/fastify-landscape-outlined.svg"
      width="650"
      height="auto"
    />
  </a>
</div>

<div align="center">

[![CI](https://github.com/fastify/fastify/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/ci.yml)
[![Package Manager
CI](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/package-manager-ci.yml)
[![Web
site](https://github.com/fastify/fastify/actions/workflows/website.yml/badge.svg?branch=main)](https://github.com/fastify/fastify/actions/workflows/website.yml)
[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-brightgreen?style=flat)](https://github.com/neostandard/neostandard)
[![CII Best Practices](https://bestpractices.coreinfrastructure.org/projects/7585/badge)](https://bestpractices.coreinfrastructure.org/projects/7585)

</div>

<div align="center">

[![NPM
version](https://img.shields.io/npm/v/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![NPM
downloads](https://img.shields.io/npm/dm/fastify.svg?style=flat)](https://www.npmjs.com/package/fastify)
[![Security Responsible
Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/fastify/fastify/blob/main/SECURITY.md)
[![Discord](https://img.shields.io/discord/725613461949906985)](https://discord.gg/fastify)
[![Contribute with Gitpod](https://img.shields.io/badge/Contribute%20with-Gitpod-908a85?logo=gitpod&color=blue)](https://gitpod.io/#https://github.com/fastify/fastify)
![Open Collective backers and sponsors](https://img.shields.io/opencollective/all/fastify)

</div>

<br />

# TL;DR

* [Fastify](https://github.com/fastify/fastify) is a fast and low overhead web framework for Node.js.
* This package shows how fast it is compared to other JS frameworks: these benchmarks do not pretend to represent a real-world scenario, but they give a **good indication of the framework overhead**.
* The benchmarks are run automatically on GitHub actions, which means they run on virtual hardware that can suffer from the "noisy neighbor" effect; this means that the results can vary.
* For metrics (cold-start) see [metrics.md](./METRICS.md)

# Requirements

To be included in this list, the framework should captivate users' interest. We have identified the following minimal requirements:
- **Ensure active usage**: a minimum of 500 downloads per week
- **Maintain an active repository** with at least one event (comment, issue, PR) in the last month
- The framework must use the **Node.js** HTTP module

# Usage

Clone this repo. Then

```
node ./benchmark [arguments (optional)]
```

#### Arguments

* `-h`: Help on how to use the tool.
* `bench`:  Benchmark one or more modules.
* `compare`: Get comparative data for your benchmarks.

> Create benchmark before comparing; `benchmark bench`

> You may also compare all test results, at once, in a single table; `benchmark compare -t`

> You can also extend the comparison table with percentage values based on fastest result; `benchmark compare -p`
# Benchmarks

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Fri Jul 10 2026 03:11:14 GMT+0000 (Coordinated Universal Time)
* __Method:__ `autocannon -c 100 -d 40 -p 10 localhost:3000` (two rounds; one to warm-up, one to measure)

|                          | Version  | Router | Requests/s | Latency (ms) | Throughput/Mb |
| :--                      | --:      | --:    | :-:        | --:          | --:           |
| h3                       | 1.15.11  | ✗      | 47856.8    | 20.39        | 8.53          |
| 0http                    | 5.1.0    | ✓      | 45568.8    | 21.45        | 8.13          |
| node-http                | v24.18.0 | ✗      | 42212.0    | 23.19        | 7.53          |
| micro                    | 10.0.1   | ✗      | 41918.4    | 23.36        | 7.48          |
| fastify                  | 5.10.0   | ✓      | 41893.6    | 23.37        | 7.51          |
| connect                  | 3.7.0    | ✗      | 41672.0    | 23.49        | 7.43          |
| polka                    | 0.5.2    | ✓      | 41088.8    | 23.83        | 7.33          |
| restana                  | v6.0.0   | ✓      | 41061.6    | 23.86        | 10.34         |
| h3-router                | 1.15.11  | ✓      | 40837.6    | 23.99        | 7.28          |
| connect-router           | 2.2.0    | ✓      | 38664.8    | 25.36        | 6.90          |
| elysia                   | 1.4.29   | ✓      | 38262.4    | 25.64        | 6.28          |
| hono                     | 4.12.28  | ✓      | 35584.2    | 27.60        | 5.84          |
| whatwg-node-server       | 0.11.0   | ✗      | 33873.6    | 29.02        | 6.04          |
| koa                      | 3.2.1    | ✗      | 31856.8    | 30.89        | 5.68          |
| koa-router               | 15.7.0   | ✓      | 29338.0    | 33.58        | 5.23          |
| adonisjs                 | 7.8.1    | ✓      | 29141.6    | 33.81        | 5.20          |
| hapi                     | 21.4.9   | ✓      | 27909.2    | 35.32        | 4.98          |
| srvx                     | 0.11.21  | ✗      | 24992.0    | 39.50        | 4.86          |
| express                  | 5.2.1    | ✓      | 24551.2    | 40.22        | 4.38          |
| microrouter              | 3.1.3    | ✓      | 21114.0    | 46.84        | 3.77          |
| express-with-middlewares | 5.2.1    | ✓      | 20822.0    | 47.51        | 7.74          |
| fastify-big-json         | 5.10.0   | ✓      | 12053.0    | 82.40        | 138.67        |
| trpc-router              | 11.18.0  | ✓      | 8585.4     | 115.81       | 1.96          |
| restify                  | 11.1.0   | ✓      | N/A        | N/A          | N/A           |
