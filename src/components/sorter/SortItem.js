import React from "react";

class SortItem extends React.Component{
    render() {
        return (
            <div

                style={{
                    width: this.props.value,
                    height: this.props.value,
                    margin: "4px",
                    backgroundColor: "black",
                    transition: "all 0.2s cubic-bezier(0,-0.37,1,1.34)"
                }}
            />
        );
    }
}

export default SortItem;
