import React from 'react'

import VideoPlaeyr from './VideoPlaeyr'

export default function Curriculum() {
  return (
    <div className='flex flex-col   min-h-dvh  m-auto justify-evenly w-4/6 sm:w-4/5 ' >
      <VideoPlaeyr />
      {/* <p className='text-right'>Про викладача тут</p> */}
      <div className='self-center'>
        <h2 className='text-4xl sm:text-2xl text-amber-600 m-5'>Напрями навчання:</h2>
        <ol className='ml-14 text-left  list-disc'>
          <li>Класична гітара</li>
          <li>Акомпанемент</li>
          <li>Пісні під гітару</li>
        </ol>
      </div>
      {/* <div className='flex sm:flex-col self-center '>
      </div> */}
      <h2 className='text-4xl sm:text-2xl text-amber-600'>Чого ви навчитеся на цьому курсі:</h2>
      <div className='flex sm:flex-col'>
        <ol className='self-center text-left ml-10 list-disc'>
          <li>Грати акомпанемент улюблених пісень</li>
          <li>Співати пісні під гітару</li>
          <li>Грати музичні композиції по нотах чи табулатурі</li>
          <li>Базовим технікам та прийомам гітариста</li>
          <li>Як самостійно вдосконалюватись після цього курсу</li>
        </ol>
      </div>
    </div>
  )
}
