import React from "react";
import SortView from "./SortView";
import SortItem from "./SortItem";

class SortAnimator extends React.Component {
    values = [10, 40, 30, 20, 330, 240, 50, 60, 20, 90, 110, 120, 20, 100, 150, 170, 200, 210];
    position = [0, 0];
    Q = [];
    animationQueue = [];
    sortItems = [];

    animate() {
        let delay = 10;
        for (let i = 0; i < this.animationQueue.length; i++) {
            let newPositions = this.animationQueue[i];

            setTimeout(() => {
                for (let itemI = 0; itemI < newPositions.length; itemI++) {
                    this.sortItems[ newPositions[itemI]["position"] ] = < SortItem value={ newPositions[itemI]["value"] } />;
                }

                this.forceUpdate();
            }, delay);
            delay += 100;
        }
    }

    constructor({ sortingFunction }) {
        super(null);
        this.animationQueue = sortingFunction([...this.values]);

        this.sortItems = this.values.map(x =>( <SortItem value={x} /> ));

        console.log(this.animationQueue);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.animate()}>start</button>
                <div style={{ display: "flex" }}>
                    { this.sortItems }
                </div>
            </div>
        )
    }
}

export default SortAnimator;
