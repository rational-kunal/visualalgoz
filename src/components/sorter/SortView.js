import React, { useState } from "react";
import SortItem from "./SortItem";

class SortView extends React.Component {
  values = [];

  render() {
    return (
      <div
        style={{
          display: "flex",
          width: "100vw",
          height: "100vh",
          alignItems: "center"
        }}
      >
        {this.props.values.map(v => (
          <SortItem value={v} />
        ))}
      </div>
    );
  }
}

export default SortView;
