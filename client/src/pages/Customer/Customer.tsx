import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

interface Cargo {
  id: string;
  condition: string;
  customerId: string;
  numberOfBoxes: number;
  totalVolume: number;
  totalWeight: number;
  uuid: string;
  warehousePlace: string;
}

export default function Customer() {
  const [cargoData, setCargoData] = useState<Cargo[]>([]);
  //   const token =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYyODUxMTc5NX0.eq3S1G12ZqYzp2IeMRiDBu5rB6nOXE-eJeZ5kI0x6s0";
  const token: any = localStorage.getItem("token")!;
  console.log(token);

  useEffect(() => {
    console.log(token);
    axios
      .get("http://localhost:7000/api/cargo/customer", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => setCargoData(response.data));
  }, []);

  //   if (cargoData.length === 0) {
  //     return null;
  //   }

  return (
    <div>
      <button
        onClick={() => {
          axios
            .get("http://localhost:7000/api/cargo/customer", {
              headers: {
                Authorization: `token ${token}`,
              },
            })
            .then((response) => setCargoData(response.data));
          console.log(cargoData);
        }}
      >
        Get cargos
      </button>
      <div>
        Cargos
        {cargoData.map((cargo) => {
          return (
            <div>
              <ul>
                <ol>ID: {cargo.id}</ol>
                <ol>UUID: {cargo.uuid}</ol>
                <ol>Condition: {cargo.condition}</ol>
                <ol>Number of boxes: {cargo.numberOfBoxes}</ol>
                <ol>Total volume: {cargo.totalVolume}</ol>
                <ol>Total weight: {cargo.totalWeight}</ol>
                <ol>Warehouse place: {cargo.warehousePlace}</ol>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYyNzg5NjU1MX0._B5x0Ut_ovgoEJPI2MatD0GfagNM6G8zzZEVjXZRmIY
