var onLoad = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener('load', function(){
  var jsonString = request.responseText;
  console.log(jsonString);
  var beers = JSON.parse(jsonString);
  
});
}

window.addEventListener('load', onLoad);
