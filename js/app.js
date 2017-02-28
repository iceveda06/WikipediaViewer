//  GOAL: 

//  1.  Search Wikipedia entries in a search box 
//  and see the resulting Wikipedia entries
// 		a.  Here is Wikipedia API:  https://www.mediawiki.org/wiki/API:Main_page

// 2.  Click on a button to see random Wikipedia entries   ***DONE
// 		a. https://en.wikipedia.org/wiki/Special:Random gives you 
// 		random Wikipedia site


// use: https://en.wikipedia.org/wiki/Special:ApiSandbox#action=query&format=json&list=search&utf8=1&srsearch=Albert+Einstein
//https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=galatasaray&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max
// save the search input into variable and create a url

// collect the result in an array/object then loop through them to append to DOM
var value = "";
var snippet = "";
$(document).ready(function() {
    //Get city name
    var form = document.getElementById('searchForm');
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent normal form submission
        var value = document.getElementById('search').value;
        // console.log(value);
        var urli = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrsearch=" + value + '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max' + '&callback=?'
        console.log(urli);
       
        $.getJSON("https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch=" + value + '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max' + '&callback=?', function(locate) {
//            var liToAppend = "";
//            console.log(value);
//            for (var i = 0; i < locate.query.pages.pageid[i].length; i++) {
//            // snippet = locate.query.search[i].snippet;
//            liToAppend += '<li id = "list"' + (i) + '">' + locate.query.pageid[i].extract + '</li>';
//
//          }
//          $("p").html(liToAppend);
            console.log(locate.query.pages.404787['extract']);
            
    });
});
$("button").click(function(){
    	window.open(["https://en.wikipedia.org/wiki/Special:Random"]);
    });
});
