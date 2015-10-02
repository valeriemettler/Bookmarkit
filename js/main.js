var fb = new Firebase('https://boiling-torch-464.firebaseio.com/');
var d = {};
var item;

var getTagUrl = function() {
    $('#bookmarkDiv').on('click', '.taghash', function(event) {
        event.stopPropagation();
        var that = this;
        var current_url_no_hash = that.hash.split('#')[1];
       // var current_url_no_hash = window.location.hash.split('#')[1];
        console.log(current_url_no_hash); //returns tag without hash
    });
};

var display = function() {
    $('#input').keypress(function(e) {
        if (e.keyCode == 13) {
            var url = $('#urlInput').val();
            var text = $('#tagInput').val();

            if (url === "" || text === "") {
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

        // var x = "";
        for (item in d) {
            x = x + '<div class="tag"><a href="#' + item + '" class="taghash">#' + item + '</a></div>';

            for (var i = 0; i < d[item].length; i++) {
                x = x + '<div class="urls"><a href="http://www.' + d[item][i] + '" target="_blank">' + d[item][i] + '</a></div>';
            }
        }
        $("#bookmarkDiv").html(x);
    })
    getTagUrl();
    display();
});