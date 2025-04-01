import { useEffect, useState } from "react";

export default function UseApiCall() {
  const [listdata, updateData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log("res", res);
        updateData(res);
      });
  }, []);

  return listdata;
}
