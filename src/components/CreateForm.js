import React from 'react'

const CreateForm = () => {
    return (
        <>
            <h3>Formulario de Canciones</h3>
            <form>
                <input 
                    className='inputsCreate'
                    type="text"
                    name="name-song"
                    placeholder='Name of song'
                     />

                <input 
                    className='inputsCreate'
                    type="text"
                    name='artist-song'
                    placeholder='Artist'
                 />
                 <textarea 
                    className='inputsCreate'
                    name="lyric-song"
                    placeholder='Artist'
                    rows="5"></textarea>

            </form>
        </>
    )
}
export default CreateForm