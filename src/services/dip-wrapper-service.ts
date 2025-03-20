
const axios = require('axios').default;

//call dip - DIP wrapper
//wait for answer from DIP 201 accepted
//fetch data every 5 secs
//get tx and send back to ascon

var username = 'batterypass.dev.api@arxum.app';
var password = 'batterypass.dev.api@arxum.app2023now';

export class DIPWrapperService {

    constructor(){}

    //function: When a new battery comes into the process, it will be announced on Topic 5155 (BatteryService). 
    login() {
        axios.post('https://battery-pass.dev.arxum.app/suite/api/login', {
            email: username,
            password: password
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }
  }
