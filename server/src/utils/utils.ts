import {
  credentialVerifierTypes,
  AuthLogs,
  authErrorTypes,
} from "./../types/types";
export const credentialsVerifier = ({
  username,
  password,
}: credentialVerifierTypes) => {
  let credentialError: AuthLogs = {
    thereIsError: false,
    username: "",
    password: "",
  };

  if (!username || !password) {
    credentialError.thereIsError = true;

    if (!username) {
      credentialError.username = authErrorTypes.INV_USERNAME;
    }

    if (!password) {
      credentialError.password = authErrorTypes.INV_USERNAME;
    }
  }

  return credentialError;
};
