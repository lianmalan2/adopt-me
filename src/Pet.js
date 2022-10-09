const Pet = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.animal}</h2>
      <h2>{props.breed}</h2>
      <h2>{props.location}</h2>
      <h2>{props.id}</h2>
      <h2>{props.key}</h2>
      {/* <h2>{props.images}</h2> */}
    </div>
  );
};

export default Pet;
