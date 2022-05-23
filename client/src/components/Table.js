import React, { useState } from "react";
import "./Table.css";

function Table(props) {
  const [search, setSearch] = useState("");
  const searchOnChangeHandle=even=>setSearch(even.target.value);

  return (
    <div>
      <form className="search" >
        <input
          type="search"
          id="search"
          name="search"
          placeholder="search"
          onChange={searchOnChangeHandle}
        />
        <input type="submit" value="SEARCH" />
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th className="judul">USERNAME</th>
            <th>EMAIL</th>
            <th>PASSWORD</th>
            <th>EXPERIENCE</th>
            <th>LVL</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {props.players.map((item) => {
            if (item.username==search || search==""){
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.username}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>{item.experience}</td>
                <td>{item.lvl}</td>
                <td>
                  <button onClick={() => props.onEditPlayer(item)}>EDIT</button>
                  <button onClick={() => props.onDeletePlayer(item)}>
                    DELETE
                  </button>
                </td>
              </tr>
            );
            }
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
