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
    intervalI = 0;
    interval = null;
    sortingFunction = null;

    doAnimate() {
        if (this.intervalI === this.animationQueue.length-1) clearInterval( this.interval );

        let newPositions = this.animationQueue[ this.intervalI ];

        for (let itemI = 0; itemI < newPositions.length; itemI++) {
            this.refItems[ newPositions[itemI]["position"] ].current.changeData({size: newPositions[itemI]["value"], color: newPositions[itemI]["color"]});
        }

        this.forceUpdate();

        this.intervalI += 1;
    }

    animate( sortingFunction ) {
        this.animationQueue = sortingFunction([...this.values]);

        clearInterval( this.interval );
        this.intervalI = 0;
        this.interval = setInterval(this.doAnimate, 500);
    }

    randomize() {
        this.values = [];
        for (let i=0; i<21; i++) {
            this.values.push( randomBetween(70, 600) );
        }

        this.refItems = this.values.map(x => React.createRef());
        this.sortItems = this.values.map((x, i) =>( <SortItem value={x} ref={ this.refItems[i] } /> ));
    }

    constructor({ sortingFunction }) {
        super(null);

        this.sortingFunction = sortingFunction;

        this.doAnimate = this.doAnimate.bind(this);
        this.randomize = this.randomize.bind(this);

        this.randomize();
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
