import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

function MyOtherSpan() {
  const { data } =  useContext(myContext)
  return (
    <div>
        {
            data && 
            <span>el id de la data es: <strong>{data.id}</strong></span>
        }
    </div>
  )
}

export default MyOtherSpan