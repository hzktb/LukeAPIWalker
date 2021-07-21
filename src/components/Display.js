import axios from "axios";
import Input from "./Input";
import { useEffect, useState } from "react";

const Display = (props) => {
  const [info, setInfo] = useState("");

  useEffect(() => {
    console.log("something");
    axios
      .get("http://swapi.dev/api/" + props.stuff + "/" + props.id)
      .then((response) => {
        console.log("else stuff");
        setInfo(response.data);
      });
  }, []);

  return (
    <div>
      <h1>display component</h1>
      <Input
        state={props.state}
        id={props.id}
        setId={props.setId}
        select={props.select}
        setSelect={props.setSelect}
      />
      <h1>{info.name}</h1>
      {/* {console.log(info)} */}
    </div>
  );
};

export default Display;
