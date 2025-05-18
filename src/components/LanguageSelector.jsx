import React from 'react';

const LanguageSelector = ({ currentLang, setLang }) => {
  return (
    <div className="mb-4">
      <select value={currentLang} onChange={(e) => setLang(e.target.value)}>
        <option value="en">English</option>
        <option value="hi">Hindi</option>
        <option value="es">Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
