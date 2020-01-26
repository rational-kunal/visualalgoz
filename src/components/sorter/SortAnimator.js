import React from "react";
import SortView from "./SortView";

class SortAnimator extends React.Component {
    values = [10, 40, 30, 20, 330, 240, 50, 60, 20, 90, 110, 120, 20, 100, 150, 170, 200, 210];
    position = [0, 0];
    Q = [];
    animationQueue = [];

    animate() {
        let delay = 10;
        for (let i = 0; i < this.animationQueue.length; i++) {
            let newPosition = this.animationQueue[i];

            setTimeout(() => {
                this.position = newPosition;
                i += 1;

                this.forceUpdate();
            }, delay);
            delay += 800;
        }
    }

    constructor({ sortingFunction }) {
        super(null);
        this.animationQueue = sortingFunction([...this.values]);
        console.log(this.animationQueue);
    }

    render() {
        return (
            <div>
                <button onClick={() => this.animate()}>start</button>
                <SortView values={ this.values } position={ this.position }/>
            </div>
        )
    }
}

export default SortAnimator;
