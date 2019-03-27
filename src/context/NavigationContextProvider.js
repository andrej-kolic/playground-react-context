import * as React from 'react';
import NavigationContext from './NavigationContext';

const PAGE_COUNT = 3;

class NavigationContextProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 1,
      title: 'Page 1',
      next: this.next,
      previous: this.previous,
    };
  }

  next = () => {
    const index = this.state.index >= PAGE_COUNT ? 1 : this.state.index + 1;
    this.goTo(index);
  };

  previous = () => {
    const index = this.state.index <= 1 ? PAGE_COUNT : this.state.index - 1;
    this.goTo(index);
  };

  goTo(index) {
    this.setState({
      index,
      title: `Page ${index}`,
    });
  };


  render() {
    return (
      <NavigationContext.Provider value={this.state}>
        {this.props.children}
      </NavigationContext.Provider>
    );
  }
}

export default NavigationContextProvider;
