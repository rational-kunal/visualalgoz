import React from "react";
import SortItem from "./SortItem";
import './sortanimator.css';

function randomBetween(min, max) {
    return Math.random() * (max - min) + min;
}

class SortAnimator extends React.Component {
    values = [];
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
                    this.refItems[ newPositions[itemI]["position"] ].current.changeData({size: newPositions[itemI]["value"], color: newPositions[itemI]["color"]});
                }

                this.forceUpdate();
            }, delay);
            delay += 800;
        }
    }

    constructor({ sortingFunction }) {
        super(null);

        for (let i=0; i<10; i++) {
            this.values.push( randomBetween(70, 600) );
        }

        this.refItems = this.values.map(x => React.createRef());
        this.sortItems = this.values.map((x, i) =>( <SortItem value={x} ref={ this.refItems[i] } /> ));

        this.animationQueue = sortingFunction([...this.values]);

        console.log(this.animationQueue);
    }

    render() {
        return (
            <div>
                <div className="animator">
                    { this.sortItems }
                </div>
            </div>
        )
    }
}

export default SortAnimator;
