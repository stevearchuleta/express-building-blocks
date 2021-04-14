// jquery get() function to write a custom client-side AJAX JavaScript code that communicates with my Express api
// issue a get() request from /blocks endpoint which will return a list of blocks in JSON format
// the return value of the ajax call is passed as an argument to the appendToList() function
// block[i] is the block name.

$(function() {
    
    $.get('/blocks', appendToList);

    function appendToList(blocks){
        var list = [];
        for(var i in blocks) {
            list.push($('<li>', { text: blocks[i] }));
        }
        $('.block-list').append(list);
    }
});