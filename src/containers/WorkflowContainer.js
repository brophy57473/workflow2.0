import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useBarcode } from 'react-barcodes';

import Barcodes from '../components/Barcodes';

function WorkflowContainer() {
    const [ code, setCode ] = useState('');

    const { inputRef } = useBarcode({
        value: code ? code : 'c' ,
        options: {
          background: 'white',
          displayValue: false,
          height: 80,
          width: 4,
          margin: 20
        }
      });

    useEffect(() => {
        const screenHeight = window.screen.height;
        const instrHeight = document.getElementById('workflow-instructions').offsetHeight;
        let heightTotal = screenHeight - (instrHeight + 240);
        document.getElementById('C').style.height = heightTotal + 'px';
    }, [])
      
    function touchStart(event) {
        const letter = event.target.id;
        let box = document.getElementById('bc-box');
        let changeCode = async () => {setCode(letter)};
        changeCode().then(box.style.display = 'flex');

        if (event.target.id === 'SA') {
            setTimeout( () => {
                setCode('L');
                setTimeout( () => {
                    box.style.display = 'none';
                }, 500);
            }, 500);
            return;
        }

        setTimeout( () => {
            box.style.display = 'none';
        }, 500);
    }


    return (
        <div className="main">
            <div id="bc-box">
                <img ref={inputRef} />
            </div>
        <Barcodes 
        touchStart={touchStart}/>
        </div>
    );
    
}

export default WorkflowContainer;