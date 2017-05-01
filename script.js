$(document).ready(function(){

    $.get('https://www.reddit.com/r/FoodPorn/.json').done(function(response) {
      console.log(response.data.children[0].data);
      var children = response.data.children;
      $(children).each(function(e){
        var title = response.data.children[e].data.title;
        var thumbnail = response.data.children[e].data.thumbnail;
        var author = response.data.children[e].data.author;
        var date = response.data.children[e].data.created;
        console.log(thumbnail);
        console.log(title);
        console.log(author);
        console.log(date);
        $('body').append('<div><h3>' + author + '</h3><h4>' + title + '<p>' + date + '<p></h4><img src=' + thumbnail + '></div>');
      });
    });
});
