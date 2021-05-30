import React, {useEffect, useState} from 'react'
import {db} from '../firebase'

const ShowSongs = () => {

    const [songs, setSongs] = useState([])

    const getSongs = () => { //50:07 get songs from firebase
        db.collection('songs').onSnapshot(
            (querySnapshot) =>  querySnapshot.forEach( 
                docs=[];
                (doc)=> {
                    docs=[];
                    docs
                    console.log(doc.data())
                }   

                
            )
        )
        

    }
    


    useEffect( ()=>{ getSongs() }  ,[])

    return <div>
        <h1>muestra canciones</h1>
       
        })}
    </div>
}
export default ShowSongs