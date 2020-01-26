import React from "react";
import SortItem from "./SortItem";
import './sortItem.css'

class SortView extends React.Component {
    valueViews = [];

  constructor(props) {
      super(props);

      this.valueViews = props.values.map(x =>( <SortItem value={x} /> ));
  }

  render() {
      [this.valueViews[this.props.position[0]], this.valueViews[this.props.position[1]]] = [this.valueViews[this.props.position[1]], this.valueViews[this.props.position[0]]];

      return (
          <div
              style={{
                  display: "flex",
                  width: "100vw",
                  height: "100vh",
                  alignItems: "center"
              }}
          >
              { this.valueViews }
      </div>
      );
  }

}

export default SortView;
