import React, { useState, useEffect } from "react";
import {db} from '../firebase'

const CreateForm = (props) => {

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
    props.addOrEdit(values)
    setValues({ ...initialForm })
  }

  const getLinkById = async (id) => {
    const doc = await db.collection('songs').doc(id).get()
    setValues({...doc.data()})
  }
  //   EFFECTS
  useEffect(() => {
    if (props.currentId === '') {
      setValues({...initialForm})
    } else {
      console.log('se esta editando')
      getLinkById(props.currentId)
    }
  }, [props.currentId])

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
        <button > {props.currentId === '' ? 'Save Song' : 'Update Song'}</button>
      </form>
    </>
  );
};

export default CreateForm;
