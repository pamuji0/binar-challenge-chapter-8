import React, { useEffect, useState } from "react";
import "./Form.css";

function Form(props) {
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("");
  const [lvl, setLvl] = useState("");

  useEffect(() => {
    if (props.editData) {
      setId(props.editData.id)
      setUsername(props.editData.username);
      setEmail(props.editData.email);
      setPassword(props.editData.password);
      setExperience(props.editData.experience);
      setLvl(props.editData.lvl);
    }
    console.log("edit",props.editData)
  }, [props.editData]);

  const usernameOnChangeHandle = (event) => setUsername(event.target.value);
  const emailOnChangeHandle = (event) => setEmail(event.target.value);
  const passwordOnChangeHandle = (event) => setPassword(event.target.value);
  const experienceOnChangeHandle = (event) => setExperience(event.target.value);
  const lvlOnChangeHandle = (event) => setLvl(event.target.value);

  const onSubmit = (event) => {
    event.preventDefault();
console.log("propseditData",props.editData)
    const data = {
      username: username,
      email: email,
      password: password,
      experience: experience,
      lvl: lvl,
    };

    if (props.editData){
      data.id=props.editData.id
      console.log(data)
      props.onUpdatePlayer(data)
    }
    else{
      console.log("tambeh",data)
      props.onAddPlayer(data)
    }

    setUsername("");
    setEmail("");
    setPassword("");
    setPassword("");
    setExperience("");
    setLvl("");
  };


  return (
    
      <form onSubmit={onSubmit}>
        <label htmlFor="username">Username : </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={usernameOnChangeHandle}
          value={username}
        />
        <label htmlFor="experience">Experience :</label>
        <input
          type="number"
          id="experience"
          name="experience"
          placeholder="experience"
          onChange={experienceOnChangeHandle}
          value={experience}
        />
        <br />

        <label htmlFor="email">Email : </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={emailOnChangeHandle}
          value={email}
        />
        <label htmlFor="lvl">Level :</label>
        <input
          type="number"
          id="lvl"
          name="lvl"
          placeholder="lvl"
          onChange={lvlOnChangeHandle}
          value={lvl}
        />
        <br />
        <label htmlFor="password">Password : </label>
        <input
          type="text"
          id="password"
          name="password"
          placeholder="password"
          onChange={passwordOnChangeHandle}
          value={password}
        />
        <br />

        <input type="submit" value="Submit" />
      </form>
      
  
  );
}

export default Form;
