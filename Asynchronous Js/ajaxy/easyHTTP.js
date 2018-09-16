function easyHTTP() {
    this.http = new XMLHttpRequest();
}



easyHTTP.prototype.get = function(url, callback) {

    this.http.open('GET', url, true);
    let self = this;
    this.http.onload = function() {
        if (self.http.status === 200) {
            // console.log(self.http.responseText);
            callback(null, self.http.responseText);

        } else {
            console.log('error ' + this.http.status);

        }
    }

    this.http.send();
}