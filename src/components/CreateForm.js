//HERE I WRITE ALL IS INTO THE FORM FOR CREATE A SONG AND EXPORT DE 'VALUE'

import React, {useState} from "react";

const CreateForm = (props) => {

  const initialForm = {
    nameSong:'',
    artistSong:'',
    lyricSong:''
  }
  const [values, setValues] = useState(initialForm)
 
  const handleInputChange = (e) => {
    
    const {name, value} = e.target; //min 35:39
    setValues({...values, [name]:value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addOrEdit(values)
    setValues({...initialForm})
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
          rows="5"
          onChange={handleInputChange}
          value={values.lyricSong}
        ></textarea>
        <button > Save Song</button>
      </form>
    </>
  );
};
export default CreateForm;
