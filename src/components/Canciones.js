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
   console.log(showData)

    return <div>
        <h4>hola</h4>
       
       

       

    </div>
    
}

export default Canciones