import React, {useState} from "react";

const CreateForm = () => {

  const initialForm = {
    nameSong:'',
    artistSong:'',
    lyricSong:''
  }
  const [values, setValues] = useState(initialForm)
 
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target.value)
  }
  
  const handleInputChange = (e) => {
    console.log(e.target)
    const {name, value} = e.target  //min 35:39
    
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
        />

        <input
          className="inputsCreate"
          type="text"
          name="artistSong"
          placeholder="Artist"
          onChange={handleInputChange}
        />
        <textarea
          className="inputsCreate"
          name="lyricSong"
          placeholder="Write the song letter"
          rows="5"
          onChange={handleInputChange}
        ></textarea>
        <button > Save Song</button>
      </form>
    </>
  );
};
export default CreateForm;
