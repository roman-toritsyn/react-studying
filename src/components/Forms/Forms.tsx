import React, { ReactEventHandler, useState } from "react";

export const Forms: React.FC = () => {

  const [formInfo, setFormInfo] = useState({
    name: '',
    sirname: '',
    age: 0,
    adress: '',
    gender: '',
  })

  const handleChange = (event: any) => {
    const value = event.target.value;
    setFormInfo({
      ...formInfo,
      [event.target.name]: value,
    })
  }

  return (
    <form action="#">
      <label htmlFor="name"> Name </label>
      <input
        type="text"
        name="name"
        placeholder="name"
        value={formInfo.name}
        onChange={handleChange}
      />

      <label htmlFor="sirname"> Sirname</label>
      <input
        type="text"
        name="sirname"
        placeholder="sirname"
        value={formInfo.sirname}
        onChange={handleChange}
      />

      <label htmlFor="age"> Age </label>
      <input
        type="number"
        name="age"
        value={formInfo.age}
        onChange={handleChange}
      />

      <label htmlFor="adress"> Adress</label>
      <textarea
        name="adress"
        placeholder="adress"
        value={formInfo.adress}
        id="adress"
        cols={30}
        rows={10}
        onChange={handleChange}
      >
      </textarea>

      <label htmlFor="gender">Gender</label>
        <select
          name="gender"
          id="gender"
          value={formInfo.gender}
          onChange={handleChange}
        >
          <option value="male"> Male </option>
          <option value="female"> Female </option>
        </select>

        <button
          type="submit"
          onClick={(event) => {
            event.preventDefault();
          }}
        >
          Submit
        </button>
    </form>
  )
}