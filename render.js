const Renderer = function () {
    const renderPosts = function (posts) {
        $("#posts").empty()
        for (let post of posts) {
            let newPostId = post.id
            const postBox = $("<div class='pcon' data-id="+ `${newPostId}` + "> <h1>" + post.text + "</h1></div>")
            $("#posts").append(postBox)
            let newDiv = $("<div></div>")
            $(`div[data-id=${newPostId}]`).append(newDiv)
            for (let comment of post.comments) {
                let newCmtId = comment.id
                $(newDiv).append("<span class='remove' data-id=" + `${newCmtId}` + ">X</span> <span><h4 >" + comment.text + "</h4></span><br>")
            }
            $(newDiv).append("<input type='text' class='Ipt' id="+'txt'+`${newPostId}`+"></input>")
            $(newDiv).append("<button class='submitBtn'>Comment</button>")
            $(`div[data-id=${newPostId}]`).append("<button class='deleteBtn'>Delete Post </button> ")
        }
    }
    return { renderPosts: renderPosts }
}


