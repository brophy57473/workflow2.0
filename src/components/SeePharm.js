import React,{ useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown,faAngleRight } from '@fortawesome/free-solid-svg-icons'

function SeePharm(props) {
  const [ items, setItems ] = useState([]);
  const [ view, setView ] = useState(false);

  let data = props.data.sort((a,b) => { return a.Name - b.Name});

  function seePharmacies(event) {
    const pharm = event.target;
    const options = ['Rite Aid',"Walgreen's",'Costco','Meijer'];
    let selected = document.querySelector('.selected');
    if (selected) {
      selected.classList.remove('selected');
    }
    pharm.classList.add('selected');
    const name = pharm.innerHTML;
    if (name !== 'Other') { 
      let newItems = (props.data.filter((pharm) => pharm.Name === name));
      setItems(newItems); 
    } else {
      let newItems = (props.data.filter((pharm) => options.findIndex((option) => option === pharm.Name) === -1));
      setItems(newItems);
    }
  }

  function showNumber(num) {
    let phoneNum = document.getElementById(num);
    if (window.getComputedStyle(phoneNum).display === 'none') {
      phoneNum.style.display = 'block';
    } else {
      phoneNum.style.display = 'none';
    }
  }
  
  
    return (
      <div className='phonebook-container'>
        <h6 className='phone-instructions'>Select a chain then tap a location to see phone number</h6>
      <div className="pharms">
        
          <div onClick={seePharmacies}>Walgreen's</div>
          <div onClick={seePharmacies}>Costco</div>
          <div onClick={seePharmacies}>Meijer</div>
          <div onClick={seePharmacies}>Rite Aid</div>
          <div onClick={seePharmacies}>Other</div>
      </div>
      <ul  id='phone-list'>
        <li className='headers'>
          <div className="pharm-info top-row" >
            <p className='info-item pharm-name'>Name</p>
            <p className='info-item pharm-address'>Address</p>
            <p className='info-item pharm-city'>City</p>
          </div>
        </li>
        {items.length ? items.map((pharm) => (
        <li onClick={() => showNumber(pharm.ID)} key={pharm.ID}>
          <div className="pharm-info" >
            <div className='icon closed'><FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon></div>
            <div className='icon open'><FontAwesomeIcon icon={faAngleDown}></FontAwesomeIcon></div>
            <p className='info-item pharm-name'>{pharm.Name}</p>
            <p className='info-item pharm-address'>{pharm.Address}</p>
            <p className='info-item pharm-city'>{pharm.City}</p>
          </div>
          <div className='phone-number' id={pharm.ID}>
            ({pharm.Phone.substring(0,3)})-
            {pharm.Phone.substring(3,6)}- 
            {pharm.Phone.substring(6,10)}           
            </div>
        </li>
        )) : <li>Please click button</li>}
        </ul>
      </div>
    );
  }
  
  export default SeePharm;
  