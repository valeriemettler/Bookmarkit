var urlList = {};

var myDataRef = new Firebase('https://boiling-torch-464.firebaseio.com/');
  $('#tagInput').keypress(function (e) {
    //console.log(e.keyCode);
    if (e.keyCode == 13) {  //13 is the keycode for enter
      var url = $('#urlInput').val();
      var text = $('#tagInput').val();
      myDataRef.push({url: url, text: text});
      //console.log(myDataRef["-Jz8AiW4LbgaC0_CfMDq"]);

            //   if (text in urlList) {
            //     urlList[text].push(url);
            // } else {
            //     urlList[text] = [url];
            // }

            // var x = "";
            //     for (var name in urlList) {
            //         x = x + '<div><br><div>#' + name + '</div>';

            //     for (var i = 0; i < urlList[name].length; i++) {
            //         //console.log(urlList[name].length);
            //         x = x + '<li><a href="#">' + urlList[name][i] + '</a></li></div>';

            //     }
            // }
            // $("#bookmarkDiv").html(x);
            //
            //displayBookmark(bookmark.url, bookmark.text);
            location.reload();
            $('#tagInput').val('');
            //console.log(urlList);
        }
    });


myDataRef.on('child_added', function(snapshot) {
  var bookmark = snapshot.val();
  displayBookmarks(bookmark.url, bookmark.text);
});

// function displayBookmark(url, text) {
//   var x = "";
//   x = x + '<div><a href="http://www.' + url
//   + '" target="_blank">' + url + '</a> #' + text + '</div>';
//   $("#bookmarkDiv").append(x);
// };

var displayBookmarks = function(url, text) {
   $('#urlInput').focus().val('');
    // $('#bookmarkDiv').html("");
    // for (var name in urlList) {
    //     for (var i = 0; i < urlList[name].length; i++) {
            var x = "";
            // for (var name in urlList) {
                x = x + '<div><br><div>#' + text + '</div>';

                // for (var i = 0; i < urlList[name].length; i++) {
                    //console.log(urlList[name].length);
                    x = x + '<div><a href="http://www.' + url
                    + '" target="_blank">'+ url+ '</a></div></div>';
                   $("#bookmarkDiv").append(x);
        //         }

        //     }

        // }
    }


//displayAll();
