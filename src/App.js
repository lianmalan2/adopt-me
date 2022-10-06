const Pet = (props) => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, props.name),
    React.createElement('h2', {}, props.animal),
    React.createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement('div', {}, [
    React.createElement('h1', {}, 'Adopt Me!'),
    React.createElement(Pet, { name: 'Nox', animal: 'Cat', breed: 'Street' }),
    React.createElement(Pet, {
      name: 'Voldemort',
      animal: 'Cat',
      breed: 'Big Fuck-Off',
    }),
    React.createElement(Pet, {
      name: 'Biebie',
      animal: 'Dog',
      breed: 'Pekignese',
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
