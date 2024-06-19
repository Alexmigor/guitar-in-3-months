import React from 'react'
import sun from '../images/sun.png';
import guitar_h from '../images/guitar-h.png'
import girl from '../images/girl.png'

export default function Header() {
  return (
    <header className="App-header min-h-dvh ">
        <img src={sun} className="App-sun mb-20 sm:m-5" alt="Sun" />
        <img src={guitar_h} className="App-guitar" alt="Guitar" />
        <h1 className='text-4xl text-yellow-300 m-10'>Гітара за літо</h1>
        <div className='App-paragraf w-3/5 xl:w-5/6 sm:w-4/5 flex sm:flex-col'>
          {/* <img src={guitar} className="App-logo1" alt="logo" /> */}
          <img src={girl} className="App-girl h-60 sm:h-40 sm:w-32 sm:mb-5 self-center" alt="Girl" />
          <p className='text-left ml-5 sm:ml-0 sm:pb-10'>
            Програма інтенсивного  навчання грі на гітарі для учнів, студентів та усіх бажаючих від 12 років, які мають достатньо вільного часу на період літніх канікул.<br />
            Цей курс допоможе вам зробити мрію реальністю, а саме - опанувати гітару всього за 1 літо.
            <br/>
            Навчання індивідуальне та розраховане на абсолютних новачків, тому не потребує попередньої підготовки.
          </p>
        </div>
      </header>
  )
}
