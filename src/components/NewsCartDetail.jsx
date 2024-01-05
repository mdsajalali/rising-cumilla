import React from 'react'
import { useParams } from 'react-router-dom'

const NewsCartDetail = () => {
    const {id} = useParams()
  return (
    <div>NewsCartDetail : {id}</div>
  )
}

export default NewsCartDetail