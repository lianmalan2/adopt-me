import { createElement } from 'react';
import { render } from 'react-dom';

const Pet = (props) => {
  return createElement('div', {}, [
    createElement('h1', {}, props.name),
    createElement('h2', {}, props.animal),
    createElement('h2', {}, props.breed),
  ]);
};

const App = () => {
  return createElement('div', {}, [
    createElement('h1', {}, 'Adopt Me!'),
    createElement(Pet, { name: 'Nox', animal: 'Cat', breed: 'Street' }),
    createElement(Pet, {
      name: 'Voldemort',
      animal: 'Cat',
      breed: 'Big Fuck-Off',
    }),
    createElement(Pet, {
      name: 'Biebie',
      animal: 'Dog',
      breed: 'Pekignese',
    }),
  ]);
};

render(createElement(App), document.getElementById('root'));
