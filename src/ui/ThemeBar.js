import * as React from 'react';
import AppContext from '../context/AppContext';

function ThemeBar() {
  // but also a toggleTheme function from the context
  return (
    <AppContext.Consumer>
      {({ theme, toggleTheme }) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div>{theme}</div>
          <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </AppContext.Consumer>
  );
}

export default ThemeBar;
