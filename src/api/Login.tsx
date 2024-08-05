import { useEffect } from "react";

const reqBody = {
  username: "derick911",
  password: "Derick@123",
};

export default async function Login() {
  useEffect(() => {
    fetch("http://localhost:8080/authenticate/login", {
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
      },
      method: "POST",
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((output) => {
        localStorage.setItem("access-token", output.token);
      })
      .catch((error) =>
        console.error("The following error occurred during the update", error)
      );
  }, []);
}
