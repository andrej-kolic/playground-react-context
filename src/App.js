import React, { Component } from 'react';

import ThemeBar from './ui/ThemeBar';
import LangBar from './ui/LangBar';
import NavigationBar from './ui/NavigationBar';
import AppContextProvider from './context/AppContextProvider';
import NavigationContextProvider from './context/NavigationContextProvider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContextProvider>
          <ThemeBar />
          <LangBar />

          <NavigationContextProvider>
            <NavigationBar />
          </NavigationContextProvider>
        </AppContextProvider>
      </div>
    );
  }
}

export default App;
