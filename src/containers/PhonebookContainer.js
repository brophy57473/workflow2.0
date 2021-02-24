import React from 'react';
import { Link } from 'react-router-dom';
import NewPharm from '../components/NewPharm';
import SeePharm from '../components/SeePharm';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           addPharm: false, 
            data: []
        }
        this.addPharmacy = this.addPharmacy.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }

    toggleForm () {
        this.setState(this.state.addPharm ? {addPharm: false} : {addPharm: true});
    }

    addPharmacy(event) {
        event.preventDefault();
        let name = document.getElementById('name').value;
        const location = document.getElementById('location').value;
        const city = document.getElementById('city').value;
        const phone = document.getElementById('phone').value;
        const time = Date.now();

        if (name === 'Other') {
            name = document.getElementById('add-name').value;
        }

        if (name && location) {
            console.log('almost done');
        }
  
        // instantiate a headers object
        var myHeaders = new Headers();
        // add content type header to object
        myHeaders.append("Content-Type", "application/json");
        // using built in JSON utility package turn object to string and store in a variable
        var raw = JSON.stringify({
            "name":name,
            "address":location,
            "city":city,
            "phone":phone,
            "num":time
          });
          console.log(raw);
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        // make API call with parameters and use promises to get response   
        fetch("https://i0rt8ejqqf.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
        .then(response => response.text())
        .then(result => alert(result))
        .catch(error => console.log('error', error));
    

        this.toggleForm();
        this.componentDidMount();
  
    }

    componentDidMount (event) {
        //const name = event.target.innerHTML;
        var myHeaders = new Headers();
        // create a JSON object with parameters for API call and store in a variable
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
        };
        // make API call with parameters and use promises to get response
        fetch("https://i0rt8ejqqf.execute-api.us-west-2.amazonaws.com/dev", requestOptions)
        .then(response => response.json())
        .then(result => {
            this.setState({data: result.Items});
        })
        .catch(error => console.log('error', error));

    }

    render() {
        return (
            <div className="main">
            {!this.state.addPharm && <div className='add-pharm-button-container'><button onClick={this.toggleForm}>Add Pharmacy</button></div>}
            {this.state.addPharm && <NewPharm addPharmacy={this.addPharmacy} toggleForm={this.toggleForm}/>}
            <SeePharm data={this.state.data}/>
                
        
            </div>
        );
    }
}

export default Home;