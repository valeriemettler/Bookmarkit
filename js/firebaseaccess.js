var fb = new Firebase('https://boiling-torch-464.firebaseio.com/');
var i = 0;
var d = {};

$(document).ready(function(){
  fb.on('child_added', function(item){

    var text = item.val()['text'];
    var url = item.val()['url'];
    if (text in d){
        d[text].push(url);
    } else {
        d[text] = [url];
    }
    i += 1;

  });
  setTimeout(function() {
    var item;
    for (item in d){
        console.log(item); //this is the key in the dictionary
//        console.log(d[item]);  this is the array of key

    for (var i = 0; i < d[item].length; i++){
        console.log("  " + d[item][i]); //this iterates throught the array of urls
    }
    }
  }, 2000);
});
