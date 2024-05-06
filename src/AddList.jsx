function AddAnimals() {
    const animals = ["Lion", "Cow", "Wolf", "Eagle", "Deer"];
    const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)
  
    return (
      <div>
        <h1>Animals: </h1>
        <ul>
            {animalsList}
        </ul>
      </div>
    );
  }
  
  export default AddAnimals