import React from "react";
import "./App.css";
import Bar from "./components/Bar";

class App extends React.Component {
  state = {
    bar: [
      { text: "What is Netflix?" },
      { text: "How much does Netflix cost?" },
      { text: "Where can I watch?" },
      { text: "How do I cancel?" },
      { text: "What can I watch on Netflix?" },
      { text: "How does the free trial work?" }
    ]
  };
  render() {
    const bars = this.state.bar.map((bars, index) => {
      return <Bar text={bars.text} key={index} />;
    });
    return (
      <div className="app">
        <div className="header">
          <div className="title">
            <h1>Frequently Asked Questions</h1>
          </div>
        </div>
        <div className="main">{bars}</div>
        <button className="trial">Try 30 days free ></button>
      </div>
    );
  }
}

export default App;
