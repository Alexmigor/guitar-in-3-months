import React from 'react'
import notes from '../images/notes~.svg'

export default function Separator({marg}) {
  return (
    <div className='separator'><img src={notes} className="-mt-28 h-56 w-full" alt="Notes" /></div>
  )
}
