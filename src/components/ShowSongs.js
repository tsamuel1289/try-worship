import React, { useEffect, useState } from 'react'
import { db } from '../firebase'
import CreateForm from './CreateForm'

const ShowSongs = () => {
    const [songs, setSongs] = useState([])
    const [currentId, setCurrentId] = useState('HHHH')

   

    const getSongs = () => { //50:07 get songs from firebase
        db.collection('songs').onSnapshot(
            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach(

                    (doc) => {
                        docs.push({ ...doc.data(), id: doc.id })
                    }
                )
                setSongs(docs)
            }
        )
    }

    useEffect(() => { getSongs() }, [])

    const onDeleteSong = async (id) => {
        if (window.confirm('estas seguro de borrar esta cancion?')) {
            await db.collection('songs').doc(id).delete()
        }
    }

    /*   const onEditSong = (id) => {
           console.log(`editing song: ${id}`)
       }
   */
    return <div>
        <CreateForm {...{currentId}}/>
        <h2>Listado de Canciones</h2>
        {songs.map(song => {
            return (<div className="showCard" key={song.id}>

                <div className='barra'>
                    <p><b>{song.nameSong}</b></p>
                    <div className='botones'>
                        <button id='editButton' onClick={() => setCurrentId(song.id)}>Editar</button>
                        <button onClick={() => onDeleteSong(song.id)}>X</button>
                    </div>
                </div>

                <p>{song.artistSong} </p><br />
                <pre>{song.lyricSong}</pre>
            </div>
            )
        })}


    </div>
}
export default ShowSongs