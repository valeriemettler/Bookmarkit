var fb = new Firebase('https://boiling-torch-464.firebaseio.com/');
var d = {};
var item;

//

function displayCurrentTag() {
    var current_tag = window.location.hash.split('#')[1];
    displayTag(current_tag);
}
window.onhashchange = displayCurrentTag;

// var displayAll = function() {
//     $('.all').on('click', function(event) {
//         event.stopPropagation();
//         console.log("hey!!");
//          var x = "";

//         for (item in d) {
//             x = x + '<div class="tag"><a href="#' + item + '" class="taghash">#' + item + '</a></div>';

//             for (var i = 0; i < d[item].length; i++) {
//                 x = x + '<div class="urls"><a href="http://www.' + d[item][i] + '" target="_blank">' + d[item][i] + '</a></div>';
//             }
//         }
//         $("#bookmarkDiv").html(x);

//     });
// };

var displayTag = function(current_tag) {
    console.log(current_tag);
    if (current_tag === undefined) {
        var x = "";

        for (item in d) {
            x = x + '<div class="tag"><a href="#' + item + '" class="taghash">#' + item + '</a></div>';

            for (var i = 0; i < d[item].length; i++) {
                x = x + '<div class="urls"><a href="http://www.' + d[item][i] + '" target="_blank">' + d[item][i] + '</a></div>';
            }
        }
    } else {

        var x = "";

        x = x + '<div class="tag">#' + current_tag + '</div>';

        for (var i = 0; i < d[current_tag].length; i++) {
            x = x + '<div class="urls"><a href="http://www.' + d[current_tag][i] + '" target="_blank">' + d[current_tag][i] + '</a></div>';
        }
    }

    $("#bookmarkDiv").html(x);

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

        for (item in d) {
            x = x + '<div class="tag"><a href="#' + item + '" class="taghash">#' + item + '</a></div>';

            for (var i = 0; i < d[item].length; i++) {
                x = x + '<div class="urls"><a href="http://www.' + d[item][i] + '" target="_blank">' + d[item][i] + '</a></div>';
            }
        }
        $("#bookmarkDiv").html(x);
    })
    //displayAll();
    display();
});