import { useState, useEffect } from 'react';
import Pet from './Pet';

const ANIMALS = ['birds', 'cat', 'dog', 'rabbit', 'reptile'];

const SearchParams = () => {
  const [location, setLocation] = useState('');
  const [animal, setAnimal] = useState('');
  const [breed, setBreed] = useState('');
  const breeds = [];
  const [pets, setPets] = useState([]);

  useEffect(() => {
    requestPets();
  }, [animal]); // eslint-disable-line react-hooks/exhaustive-deps

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

  console.warn('STATE', { location, animal, breed });

  return (
    <div className="search-params">
      <form>
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
      {pets.map((pet) => (
        <Pet key={pet.id} name={pet.name} animal={pet.animal} breed={breed} />
      ))}
    </div>
  );
};

export default SearchParams;
