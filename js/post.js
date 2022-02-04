let hash = location.hash
let id = hash.slice(1)
let openingPost = document.getElementById('openingPost')

function myPost(){
    openingPost.innerHTML = ''

    fetch('../data.json')
    .then(data => data.json())
    .then(posts => {
        posts.map(post =>{
            if(post.id == id){
                openingPost.innerHTML += `
                <div class="post">
                    <div class="postImg">
                        <img src="../images/sectionImg/${post.image}">
                    </div>
                    <div class="postInfo">
                        <h3 class="postTitle">${post.title}</h3>
                        <p class="postDescr">${post.descr}</p>
                    </div>
                </div>
                
                `
            }
        })
    })
}
myPost()