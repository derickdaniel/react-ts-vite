import { useEffect } from "react";

export async function Issues({setData}: any) {

  useEffect(() => {
    fetch("http://localhost:8080/dib/issue", {
      // mode: "no-cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer " + localStorage.getItem("access-token"),
      },
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) =>
        console.error("The following error occurred during the update", error)
      );
  }, [setData]);
}
