import React from 'react'
import girl2 from '../images/girl2.png'
import telegram from '../images/telegram.png'
import viber from '../images/viber.png'

export default function Contacts() {


  return (
    <div className='flex sm:-mt-16  flex-col self-center min-h-dvh justify-evenly  w-4/6 sm:w-4/5 '>
      <p className='text-3xl sm:text-2xl'>Зверніть увагу – це НЕ онлайн.</p>
      <p className='text-left '>Всі заняття побудовані таким чином, щоб досягти максимальної ефективності та проводяться за місцем проживання учня.<br />
        На даний момент географія проведення занять  обмежена такими районами:<br />
        Центр Одеси, район Залізничного вокзалу, Ближні Млини, житловий масив "Черемушки" та с. Дачне. </p>
      <p className='text-left'>Якщо ви мешкаєте в одному з цих районів та бажаєте взяти участь у програмі - перейдіть за посиланням нижче, натиснув на кнопку "Реєстрація", та заповніть невеличку форму.</p>

      <a className='text-yellow-300 text-4xl sm:text-3xl' href='https://forms.gle/cSuTzxfrWx1mBYH3A' target='_blank' rel='noreferrer' >"Реєстрація"</a>

      <p>Або просто зателефонуйте:<br /><a href='tel:+380669999765'>066 9999 765</a> </p>
      <p >Чи залиште повідомлення:</p>
      <div className='flex self-center justify-evenly w-40'>
        <a href='https://t.me/myhora' target='_blank' rel='noreferrer'><img src={telegram} className='w-8 ' alt='icon' /></a>
        <a href="viber://chat?number=%2B380669999765" target='_blank' rel='noreferrer'><img src={viber} className='w-8' alt='icon' /></a>
      </div>
      <img src={girl2} className='w-32 self-center' alt='girl' />
    </div>
  )
}
