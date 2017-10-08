//"use strict";

var menuids = ["hideid", "showid", "searchid", "loginid"];

function bigger(tag, classname) {
  var elems = document.getElementsByTagName(tag);
  console.log(elems.length, elems);
  for(i=0; i < elems.length; i++) {
    console.log("elem:", elems[i]);
    elems[i].setAttribute('class', classname);
  }
}

function toggle(id) {
  var elem = document.getElementById(id);
  if(elem.style.display == "none") {
    elem.style.display = "inline";
  } else {
    elem.style.display = "none";
  }
}

  function toggledown(event) {
//  var elem = document.getElementById(id);
  var elem = event.target;
  console.log("target: ", elem);
    return;

  if(elem.style.display == "none") {
    elem.style.display = "inline";
  } else {
    elem.style.display = "none";
  }
}

  function hideall() {
    menuids.forEach(m => document.getElementById(m).style.display = "none");
  }

function hideloader() {
    let loaders = document.getElementsByClassName("loader");
    for(var i = 0; i < loaders.length; i++) {
        loaders[i].style.display = "none";
    }
  }

function toggletext(event) {

  var elem = event.target;
  console.log("target: ", elem);
    return;

  var elems = document.getElementsByClassName('hidden');
  for(i=0; i < elems.length; i++) {
    console.log("elem:", elems[i]);
    elems[i].setAttribute('visibility', 'visible');
  }
}

function multiple(id) {
      var names = ["Peter", "Ana", "Tom"];
      var element = document.getElementById(id);

      names.forEach(function(name) {
        console.log(name);
        element.innerHTML = names.reverse().join(" ");
      });
}

function insertText(text) {
    var el = document.getElementById('container');
    el.insertAdjacentHTML('beforeend', '<p>' + text + '</p>');
}

function get(filename) {
  let promise = new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        setInterval( () => {
        req.open("GET", filename);
        req.onload = () => {
            if(req.status == 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        };
        req.onerror = () => Error("Error reading file.");
        req.send();
        }, 2000);

    });
    return promise.then( response => JSON.parse(response));
}

(function(){
    get("./data.json").then(
        (result) => {
            console.log(result);
            hideloader();
            result.forEach( t => insertText(t.text));
        },
        (error) => console.log(error));
})();
