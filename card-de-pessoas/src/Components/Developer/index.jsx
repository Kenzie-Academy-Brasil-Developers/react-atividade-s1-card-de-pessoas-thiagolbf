import "./style.css";

function Developer({ name, age, country }) {
  return (
    <div className="developers">
      <h1>Dev: {name}</h1>
      <p>Idade: {age} </p>
      <p>País: {country}</p>
    </div>
  );
}

export default Developer;
