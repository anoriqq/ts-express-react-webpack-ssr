import * as React from 'react';

export interface CounterProps {
}

export interface CounterState {
    counter: number;
}

class Counter extends React.Component<CounterProps, CounterState> {

  constructor(props: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  incrementCounter() {
    console.log('incrementCounter');
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <h1>counter at: {this.state.counter}</h1>
        <button
          onClick={e=>window.console.log('incrementCounter')}
        >クリック</button>
      </div>
    );
  }
}

export default Counter;
