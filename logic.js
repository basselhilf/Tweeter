  const Tweeter = function () {
    let _posts = [
        {
            text: "First post!",
            id: "p1",
            comments: [
                { id: "c1", text: "First comment on first post!" },
                { id: "c2", text: "Second comment on first post!!" },
                { id: "c3", text: "Third comment on first post!!!" }
            ]
        },
        {
            text: "Aw man, I wanted to be first",
            id: "p2",
            comments: [
                { id: "c4", text: "Don't wory second poster, you'll be first one day." },
                { id: "c5", text: "Yeah, believe in yourself!" },
                { id: "c6", text: "Haha second place what a joke." }
            ]
        }
    ]
    let postIdCounter = 2
    let commentIdCounter = 6

    const getPosts = function () {
        return _posts
    }
    const addPost = function (str) {
        postIdCounter++
        let newPost = {
            text: str,
            id: "p" + postIdCounter.toString(),
            comments: []
        }
        _posts.push(newPost)
    }
    const removePost = function (postId) {
        for(let post in _posts){
            if(_posts[post].id == postId){
                _posts.splice(post, 1)
            }
        }
    }
    const addComment = function(txt,postId){
        commentIdCounter++
        let newComments = {
            id: "c" + commentIdCounter.toString(),
            text: txt
           
        } 
        for(let post of _posts){
            if(postId == post.id){
                post.comments.push(newComments)
            }
        }
    }
    const removeComment = function(postId,commentID){
        for(let post of _posts){
            if(postId == post.id){
                for(let comment in post.comments){
                    if(commentID == post.comments[comment].id){
                        post.comments.splice(comment, 1)
                    }
                }
            }
        }
    }
    return {
        addPost: addPost,
        removePost: removePost,
        getPosts: getPosts,
        addComment:addComment,
        removeComment:removeComment
    }
}
// const tweeter = Tweeter()
// tweeter.addPost("This is my own post!")
// console.log(tweeter.getPosts())
// //This should be added to the posts array:
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.removePost("p1")
// console.log(tweeter.getPosts())
// //There should only be two posts in the post's array:
// //{text: "Aw man, I wanted to be first", id: "p2", comments: Array(3)}
// //{text: "This is my own post!", id: "p3", comments: []}

// tweeter.addComment("Damn straight it is!", "p3")
// tweeter.addComment("Second the best!", "p2")
// console.log(tweeter.getPosts())
// //This should be added to the third post's comments array:
// //{id: "c7", text: "Damn straight it is!"}

// //This should be added to the second post's comments array:
// //{id: "c8", text: "Second the best!"}

// tweeter.removeComment("p2", "c6")
// console.log(tweeter.getPosts())
// //This comment should be removed:
// //{id: "c6", text: "Haha second place what a joke."}