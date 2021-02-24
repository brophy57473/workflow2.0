import { useState } from 'react';

function NewPharm(props) {
  const [ input, setInput ] = useState(false);

  function addInput(event) {
    if (event.target.value === 'Other') {
      setInput(true);
    } else {
      setInput(false);
    }
  }

  return (
    <div className="add-form-container">
        <form onSubmit={props.addPharmacy}>
            <div className='form-element'>
              <label>*Pharmacy:</label>
              <select type="text" id="name" required onChange={addInput}>
                <option value="Walgreen's">Walgreen's</option>
                <option value="Rite Aid">Rite Aid</option>
                <option value="Costco">Costco</option>
                <option value="Meijer">Meijer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            { input && <div className='form-element'>
              <label>*Add Name:</label>
              <input type="text" id="add-name" pattern="[a-zA-Z0-9 ]{3,30}" required/>
\            </div> }
            <div className='form-element'>
              <label>*Location:</label>
              <input type="text" id="location" pattern="[a-zA-Z0-9 ]{5,30}" required/>
              <h6>Address or Intersection</h6>
            </div>
            <div className='form-element'>
              <label>*City:</label>
              <input type="text" id="city" pattern='[a-zA-Z0-9 ]{1,20}' required/>
            </div>
            <div className='form-element'>
              <label>*Phone</label>
              <input type="tel" id="phone" required pattern='[0-9]{10}' required/>
              <h6>Enter 10 digits (e.g. 1231231234)</h6>
            </div>
            <div className='form-element form-buttons'>
              <button type="submit" id="add-pharmacy-button">Add Pharmacy</button>
              <button type="button" onClick={props.toggleForm}>Cancel</button>
            </div>
        </form>
    </div>
  );
}

export default NewPharm;
