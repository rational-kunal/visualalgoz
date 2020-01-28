import React from "react";
import './navbar.css';
import bubbleSort from "../core/sort/BubbleSort";
import mergeSort from "../core/sort/MergeSort";
import quickSort from "../core/sort/QuickSort";

export default class NavBar extends React.Component {
    onAlgorithmChange(algorithm) {
        this.props.changeAlgorithm( algorithm );
    }

    render() {
        return (
            <div className="navbar">

                <div className="navbar-item" onClick={(x)=>( this.onAlgorithmChange( bubbleSort ) )}> bubble sort </div>
                <div className="navbar-item" onClick={(x)=>( this.onAlgorithmChange( mergeSort ) )}> merge sort </div>
                <div className="navbar-item" onClick={(x)=>( this.onAlgorithmChange( quickSort ) )}> quick sort </div>

            </div>
        )
    }
}
