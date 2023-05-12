export enum authErrorTypes {
  INV_USERNAME = "Invalid username",
  INV_PASSWORD = "Invalid password",
  ACCOUNT_EXISIT = "There exists an account with this username",
}
export type AuthLogs = {
  thereIsError: boolean;
  username: string;
  password: string;
};

export type credentialVerifierTypes = {
  username: string;
  password: string;
};

export type User = {
  username: string;
  password: string;
};
