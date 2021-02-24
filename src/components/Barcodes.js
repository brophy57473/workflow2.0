function Barcodes(props) {
    return (
    <div>
        <div id='workflow-instructions' className="instructions">
            <h2>Pick which barcode you would like to display</h2>
            <h4>C - use to complete</h4>
            <h4>X - use to dismiss windows</h4>
            <h4>SA - use to assign 'Large' in waiting bin</h4>
            <h6 className='detail'>this will display two barcodes - you will have to hit enter</h6> 
        </div>

        <div className="grid-container" id='grid-container'>
            <div className="option c" id='C' onTouchStart={props.touchStart} onClick={props.touchStart}>C</div>
            <div className="option x" id='X' onTouchStart={props.touchStart} onClick={props.touchStart}>X</div>
            <div className="option sa" id='SA' onTouchStart={props.touchStart} onClick={props.touchStart}>SA</div>
        </div> 
    </div>
    )
}

export default Barcodes;