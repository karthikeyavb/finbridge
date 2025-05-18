import React, { useState } from 'react';
import { content } from './data/content';
import Card from './components/Card';
import LanguageSelector from './components/LanguageSelector';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import './App.css';

function App() {
  const [lang, setLang] = useState('en');

  return (
    <div className="container">
    <Header />
    <LanguageSelector currentLang={lang} setLang={setLang} />
    {content[lang].map((item, index) => (
      <Card key={index} title={item.title} desc={item.desc} />
    ))}
    <ContactForm />
  </div>
  );
}

export default App;
