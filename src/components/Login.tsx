import { useEffect } from "react";
function Login() {
  const reqBody = {
    username: "User",
    password: "User",
  };

  async function login() {
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
        console.log(output.token);
        localStorage.setItem("access-token", output.token);
      })
      .catch((error) =>
        console.error("The following error occurred during the update", error)
      );
  }

  // useEffect block
  useEffect(() => {
    login();
  }, []);
}

export default Login;
