

import React, { useEffect, useState } from 'react';
import './App.css';

function StatsMiddle(props) {
    const extension = props.extension;
    const fileType = props.fileType;
    const format = props.format;

    const checkMismatch = () => {
        if (format) {

            let processedExtension = ""
            let processedFormat = format.toLowerCase();
            if (extension.toLowerCase() === 'jpeg' || extension.toLowerCase() ==='jpg') {
                processedExtension = 'jpeg'
            }
            else if (extension.toLowerCase() === 'png') {
                processedExtension = 'png'
            }
            if (processedExtension === processedFormat) {
                return "notMismatch";
            }
            else {
                return "mismatch"
            }

        }

    }


    return (
        <div className='statsMiddle'>
            <div className={`${extension === undefined ? "beforeDrop" : ""}`}>Extension: {extension}</div>
            <div className={`${format === undefined ? "beforeDrop" : ""}`}>Internal Format: {format}</div>
            <div className={checkMismatch()}>MISMATCH!</div>
        </div>
    );
}

export default StatsMiddle;
