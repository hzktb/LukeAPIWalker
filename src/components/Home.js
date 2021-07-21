import React from "react";
import Input from "./Input";

const Home = (props) => {
  return (
    <>
      <h1>Home component</h1>
      <Input
        state={props.state}
        id={props.id}
        setId={props.setId}
        select={props.select}
        setSelect={props.setSelect}
      />
    </>
  );
};

export default Home;
