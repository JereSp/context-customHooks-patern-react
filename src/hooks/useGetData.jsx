import React, { useEffect, useState } from 'react'

function useGetData() {
let [ info, setInfo ] = useState(null)

async function getData(){
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await response.json()
    setInfo(data)
}

useEffect(() => {
    getData()
}, [])

  let customData = {
    data: info
  }
  return customData
}

export default useGetData