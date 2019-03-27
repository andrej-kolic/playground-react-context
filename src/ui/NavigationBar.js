import * as React from 'react';
import NavigationContext from '../context/NavigationContext';
import AppContext from '../context/AppContext';

function NavigationBar() {
  // but also a toggleTheme function from the context
  return (
    <AppContext.Consumer>
      {({ theme, lang }) => (
        <NavigationContext.Consumer>
          {({ index, title, next, previous }) => (
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>{index}: {title}</div>
              <button onClick={previous}>&lt;</button>
              <button onClick={next}>&gt;</button>
              <div>{lang}</div>
              <div>{theme}</div>
            </div>
          )}
        </NavigationContext.Consumer>
      )}
    </AppContext.Consumer>
  );
}

export default NavigationBar;
