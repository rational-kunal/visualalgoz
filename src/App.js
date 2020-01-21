import React from "react";
// import SortItem from "./components/sorter/SortItem";
// import SortView from "./components/sorter/SortView";
import SortAnimator from "./components/sorter/SortAnimator";
import bubbleSort from "./components/core/sort/BubbleSort";
import mergeSort from "./components/core/sort/MergeSort";
import "./App.css";

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <SortAnimator sortingFunction={ mergeSort } />
      </div>
    );
  }
}

export default App;
