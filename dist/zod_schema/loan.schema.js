"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loanSchema = void 0;
const zod_1 = require("zod");
exports.loanSchema = zod_1.z.object({
    body: zod_1.z.object({
        userid: zod_1.z.string({ required_error: 'UserID is required' }),
        bookid: zod_1.z.string({ required_error: 'BookID is required' })
    })
});
