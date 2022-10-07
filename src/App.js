import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
      {/*
      <Pet name="Nox" animal="Cat" breed="Street" />
      <Pet name="Voldemort" animal="Cat" breed="Big Fuck-Off" />
      <Pet name="Biebie" animal="Dog" breed="Pekignese" />
      */}
    </div>
  );
};

render(<App />, document.getElementById('root'));
