import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Table from "./components/Table";


function App() {
  const DUMMY_PLAYER = [
    {
      id: 1,
      username: "bruce",
      email: "bruce@wayneenterprises.com",
      password: "48r4kW!j^#",
      experience: 4290,
      lvl: 98,
    },
    {
      id: 2,
      username: "riko",
      email: "roko.com",
      password: "1",
      experience: 4,
      lvl: 8,
    },
    {
      id: 3,
      username: "rika",
      email: "roao.com",
      password: "1",
      experience: 4,
      lvl: 8,
    },
  ];

  const [playerData, setPlayerData] = useState(DUMMY_PLAYER);
  const [editData, setEditData] = useState(null);

  const addPlayer = (data) => {
    console.log(playerData);
    data.id = playerData.length + 1;
    setPlayerData((prevState) => [...prevState, data]);
  };
  const updatePlayer = (data) => {
    setPlayerData((prevState) => {
      const newData = prevState.filter((player) => player.id !== data.id);
      return [...newData, data];
    });
    setEditData(null);
  };

  const onEditPlayer = (data) => {
    setEditData(data);
  };

  const onDeletePlayer = (data) => {
    setPlayerData((playerData) =>
      playerData.filter((player) => player.id !== data.id)
    );
  };

  const [filterPlayer, setFilterPlayer] = useState(null);

  return (
    <div className="App">
      <Form
        onAddPlayer={addPlayer}
        editData={editData}
        onUpdatePlayer={updatePlayer}
      />
      <Table
        players={playerData}
        onEditPlayer={onEditPlayer}
        onDeletePlayer={onDeletePlayer}
      />
    </div>
  );
}

export default App;
