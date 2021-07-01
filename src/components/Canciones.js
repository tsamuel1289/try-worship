import React, {useState, useEffect} from 'react'
import {db} from '../firebase'

const Canciones = () => {
    
    const [showData, setShowData] = useState([])
    

    const getSongs = () => {
        db.collection('songs').onSnapshot(
            (querySnapshot)=>{
                const docs = []
                querySnapshot.forEach(
                    (doc) => {
                        docs.push({...doc.data(), id:doc.id})
                    }
                )
                setShowData(docs)
            }
        )
    }
    useEffect(getSongs, [])
   
    return <div>
        <h4>Este es el listado</h4>
        {showData.map((song)=>{
            return (<div className='listado' key={song.id}>
                {song.nameSong} - {song.artistSong} 
            </div>)
        })}
       
       

       

    </div>
    
}

export default Canciones