"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('source-map-support').install();
const aws_serverless_express_1 = require("aws-serverless-express");
const app_1 = require("./app");
// NOTE: If you get ERR_CONTENT_DECODING_FAILED in your browser, this is likely
// due to a compressed response (e.g. gzip) which has not been handled correctly
// by aws-serverless-express and/or API Gateway. Add the necessary MIME types to
// binaryMimeTypes below, then redeploy (`npm run package-deploy`)
const binaryMimeTypes = [
// 'application/javascript',
// 'application/json',
// 'application/octet-stream',
// 'application/xml',
// 'font/eot',
// 'font/opentype',
// 'font/otf',
// 'image/jpeg',
// 'image/png',
// 'image/svg+xml',
// 'text/comma-separated-values',
// 'text/css',
// 'text/html',
// 'text/javascript',
// 'text/plain',
// 'text/text',
// 'text/xml',
];
//const app = configureApp();
//const app = app
const server = aws_serverless_express_1.createServer(app_1.default, undefined, binaryMimeTypes);
exports.http = (event, context) => aws_serverless_express_1.proxy(server, event, context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2xhbWJkYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ3hDLG1FQUE2RDtBQUU3RCwrQkFBd0I7QUFFeEIsK0VBQStFO0FBQy9FLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsa0VBQWtFO0FBQ2xFLE1BQU0sZUFBZSxHQUFhO0FBQ2hDLDRCQUE0QjtBQUM1QixzQkFBc0I7QUFDdEIsOEJBQThCO0FBQzlCLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2QsbUJBQW1CO0FBQ25CLGNBQWM7QUFDZCxnQkFBZ0I7QUFDaEIsZUFBZTtBQUNmLG1CQUFtQjtBQUNuQixpQ0FBaUM7QUFDakMsY0FBYztBQUNkLGVBQWU7QUFDZixxQkFBcUI7QUFDckIsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixjQUFjO0NBQ2YsQ0FBQztBQUNGLDZCQUE2QjtBQUM3QixpQkFBaUI7QUFFakIsTUFBTSxNQUFNLEdBQUcscUNBQVksQ0FBQyxhQUFHLEVBQUUsU0FBUyxFQUFFLGVBQWUsQ0FBQyxDQUFDO0FBRWhELFFBQUEsSUFBSSxHQUFHLENBQUMsS0FBVSxFQUFFLE9BQWdCLEVBQUUsRUFBRSxDQUNuRCw4QkFBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMifQ==