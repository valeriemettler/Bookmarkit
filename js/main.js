var myDataRef = new Firebase('https://boiling-torch-464.firebaseio.com/');
  $('#tagInput').keypress(function (e) {
    //console.log(e.keyCode);
    if (e.keyCode == 13) {  //13 is the keycode for enter
      var url = $('#urlInput').val();
      var text = $('#tagInput').val();
      myDataRef.push({url: url, text: text});
      $('#tagInput').val('');
      $('#urlInput').focus().val('');
    }
});

myDataRef.on('child_added', function(snapshot) {
  var bookmark = snapshot.val();
  displayBookmark(bookmark.url, bookmark.text);
});

function displayBookmark(url, text) {
  var x = "";
  x = x + '<div><a href="http://www.' + url
  + '" target="_blank">' + url + '</a> #' + text + '</div>';
  $("#bookmarkDiv").append(x);
};
