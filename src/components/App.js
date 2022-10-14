import { render } from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { StrictMode, useState } from 'react';
import SearchParams from './SearchParams';
import Details from './Details';
import ThemeContext from '../ThemeContext';

const App = () => {
  const theme = useState('green');

  return (
    <StrictMode>
      <ThemeContext.Provider value={theme}>
        <BrowserRouter>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />}></Route>
            <Route path="/" element={<SearchParams />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.getElementById('root'));
