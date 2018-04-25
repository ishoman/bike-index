// import { } from './backend.js'; //ANY FUNCTIONS YOU ARE IMPORTING
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { API } from './bike.js'
$(document).ready(function() {
  let api = new API();
  let promise = api.makeCall();
  console.log(promise);
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

  promise.then(function(response) {
    const body = JSON.parse(response);
    console.log(body.bikes[18]);
    $("ul#bikeinfo").append(`<li>${body.bikes[0]}</li>`);
  }, function(error) {
    $("#bikeinfo").text(`There was an error processing your request: ${error.message}`);
  });
});
