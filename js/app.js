//  GOAL:

//  1.  Search Wikipedia entries in a search box
//  and see the resulting Wikipedia entries
// 		a.  Here is Wikipedia API:  https://www.mediawiki.org/wiki/API:Main_page

// 2.  Click on a button to see random Wikipedia entries   ***DONE
// 		a. https://en.wikipedia.org/wiki/Special:Random gives you
// 		random Wikipedia site

/* TODO
clear search box - put an x
put random icon and search icon next to search box - remove submit
show past history - past 5
*/

var value = "";
var snippet = [];
var divsToAppend = "";
var titleToAppend = "";
var searchWord = "";

$(document).ready(function() {
    //Get city name
    $(".glyphicon-search").on("click", function(e) {
        e.preventDefault(); // Prevent normal form submission
        var value = $('#search').val();
        var urli = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + value + '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&indexpageids=' + '&callback=?';
            $.getJSON("https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + value + '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&indexpageids=' + '&callback=?', function(locate) {
                var snippet = locate.query["pageids"];
                    for (var i = 0; i < snippet.length; i++) {
                    divsToAppend += '<a target="_blank" href = https://en.wikipedia.org/?curid=' + snippet[i] + '>' + '<div class = "result' + /*(i) +*/ '">' + '<span class="title">' + locate.query.pages[snippet[i]].title + '</span>' + '<br>' + '<br>' + '<li id = "list' + (i) + '">' + locate.query.pages[snippet[i]]["extract"] + '</li>' + '</a>' + '</div>';
                    }
                $("#results").html(divsToAppend);
            });
                // $("#results").html(divsToAppend);

    });

    $(".glyphicon-random").click(function() {
        window.open(["https://en.wikipedia.org/wiki/Special:Random"]);
    });

    //erase search term when clicked on Search Box
    $("input[type='text']").mousedown(function(event){
        $(this).val("");
        $("#results").html("");
    })

});
