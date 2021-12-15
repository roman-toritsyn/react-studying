import { useState } from "react"

export const Card: React.FC = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [header, setHeader] = useState('');

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handleAgeChange = (event: any) => {
    setAge(+event.target.value);
  }

  return (
    <div
      className="block"
    >
      <h1>{header}</h1>
      <span>{name + (age ? age : '')}</span>
      <form 
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          setHeader(name + age);
        }}
      >
        <input
          type="text"
          placeholder="name"
          onChange={(e) => handleNameChange(e)}
        />
        <br/>
        <input
          type="number"
          placeholder="age"
          onChange={(e) => handleAgeChange(e)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>

  )
}