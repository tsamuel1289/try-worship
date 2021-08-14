import React, { useState, useEffect } from "react";
import {db} from '../firebase'

const Add = () =>{
    const [songs, setSongs] = useState([])
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

    //   EFFECTS
    useEffect(
        getSongs, []
    )



    db.collection('lists').onSnapshot(
        (querySnapshot) => {
            let docp = [];
            querySnapshot.forEach(
                
                (docc)=>{
                    docp.push(docc.data().fecha)
                    //console.log(docc.data())
                }
            )
            console.log(docp)

        }
    )
    



    return(
        <div>
            
            <h2>Esto es Add</h2>
            {songs.map(song => {
            return (<div className="showCard" key={song.id}>

                <div className='barra'>
                    <p><b>{song.nameSong}</b></p>
                    
                </div>

            
            </div>
            )
        })}
            
        </div>
    )
}
export default Add
