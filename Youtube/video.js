async function videoMANAGER(url,data){
    try{
        url = await fetch("videos.json")
        data = await url.json()
        console.log(data)
        for(let i = 0 ; i<data.length ; i++){
            console.log(i)
            let create = document.createElement('div')
            create.setAttribute('class' , 'create')
               
            let content = document.querySelector('.content')
            content.append(create)
            let anchorVideo = document.createElement('a')
            anchorVideo.setAttribute('href' , `pages/mainVideo${i}.html`)
            create.appendChild(anchorVideo)
            
            let video = document.createElement('video')
            anchorVideo.appendChild(video)
            video.setAttribute("src" , `${data[i].videoSrc}`)

            let videoContent = document.createElement('div')
            create.appendChild(videoContent)
            videoContent.setAttribute('class' , 'videoContent')

            let up = document.createElement('div')
            up.setAttribute('class' , 'up')

            let lower = document.createElement('div')
            lower.setAttribute('class' , 'lower')
            videoContent.append(up , lower)

            let upImg = document.createElement('img')
            upImg.setAttribute("src",`${data[i].imgSrc}`)
            upImg.setAttribute("class","img")
            
            
            let upTitle = document.createElement('div')
            upTitle.innerHTML =`${data[i].title}`
            up.append(upImg,upTitle)
  
            let lowerTitle = document.createElement('div')
            lowerTitle.setAttribute('class' , 'ytName')
            lowerTitle.innerHTML =`${data[i].ytName}`

            let lowerView = document.createElement('div')
            lowerView.innerHTML = `${data[i].views} views | ${data[i].time}`

            lower.append(lowerTitle , lowerView)

        } 

        let videos = document.querySelectorAll('video')
        videos.forEach( (each)=>{
            each.addEventListener('mouseover' , ()=>{
                each.play()
        
                each.setAttribute('controls' , '')
                
            })
            each.addEventListener('mouseout' , ()=>{
                each.pause()
                each.removeAttribute('controls')
            })
        
            
        } )
        const searchBar = document.getElementById('searchBar')
        console.log(searchBar)
        
            console.log('Main')
            setInterval( ()=>{
                searchBar.placeholder = "Hey There !"
            } , 2000 )
            setInterval( ()=>{
                searchBar.placeholder = "What's Up , Here Is the Website of Anshul"
            } , 4000 )
            setInterval( ()=>{
                searchBar.placeholder = "Search Here..."
            } , 6000 )
        
    }
    catch(error){
        console.log(error)
    }
}
videoMANAGER()