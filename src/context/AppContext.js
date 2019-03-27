import * as React from 'react';

export default React.createContext({
  theme: 'dark',
  toggleTheme: () => {},

  lang: 'en',
  toggleLang: () => {},
  setLang: () => {},
});