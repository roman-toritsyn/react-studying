import { useEffect, useState } from "react"

export const Card: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [headerOne, setHeaderOne] = useState('');
  const [headerTwo, setHeaderTwo] = useState('');

  useEffect(() => {
    setHeaderTwo(name);
  }, [name])

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(+event.target.value);
  }

  const clearNameAgeState = () => {
    setName('');
    setAge(0);
  }

  return (
    <div
      className="block"
    >
      <h1>Header for submit =&gt; {headerOne}</h1>
      <h2>Header for useEffect =&gt; {headerTwo} </h2>
      <span>{name + (age ? age : '')}</span>
      <form
        action="#"
        onSubmit={(e) => {
          console.log('form submitted')
          e.preventDefault();
          setHeaderOne(name + age);
        }}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="name"
          value={name}
          onChange={(e) => {
            console.log('changed name input');
            handleNameChange(e);
          }}
        />
        <br/>
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          placeholder="age"
          value={age}
          onChange={(e) => {
            console.log('changed age input');
            handleAgeChange(e);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            console.log('form submitted');
          }}
        >
          Submit
        </button>
        <button
          type="button"
          onClick={() => clearNameAgeState()}
        >
          clear inputs
        </button>
      </form>
    </div>
  )
}
