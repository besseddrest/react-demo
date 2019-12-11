import React from 'react';
// import components
import {Button, Colors} from 'react-foundation';

class App extends React.Component {
  render() {
    return (
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="cell">
            <h1>Joe Dart on the Joe Dart Bass</h1>
            <Button color={Colors.SUCCESS}>Submit</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;