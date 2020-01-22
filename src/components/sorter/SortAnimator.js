import React from "react";
import SortView from "./SortView";

class SortAnimator extends React.Component {
    values = [10, 40, 30, 20, 330, 240, 50, 60, 20, 90, 110, 120, 20, 100, 150, 170, 200, 210, 10, 310, 330, 410, 250, 60, 170, 180, 190, 145, 155, 233];
    Q = [];
    animationQueue = [];

    animate() {
        let delay = 10;
        for (let i = 0; i < this.animationQueue.length; i++) {
            let newValues = this.animationQueue[i];

            setTimeout(() => {
                this.values = newValues;
                i += 1;

                this.forceUpdate();
            }, delay);
            delay += 80;
        }
    }

    constructor({ sortingFunction }) {
        super(null);
        this.animationQueue = sortingFunction([...this.values]);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.animate()}>start</button>
                <SortView values={ this.values } />
            </div>
        )
    }
}

export default SortAnimator;
