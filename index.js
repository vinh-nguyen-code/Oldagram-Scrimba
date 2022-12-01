import {postsData} from './data.js'

const likeBtn = document.getElementsByClassName("like-btn")
const likesCount = document.getElementsByClassName("likes-count")


/* Get feed from the data.js */
function getFeedHtml(){
    let feedHtml =``
    postsData.forEach(function(post){
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
                        <img src="images/icon-heart.png" class ="icon like-btn" onclick="this.src='images/instagram-heart.png'" data-like = '${post.id}'>
                        <img src="images/icon-comment.png" class ="icon">
                        <img src="images/icon-dm.png" class ="icon">
                    </div>
                    <div class ="post-details">
                        <p class ="likes strong-text likes-count">${post.likes} likes</p>
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



/* Add 1 like when clicking the Like button
for (let j = 0; j < posts.length;j++){
    likeBtn[j].addEventListener("click", function() {
        let addLike = posts[j].likes +1 
        likesCount[j].textContent = 
            `
            ${addLike} likes
            `
    })
}
 */

/* Add 1 like when clicking the Like button */

document.addEventListener('click', function(e){ 
    if(e.target.dataset.like){
        addLike(e.target.dataset.like)
    }
})

function addLike(postId){
    const targetPostObj = postsData.filter(function(post){
        return post.id === postId
    })[0]
    alert(targetPostObj)
    
}