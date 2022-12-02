import {postsData} from './data.js'


/* Get feed data from the data.js */
function getFeedHtml(){
    let feedHtml =``
    postsData.forEach(function(post){
        
        //if the post is liked, change the like button class to Liked (check index.css file)
        let likeIconClass = ''
        if (post.isLiked){
            likeIconClass = 'liked' 
        }

        //generate Html feed
        feedHtml += 
            `
            <section class = "post-container">
                <section class ="user-details">
                    <img src="${post.avatar}" class ="user-avatar">
                    <div>
                        <p class = "name strong-text">${post.name}</p>
                        <p class = "location">${post.location}</p>
                    </div>        
                </section>
                <section>
                    <img src = "${post.post}" class = "post-image">
                    <div>
                        <img src="images/icon-heart.png" class ="icon ${likeIconClass}" id="like-btn" data-like = '${post.id}'>
                        <img src="images/icon-comment.png" class ="icon">
                        <img src="images/icon-dm.png" class ="icon">
                    </div>
                    <div class ="post-details">
                        <p class ="likes strong-text">${post.likes} likes</p>
                        <p> <strong>${post.username}</strong> ${post.comment}</p>
                    </div>
                </section>           
            </section>
            `
    })

    return feedHtml
}

/* Render out feed */
function renderFeedHtml(){
    document.getElementById("main-el").innerHTML = getFeedHtml()
}
renderFeedHtml()



/* Add 1 like when clicking the Like button and decrement when clicking again this button */

//add event listener to the like button
document.addEventListener('click', function(e){ 
    if(e.target.dataset.like){
        addLike(e.target.dataset.like)
    }
})


function addLike(postId){
    const targetPostObj = postsData.filter(function(post){
        return post.id == postId //when clicking in a like button in a Post, match the Id of this post with the id in the data.js file
    })[0]

    if (targetPostObj.isLiked) {
        targetPostObj.likes --     //If the button is already liked: decrease by 1 like when it is clicked 
    } else { 
        targetPostObj.likes ++     // If the button is not already liked: increase by 1 like when it is clicked
    }
    targetPostObj.isLiked = !targetPostObj.isLiked // Flip the boolean everytime the button is clicked
    renderFeedHtml() // Re-render the Feed with the updated number of likes after clicking in the button
}


