import Separator from './components/Separator';
import Section from './components/Section';
import Curriculum from './components/Curriculum';
import Contacts from './components/Contacts';
import Header from './components/Header';
import SectionGradient from './components/SectionGradient';
import { Analytics } from '@vercel/analytics/react';

import './App.css';

function App() {
  return (
    <>
      <div className="App sm:text-xl">
        <Header />
        <Separator />
        <Section>
          <Curriculum />
        </Section>
        <SectionGradient>
          <Separator />
          <Contacts />
        </SectionGradient>
        <Analytics />
      </div>
    </>
  );
}
export default App;

