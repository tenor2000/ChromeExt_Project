var contents = $('#content');
const contentsParent = contents.parent()
contents.remove();

var text = $('<p>').text('Get back to achieving your coding dreams!');
var image = $('<img>', {
    src: 'https://img.freepik.com/free-vector/page-found-concept-illustration_114360-1869.jpg?size=626&ext=jpg',
    alt: 'Image Alt Text'
})

$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: function(result) {
     // result is whatever the URL sends back from the request
        console.log(result);
    },
    error: function(err) {
     // if any errors occur during the process you can check out the
     // the error by logging the 'err' argument
    }
  });
text.addClass('beautText');
contentsParent.prepend(image);
contentsParent.prepend(text);

