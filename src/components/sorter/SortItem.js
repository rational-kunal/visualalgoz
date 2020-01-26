import React from "react";
import './sortItem.css';

const ANIMATION_DURATION = 380;

class SortItem extends React.Component{

    constructor({ value }) {
        super(null);

        this.state = { size: value, className:"normal" };
    }

    changeData({ size, color }) {
        this.setState({ size: size });
        this.setState({ className: "focused" });
        // if (color) {
        //     this.setState({ color: color });
            setTimeout(()=>( this.setState({ className: "normal"}) ), ANIMATION_DURATION);
        // }
    }

    render() {
        return (
            <div
                className={ this.state.className }
                style={{
                    width: "5vw",
                    height: this.state.size,
                    margin: "0.5vw",
                    transition: "all 0.8s cubic-bezier(.38,1.08,0,1.19)"
                }}
            />
        );
    }
}

export default SortItem;
