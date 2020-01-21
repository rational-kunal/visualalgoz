import React from "react";
import SortView from "./SortView";

class SortAnimator extends React.Component {
    values = [10, 100, 40, 30, 50, 10, 100, 400, 300, 50, 100, 100, 40];
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
            delay += 800;
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
