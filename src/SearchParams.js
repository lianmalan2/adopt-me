import { useState, useEffect } from 'react';
import useBreedList from './useBreedList';
import Results from './Results';

const ANIMALS = ['birds', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const [pets, setPets] = useState([]);
  const [breeds, status] = useBreedList(animal); // eslint-disable-line no-unused-vars

  useEffect(() => {
    requestPets();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  async function requestPets() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
    );

    const json = await res.json();

    setPets(json.pets);
  }

  const animalOptions = ANIMALS.map((animal) => (
    <option key={animal} value={animal}>
      {animal}
    </option>
  ));

  const handleAnimalChange = (e) => {
    setAnimal(e.target.value);
    setBreed('');
  };

  const breedOptions = breeds.map((someBreed) => (
    <option key={someBreed} value={someBreed}>
      {someBreed}
    </option>
  ));

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}>
        <label htmlFor="location">
          Location
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={animal}
            onChange={handleAnimalChange}
            onBlur={handleAnimalChange}>
            <option />
            {animalOptions}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={breed}
            onChange={handleBreedChange}
            onBlur={handleBreedChange}>
            <option />
            {breedOptions}
          </select>
        </label>
        <button>Submit</button>
      </form>
      <Results pets={pets} />
    </div>
  );
};

export default SearchParams;
