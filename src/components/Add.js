import React, { useState, useEffect } from "react";
import {db} from '../firebase'

const Add = () =>{
    
    const addsong = () => {
        
    }

    return(
        <div>
            <h2>Esto es Add</h2>
            <form onSubmit={addsong}>
                <input type="text" />
                <button>add</button>
            </form>
        </div>
    )
}
export default Add
