import * as React from 'react';
import AppContext from './AppContext';

class AppContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === 'dark' ? 'light' : 'dark',
      }));
    };

    this.toggleLang = () => {
      this.setState(state => ({
        lang: state.lang === 'en' ? 'de' : 'en',
      }));
    };

    this.setLang = (lang) => {
      this.setState({ lang });
    };

    // State also contains the updater function so it will
    // be passed down into the context provider
    this.state = {
      theme: 'light',
      toggleTheme: this.toggleTheme,

      lang: 'en',
      toggleLang: this.toggleLang,
      setLang: this.setLang,
    };
  }

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default AppContextProvider;
