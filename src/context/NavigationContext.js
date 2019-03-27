import * as React from 'react';

export default React.createContext({
  index: 1,
  title: 'Page 1',
  next: () => {},
  previous: () => {},
});