var apiUrl = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrBtn = document.querySelector('#xhr');
var fetchBtn = document.querySelector('#fetch');
var axiosBtn = document.querySelector('#axios');

var dispQuotes = document.querySelector("#quotes");

// Making requests with XHR
xhrBtn.addEventListener('click', function() {
    var XHR = new XMLHttpRequest();
    XHR.open('GET',apiUrl);
    XHR.onreadystatechange = function() {
        if(XHR.readyState === 4 && XHR.status === 200) {
            var data = JSON.parse(XHR.responseText)
            dispQuotes.innerText = data[0]
        }
    }
    XHR.send();
})

// Making requests with FETCH
fetchBtn.addEventListener('click', function() {
    fetch(apiUrl)
    .then(function(res) {
        res.json().then(function(data) {
            dispQuotes.innerText = data[0];
        })
    })
    .catch(function(err) {
        console.log(err)
    })
});

// Making requests with JQUERY
$('#jquery').click(function() {
    $.getJSON(apiUrl)
    .done(function(data) {
        $('#quotes').text(data[0])
    })
    .fail(function(err) {
        console.log(err)
    })
});

// Making requests with AXIOS
axiosBtn.addEventListener('click', function() {
    axios.get(apiUrl)
    .then(res => {
        var data = res.data[0];
        dispQuotes.innerText = data;
    })
    .catch(function(err) {
        console.log(err)
    })
})