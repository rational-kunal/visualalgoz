import React from "react";

const ANIMATION_DURATION = 200;

class SortItem extends React.Component{

    constructor({ value }) {
        super(null);

        this.state = { size: value, color: "black", radius: "8px" };
    }

    changeData({ size, color }) {
        if (size !== this.state.size) {
            this.setState({ radius: "32px" });
            setTimeout(()=>( this.setState({radius: "8px"}) ), ANIMATION_DURATION);
        }
        this.setState({ size: size });
        if (color) {
            this.setState({ color: color });
            setTimeout(()=>( this.setState({color: "black"}) ), ANIMATION_DURATION);
        }
    }

    render() {
        return (
            <div
                style={{
                    width: 100,
                    height: this.state.size,
                    margin: "10px",
                    backgroundColor: this.state.color,
                    borderRadius: this.state.radius,
                    transition: "all 0.8s cubic-bezier(.38,1.08,0,1.19)"
                }}
            />
        );
    }
}

export default SortItem;
