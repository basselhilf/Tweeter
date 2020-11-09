const tweeter = Tweeter()
const renderer = Renderer()

const post = function () {
    const getTweet = $('#input').val()
    if(getTweet=="") return
    tweeter.addPost(getTweet)
    $('input').val(' ')
    renderer.renderPosts(tweeter.getPosts())
}

$('#posts').on('click', '.remove', function () {
    const postId = ($(this).parent().parent().data().id)
    const commentId = ($(this).data().id)
    tweeter.removeComment(postId, commentId)
    renderer.renderPosts(tweeter.getPosts())
})

$('#posts').on('click', '.submitBtn', function () {
    const postId = ($(this).parent().parent().data().id)
    const getComment = $(`#txt${postId}`).val()
    tweeter.addComment(getComment, postId)
    renderer.renderPosts(tweeter.getPosts())
})
$('#posts').on('click', '.deleteBtn', function () {
    const postId = $(this).parent().data().id
    tweeter.removePost(postId)
    renderer.renderPosts(tweeter.getPosts())
})
renderer.renderPosts(tweeter.getPosts())






