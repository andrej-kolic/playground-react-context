import * as React from 'react';
import AppContext from '../context/AppContext';

function LangBar() {
  // but also a toggleTheme function from the context
  return (
    <AppContext.Consumer>
      {({ lang, toggleLang, setLang }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>{lang}</div>
          <button onClick={toggleLang}>Toggle Lang</button>
          <button onClick={() => setLang('en')}>EN</button>
          <button onClick={() => setLang('de')}>DE</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default LangBar;
