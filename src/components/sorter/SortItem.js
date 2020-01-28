import React from "react";
import './sortItem.css';

const ANIMATION_DURATION = 320;

class SortItem extends React.Component{

    constructor({ value }) {
        super(null);

        this.state = { size: value, className:"normal" };
    }

    changeData({ size, color }) {
        this.setState({ size: size });
        this.setState({ className: color });
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
                    width: "20px",
                    height: this.state.size,
                    margin: "5px",
                    transition: "all 0.8s cubic-bezier(.38,1.08,0,1.19)"
                }}
            />
        );
    }
}

export default SortItem;
