import React, {useState} from 'react';

function SortView({ value }) {
    // const [calue, setValue] = useState(value);
    return (
        <div style={{ width: value, height: value, margin: "4px", backgroundColor: "black", transition: "all 0.2s cubic-bezier(0,-0.37,1,1.34)" }}>

        </div>
    )
}

export default SortView;
