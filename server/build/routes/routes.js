"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_middleware_1 = require("../middleware/user.middleware");
const router = (0, express_1.Router)();
router.get("/api", (req, res) => {
    return res.status(200).json({
        msg: "api route",
    });
});
router.post("/register", user_middleware_1.createUser, (req, res) => { });
router.put("/edit-user/:id", user_middleware_1.editUser, (req, res) => { });
router.get("/get-users/", user_middleware_1.listUser, (req, res) => { });
exports.default = router;
