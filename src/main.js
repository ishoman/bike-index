// import { } from './backend.js'; //ANY FUNCTIONS YOU ARE IMPORTING
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './bike.js';

let displayResult = function(body) {
  $("ul#bikeinfo").append(`<li>${body.bikes}</li>`);
}
let displayError = function(error) {
  $("#bikeinfo").text(`There was an error processing your request: ${error.message}`);
}

$(document).ready(function() {
  let api = new API();
  api.makeCall(displayResult, displayError);

  // let promise = new Promise(function(resolve, reject) {
  //   let request = new XMLHttpRequest();
  //   let url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen";
  //   request.onload = function() {
  //     if (this.status === 200) {
  //       resolve(request.response);
  //     } else {
  //       reject(Error(request.statusText));
  //     }
  //   }
  //   request.open("GET", url, true);
  //   request.send();
  // });
});
