import React from "react";
// import SortItem from "./components/sorter/SortItem";
// import SortView from "./components/sorter/SortView";
import SortAnimator from "./components/sorter/SortAnimator";
import bubbleSort from "./components/core/sort/BubbleSort";
import NavBar from "./components/Navigation/NavBar";
import "./App.css";

class App extends React.Component {

  constructor() {
    super(null);
    this.changeAlgorithm = this.changeAlgorithm.bind(this);
    this.state = { algorithm: bubbleSort, refToAnimator: React.createRef() };
  }

  changeAlgorithm( algorithm ) {
    this.setState({ algorithm: algorithm });

    this.state.refToAnimator.current.animate();
  }

  render() {
    return (
      <div className="App">
        <NavBar changeAlgorithm={ this.changeAlgorithm } />
        <SortAnimator sortingFunction={ this.state.algorithm } ref={ this.state.refToAnimator } />
      </div>
    );
  }
}

export default App;
