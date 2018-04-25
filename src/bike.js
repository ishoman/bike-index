class API {
  makeCall() {
    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = "https://bikeindex.org:443/api/v3/search?page=1&per_page=25&location=IP&distance=10&stolenness=stolen";
      request.onload = function() {
        if (this.status === 300) {  
          let response = resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
    return response;
  }
}

export { API }
