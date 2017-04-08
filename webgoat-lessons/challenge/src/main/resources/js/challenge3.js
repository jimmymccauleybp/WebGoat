$(document).ready(function () {
    $("#postComment").on("click", function () {
        var commentInput = $("#commentInput").val();
        $.ajax({
            type: 'POST',
            url: 'challenge/3',
            data: JSON.stringify ({comment: commentInput}),
            contentType: "application/json",
            dataType: 'json'
        });
    })

    var html = '<li class="comment">' +
        '<div class="pull-left">' +
        '<img class="avatar" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="avatar"/>' +
        '</div>' +
        '<div class="comment-body">' +
        '<div class="comment-heading">' +
        '<h4 class="user">USER</h4>' +
        '<h5 class="time">DATETIME</h5>' +
        '</div>' +
        '<p>COMMENT</p>' +
        '</div>' +
        '</li>';

    $.get("challenge/3", function (result, status) {
        for (var i = 0; i < result.length; i++) {
            var comment = html.replace('USER', result[i].user);
            comment = comment.replace('DATETIME', result[i].dateTime);
            comment = comment.replace('COMMENT', result[i].comment);
            $("#list").append(comment);
        }

    });
})