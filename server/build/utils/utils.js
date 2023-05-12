"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.credentialsVerifier = void 0;
const types_1 = require("./../types/types");
const credentialsVerifier = ({ username, password, }) => {
    let credentialError = {
        thereIsError: false,
        username: "",
        password: "",
    };
    if (!username || !password) {
        credentialError.thereIsError = true;
        if (!username) {
            credentialError.username = types_1.authErrorTypes.INV_USERNAME;
        }
        if (!password) {
            credentialError.password = types_1.authErrorTypes.INV_USERNAME;
        }
    }
    return credentialError;
};
exports.credentialsVerifier = credentialsVerifier;
