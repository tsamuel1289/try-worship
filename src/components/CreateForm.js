//HERE I WRITE ALL IS INTO THE FORM FOR CREATE A SONG AND EXPORT DE 'VALUE'

import React, { useState } from "react";
import {db} from '../firebase'

const CreateForm = (props) => {

  console.log(props.currentId)

  const initialForm = {
    nameSong: '',
    artistSong: '',
    lyricSong: ''
  }
  const [values, setValues] = useState(initialForm)

  const handleInputChange = (e) => {

    const { name, value } = e.target; //min 35:39
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addOrEdit(values)
    setValues({ ...initialForm })
  }

  const addOrEdit = async (values) => {
    await db.collection('songs').doc().set(values)
    console.log('new task added')
  }
  
  return (
    <>
      <h3>Formulario de Canciones</h3>
      <form onSubmit={handleSubmit}>
        <input

          className="inputsCreate"
          type="text"
          name="nameSong"
          placeholder="Name of song"
          onChange={handleInputChange}
          value={values.nameSong}
        />

        <input
          className="inputsCreate"
          type="text"
          name="artistSong"
          placeholder="Artist"
          onChange={handleInputChange}
          value={values.artistSong}
        />
        <textarea
          className="inputsCreate"
          name="lyricSong"
          placeholder="Write the song letter"
          rows="15"
          onChange={handleInputChange}
          value={values.lyricSong}
        ></textarea>
        <button > Save Song</button>
      </form>
    </>
  );
};

export default CreateForm;
