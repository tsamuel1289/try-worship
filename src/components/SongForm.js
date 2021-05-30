//HERE IS WHERE I WRITE ALL LOGIC TO CONNECT TO THE FIREBASE

import React, {useEffect} from 'react' //47:11 uso de useEffect
import CreateForm from './CreateForm'
import {db} from '../firebase'


const SongForm = () => {
    
    const addOrEdit = async (songObject) => {
        await db.collection('songs').doc().set(songObject)
        console.log('new task added')
    }
    const getSongs = () => { //50:07 get songs from firebase
        db.collection('songs').onSnapshot(
            (querySnapshot) => querySnapshot.forEach( 
                (doc)=> console.log(doc.data())   
            )
        )

    }

    useEffect( ()=>{ getSongs() }  ,[])
   
   return <div>
        <CreateForm addOrEdit={addOrEdit}/>
    </div>
}
export default SongForm