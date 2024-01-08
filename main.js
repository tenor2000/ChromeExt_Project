var contents = $('#content');
const contentsParent = contents.parent()
contents.remove();

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

var text = $('<p>').text('Get back to achieving your coding dreams!');  

$.ajax({
    method: 'GET',
    url: 'https://picsum.photos/list',
    success: function(result) {
     // result is whatever the URL sends back from the request
        var randnum = Math.floor(getRandomArbitrary(0, result.length));
        var image = $('<img>', {
            src: `https://picsum.photos/id/${randnum}/1200/800`,
            alt: 'Image Alt Text'
        })
        text.addClass('beautText');
        contentsParent.prepend(image);
        contentsParent.prepend(text);
    },
    error: function(err) {
     // if any errors occur during the process you can check out the
     // the error by logging the 'err' argument
        console.log(err)
    }
});