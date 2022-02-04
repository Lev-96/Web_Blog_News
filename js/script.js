let postsSection = document.getElementById('posts')

function getData(){
    postsSection.innerHTML = ''

    fetch('data.json')
    .then(data => data.json())
    .then(posts => {
        posts.map(post => {
            let title = post.title.substring(0,10)
            let descr = post.descr.substring(0,90)

            postsSection.innerHTML +=`
                    <div class="post">
                        <div class="postImg">
                            <img src="./images/sectionImg/${post.image}">
                        </div>
                        <div class="postInfo">
                            <h3 class="postTitle">${title} ...</h3>
                            <p class="postDescr">${descr} ...</p>
                            <a href="../post/post.html#${post.id}">Read more</a>
                        </div>
                    </div>
            `
        })
    })
}


function getNew(world){
    postsSection.innerHTML = ''

    fetch('data.json')
    .then(data => data.json())
    .then(posts => {
        posts.map(post => {

            if(post.category == world){

                let title = post.title.substring(0, 10)
                let descr = post.descr.substring(0, 90)

                postsSection.innerHTML += `
                        <div class="post">
                            <div class="postImg">
                                <img src="./images/sectionImg/${post.image}">
                            </div>
                            <div class="postInfo">
                                <h3 class="postTitle">${title} ...</h3>
                                <p class="postDescr">${descr} ...</p>
                                <a href="../post/post.html#${post.id}">Read more</a>
                            </div>
                        </div>
                `
            }
        })
    })
}


function plaseSearch(serch){
    postsSection.innerHTML = ''

    fetch('data.json')
    .then(data => data.json())
    .then(posts => {
        posts.map(post=> {
            if(post.title.includes(serch.value)){
                let title = post.title.substring(0, 10)
                let descr = post.descr.substring(0, 90)

                postsSection.innerHTML += `
                        <div class="post">
                            <div class="postImg">
                                <img src="./images/sectionImg/${post.image}">
                            </div>
                            <div class="postInfo">
                                <h3 class="postTitle">${title} ...</h3>
                                <p class="postDescr">${descr} ...</p>
                                <a href="../post/post.html#${post.id}">Read more</a>
                            </div>
                        </div>
                `
            }
        })
    })

}
getData()