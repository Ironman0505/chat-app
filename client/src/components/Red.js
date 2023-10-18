import React from 'react'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

import { modify } from '../slices/slice1';
import { useDispatch  } from 'react-redux/es/hooks/useDispatch';

function Red() {
    const data=useSelector(state=>state.samples);
    const dispatch=useDispatch();
    

    const fn=()=>{
        let actionObj=modify(69);
        dispatch(actionObj);
    }

    

    
  return (
    
    <div>
        <h2>Redux Page</h2>
        {
            data.map((el,id)=>(
                <h2 key={id}  >{el}</h2>
            ))
        }
        <button onClick={fn} > Click</button>
    </div>
  )
}

export default Red;