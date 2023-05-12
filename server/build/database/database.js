"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const url = "vag9OtQKlqEgvSai";
function DBconnection() {
    return new Promise((res, rej) => {
        mongoose_1.default
            .connect("mongodb+srv://react_native:NSYEr1ICCls2v08F@cluster0.tcc6i.mongodb.net/react_native?retryWrites=true&w=majority")
            .then(() => {
            res("ok");
        })
            .catch((error) => {
            rej(error);
        });
    });
}
exports.default = DBconnection;
