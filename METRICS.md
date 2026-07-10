# Metrics
* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Node:__ `v24.18.0`
* __Run:__ Fri Jul 10 2026 02:39:46 GMT+0000 (Coordinated Universal Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

| | startup(ms) | listen(ms) |
|-| -       | -      |
| 1-startup-routes-schema.cjs | 92.72 | 124.32 |
| 1-startup-routes.cjs | 95.24 | 105.94 |
| 10-startup-routes-schema.cjs | 94.26 | 126.16 |
| 10-startup-routes.cjs | 96.56 | 108.95 |
| 100-startup-routes-schema.cjs | 99.32 | 133.43 |
| 100-startup-routes.cjs | 104.64 | 123.48 |
| 1000-startup-routes-schema.cjs | 169.36 | 232.64 |
| 1000-startup-routes.cjs | 187.18 | 242.05 |
| 10000-startup-routes-schema.cjs | 3797.22 | 4004.98 |
| 10000-startup-routes.cjs | 3575.36 | 4925.52 |
| startup-listen.cjs | 107.08 | 120.34 |
