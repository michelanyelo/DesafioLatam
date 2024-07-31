$(function () {
    $.ajax({
        type: "get",
        url: "https://jsonplaceholder.typicode.com/posts",
        dataType: "json",
        success: function (posts) {
            // iteramos sobre los posts
            posts.forEach(post => {
                // generamos un elemento li con los datos del post
                const li = $("<li>").text(post.title);
                // agregamos el elemento li a la lista
                $("#posts").append(li)
            });
        }
    });
})
