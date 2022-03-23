import React from 'react'
import { useLocation } from 'react-router'

const Success = () => {
  const location = useLocation()
  return (
    <div>Payment was successful.</div>
  )
}

export default Success