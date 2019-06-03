import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      title: 'TITLE'
    };
  }

  render() {
    return (
      <main className="App">
        <h1>
          { this.state.title } - { this.state.count }
        </h1>

        <input
          type="text"
          value={this.state.title}
          onChange={(event) => {
            const lastChar = event.target.value.slice(-1);

            if (Number.isInteger(+lastChar)) {
              return;
            }

            this.setState({
              title: event.target.value,
            });
          }}
        />

        <button onClick={() => {
          this.setState({ count: this.state.count + 1 })
        }}>
          Add
        </button>
      </main>
    );
  }
}

export default App;
