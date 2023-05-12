import mongoose from "mongoose";
const url = "vag9OtQKlqEgvSai";
export default function DBconnection() {
  return new Promise((res, rej) => {
    mongoose
      .connect(
        "mongodb+srv://react_native:NSYEr1ICCls2v08F@cluster0.tcc6i.mongodb.net/react_native?retryWrites=true&w=majority"
      )
      .then(() => {
        res("ok");
      })
      .catch((error) => {
        rej(error);
      });
  });
}
