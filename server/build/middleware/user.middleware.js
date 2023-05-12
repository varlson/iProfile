"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.listUser = exports.editUser = exports.createUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = __importDefault(require("../models/user"));
const utils_1 = require("../utils/utils");
const htppCodes_json_1 = __importDefault(require("../../htppCodes.json"));
const createUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const verified = (0, utils_1.credentialsVerifier)({ username, password });
    if (verified.thereIsError) {
        const response = [verified.username, verified.password];
        return res.status(501).json({ success: false, errors: response });
    }
    const user = yield user_1.default.find({ username });
    console.log(user);
    if (user.length) {
        return res.status(501).json({
            success: false,
            errors: ["There exists an account with this username"],
        });
    }
    bcrypt_1.default.genSalt(10, (error, salt) => {
        bcrypt_1.default.hash(password, salt, (error, hash) => __awaiter(void 0, void 0, void 0, function* () {
            const _user = new user_1.default({ username, hash });
            yield _user.save();
            return res.status(200).json(_user);
        }));
    });
});
exports.createUser = createUser;
const editUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = ((_a = req.params) === null || _a === void 0 ? void 0 : _a.id) || undefined;
    console.log(id);
    if (!id) {
        return res.status(htppCodes_json_1.default["not_found"]).json({
            success: false,
            msg: "user id not provided ",
        });
    }
    const { username, password } = req.body;
    const updatedUser = yield user_1.default.findOneAndUpdate({ _id: id }, { $set: { username } });
    if (updatedUser) {
        return res
            .status(htppCodes_json_1.default["ok"])
            .json({ success: true, msg: "User updated succesfully", updatedUser });
    }
    return res
        .status(htppCodes_json_1.default["not_found"])
        .json({ success: false, error: ["User nout found"] });
});
exports.editUser = editUser;
const listUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const allUser = yield user_1.default.find();
    if (allUser.length) {
        return res.status(htppCodes_json_1.default["ok"]).json({ success: true, data: allUser });
    }
    return res
        .status(htppCodes_json_1.default["ok"])
        .json({ success: true, msg: "There is not exit user yet" });
});
exports.listUser = listUser;
