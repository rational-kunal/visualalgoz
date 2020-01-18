import React from 'react';
import SortView from "./components/sorter/SortView";
import logo from './logo.svg';
import './App.css';

var _values = [10, 100, 40, 30, 50, 10, 100, 400, 300, 50, 100, 100, 40, 310, 50, 10, 100, 40, 30, 50, 10, 100, 400, 300, 50, 100, 100, 40, 310, 50, 10, 100, 40, 30, 50, 10, 100, 400, 300, 50, 100, 100, 40, 310, 50, 10, 100, 40, 30, 50, 10, 100, 400, 300, 50, 100, 100, 40, 310, 50];
var values = [..._values];
class App extends React.Component {

  initArray() {
    for (var i = 0; i < _values.length ; i++) {
      for(var j = 0 ; j < _values.length - i - 1; j++){
        if (_values[j] > _values[j + 1]) {
          var temp = _values[j];
          _values[j] = _values[j+1];
          _values[j + 1] = temp;
          this.Q.push([j, j+1]);
        }
      }
    }
    console.log(this.Q);
  }
  Q = []
  constructor() {
    super();

    this.initArray();
  }


  startGame() {
    var delay = 10;
    var Q = this.Q;
    for(var i=0; i<Q.length; i++){
      let [u, v] = [Q[i][0], Q[i][1]];

      setTimeout(() => {
        var temp = values[u];
        values[u] = values[v];
        values[v] = temp;
        i += 1;
        // f();
        console.log(values,u, v);

        this.forceUpdate();
      }, delay);
      delay += 10;
    }
  }

  render() {
    return (
        <div className="App">

          <button onClick={()=>this.startGame()}>start</button>

          <div style={{display: "flex", width: "100vw", height: "100vh", alignItems: "center"}}>
            { values.map(v => <SortView value={v}/>) }
          </div>

        </div>
    )
  }
}

export default App;
