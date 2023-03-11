import React, { useContext } from 'react'
import { myContext } from '../context/myContext'

function MySpan() {

    const { data } = useContext(myContext)

  return (
    <div>
        { data && 
            <span>el titulo es: <strong>{data.title}</strong></span>
        }
    </div>
  )
}

export default MySpan