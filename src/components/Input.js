import { navigate } from "@reach/router";

const Input = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/" + props.select + "/" + props.id);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="swapi">Search for: </label>
      <select name="swapi" onChange={(e) => props.setSelect(e.target.value)}>
        <option value="-------" key="999">
          -------
        </option>
        {Object.keys(props.state).map((item, index) => (
          <option value={item} key={index}>
            {item}
          </option>
        ))}
      </select>
      <label htmlFor="id" style={{ marginLeft: "30px" }}>
        ID:{" "}
      </label>
      <input
        type="text"
        name="id"
        value={props.id}
        onChange={(e) => props.setId(e.target.value)}
      />
      <input type="submit" value="search" />
    </form>
  );
};

export default Input;
