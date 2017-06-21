var onLoad = function(){
  var url = 'https://api.punkapi.com/v2/beers';
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.send();

  request.addEventListener('load', function(){
  var jsonString = request.responseText;
  console.log(jsonString);
  var beers = JSON.parse(jsonString);
  var list = populateList(beers);
  });
}

var populateList = function(beers) {
  var div = document.getElementById('main');

  beers.forEach(function(beer) {
    var li = document.createElement('li');
    var ul = document.createElement('ul');
    var img = document.createElement('img');
    li.innerText = "Beer name: " + beer.name;
    img.src = beer.image_url;
    div.appendChild(li);
    li.appendChild(ul);
    ul.appendChild(img);
  });

  return div;
}


window.addEventListener('load', onLoad);
