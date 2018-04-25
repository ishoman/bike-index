class API {

  makeCall(displayResult, displayError) {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=100&manufacturer=trek&location=IP&distance=10&stolenness=stolen";
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    promise.then(function(response) {
      const body = JSON.parse(response);
      console.log(body);
      displayResult(body);
  }, function(error) {
    displayError(error);
    });
  }
}

export { API };
