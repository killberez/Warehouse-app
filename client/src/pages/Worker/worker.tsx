import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

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

export default function Worker() {
  const token: any = localStorage.getItem("token")!;
  const [cargoData, setCargoData] = useState<Cargo[]>([]);
  const [newCargo, setNewCargo] = useState({
    id: "",
    condition: "",
    customerId: "",
    numberOfBoxes: "",
    totalVolume: "",
    totalWeight: "",
    warehousePlace: "",
  });

  useEffect(() => {
    console.log(token);
    axios
      .get("http://localhost:7000/api/cargo/cargos", {
        headers: {
          Authorization: `token ${token}`,
        },
      })
      .then((response) => setCargoData(response.data));
  }, []);

  if (cargoData.length === 0) {
    return null;
  }

  return (
    <div>
      <div>
        Cargos
        {cargoData.map((cargo) => {
          return (
            <div>
              <ul>
                <ol>ID: {cargo.id}</ol>
                <ol>Customer ID: {cargo.customerId}</ol>
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
        <div>
          <ul>
            <ol>
              Cargo ID
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, id: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Condition
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, condition: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Customer ID
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, customerId: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Number of boxes
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, numberOfBoxes: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Total volume
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, totalVolume: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Total weight
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, totalWeight: e.target.value });
                }}
              ></input>
            </ol>
            <ol>
              Warehouse place
              <input
                onChange={(e) => {
                  setNewCargo({ ...newCargo, warehousePlace: e.target.value });
                }}
              ></input>
            </ol>
            <button
              onClick={() => {
                axios.post("http://localhost:7000/api/cargo", newCargo, {
                  headers: {
                    Authorization: `token ${token}`,
                  },
                });
                console.log(newCargo);
              }}
            >
              Create
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
}
