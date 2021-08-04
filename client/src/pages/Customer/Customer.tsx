import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface Cargo {
  id: string;
}

export default function Customer() {
  const [cargoData, setCargoData] = useState<Cargo[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/cargo/cargos", {
        headers: {
          Authorization: `token ${"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYyNzg5NjU1MX0._B5x0Ut_ovgoEJPI2MatD0GfagNM6G8zzZEVjXZRmIY"}`,
        },
      })
      .then((response) => setCargoData(response.data));
  }, []);

  if (cargoData.length === 0) {
    return null;
  }

  return (
    <div>
      <button onClick={() => console.log(cargoData)}>111</button>
      <div>{cargoData[0].id}</div>
    </div>
  );
}
