function library() {
    this.http = new XMLHttpRequest();
}


// GET Request

library.prototype.get = function(url)  {

    this.http.open('GET',url,true);

    this.http.onload = () => {
        if(this.http.status === 200){
            return this.http.responseText;
        }
    }


    this.http.send();
}


// POST Request
// PUT Request
// DELETE Request