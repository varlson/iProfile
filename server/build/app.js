"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes/routes"));
const database_1 = __importDefault(require("./database/database"));
const app = (0, express_1.default)();
const PORT = 3001;
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.listen(PORT, () => {
    (0, database_1.default)()
        .then(() => {
        console.log(`Server running at ${PORT}`);
    })
        .catch((error) => {
        console.log(error);
        console.log(`The app cant be started`);
    });
});
