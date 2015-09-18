var fb = new Firebase('https://boiling-torch-464.firebaseio.com/');
var d = {};
var item;

$(document).ready(function() {
    fb.on('child_added', function(item) {
        var text = item.val()['text'];
        var url = item.val()['url'];

        if (text in d) {
            d[text].push(url);
        } else {
            d[text] = [url];
        }

        var x = "";

         var x = "";
        for (item in d) {
            x = x + '<div class="tag">#' + item + '</div>';

            for (var i = 0; i < d[item].length; i++) {
                x = x + '<div class="urls"><a href="http://www.' + d[item][i]
                + '" target="_blank">' + d[item][i] + '</a></div>';
            }
        }
        $("#bookmarkDiv").html(x);
    })

    var display = function() {
        $('#input').keypress(function(e) {
            if (e.keyCode == 13) {
                var url = $('#urlInput').val();
                var text = $('#tagInput').val();

                if (url === "" || text === ""){
                    return;
                }

                fb.push({
                    url: url,
                    text: text
                });

                if (text in d) {
                    d[text].push(url);
                } else {
                    d[text] = [url];
                }

                $('#tagInput').val('');
                $('#urlInput').focus().val('');
          }
        });
    };
    display();
});
