import React, {Component} from 'react'
import Header from './Header/Header'
import Counter from './Counter/Counter'

class App extends Component {
  constructor() {
    super();
    this.state = {
      title: 'ReactJS Counter'
    };
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <div className="mt-5">
          <Counter />
        </div>
      </div>
    )
  }
}

export default App;
