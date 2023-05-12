"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const User = new mongoose_1.Schema({
    username: { type: String },
    password: { type: String },
}, { timestamps: true });
const UserModel = (0, mongoose_1.model)("User", User);
exports.default = UserModel;
