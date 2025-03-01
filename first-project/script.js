let intro = document.querySelector('.intro')
let logo =  document.querySelector('.logo-header')
let logospan = document.querySelectorAll('.logo')

window.addEventListener('DOMContentLoaded', ()=>{

    setTimeout(()=>{

        logospan.forEach((span,idx)=>{
            setTimeout(( ) =>{
                span.classList.add('active')
            }, (idx + 1) * 400)
        })
        setTimeout(()=>{
            logospan.forEach((span,idx)=>{
            
                setTimeout(()=>{
                    span.classList.replace('active','fade')
                }, (idx + 1) * 50)

            })
        }, 2000)

        setTimeout(()=>{
            intro.style.top = '-100vh'
        }, 2300)
    })
})
isanimating=false
function showcard(){
    if (isanimating==true) {
        return
    }
    isanimating=true
    const card = document.getElementById('producerinfo')
    card.style.pointerEvents = 'none'
    card.style.display = 'inline'
    card.classList.add('swing-in-top-fwd')
    function removeanimationclass(){
        isanimating=false
        card.classList.remove('swing-in-top-fwd')
        card.removeEventListener('animationend',removeanimationclass)
    }
   
    card.addEventListener('animationend',removeanimationclass)
   
    
}
function hidecard(){
    if (isanimating==true) {
        return
    }
    isanimating=true
    const card = document.getElementById('producerinfo')
    const producername = document.getElementById('producername')
    card.classList.add('swing-out-top-fwd')
     card.style.pointerEvents = 'auto'
    function removeanimationcard(){
        isanimating=false
        card.style.display = 'none'
        card.classList.remove('swing-out-top-fwd')
       
        card.removeEventListener('animationend',removeanimationcard)
        
    }
   card.addEventListener('animationend',removeanimationcard)
    }


function showsidebar() {
    const sidebar = document.querySelector('#menunavcontainer');
    sidebar.style.display = 'flex';
    currentScroll = window.scrollY
    const transparent = document.querySelector('#transparentclose');
    transparent.style.display = 'block';
    sidebar.classList.add('animate__animated', 'animate__slideInRight');
    document.querySelector('body').style.overflow = 'hidden'
    function terminateanimation () {
        console.log('show event triggered');
        sidebar.classList.remove('animate__animated', 'animate__slideInRight');
        sidebar.removeEventListener('animationend',terminateanimation)
        
    }
    sidebar.addEventListener('animationend', terminateanimation )
    //why remove need to same func callback as add event because when we add event it will trigger a fucntion
    //thus to remove the event we need to remove the exact same function as js stores it as object where arrow function will not work in this case
}
function hidesidebar(){
    const sidebar = document.querySelector('#menunavcontainer')
    window.scrollTo(0, currentScroll)
    document.querySelector('body').style.overflow = 'visible'
    const transparent = document.querySelector('#transparentclose')
    transparent.style.display = 'none'
    sidebar.classList.add('animate__animated', 'animate__slideOutRight');
    function removeanimation(){
        console.log('hide event trigger')
        sidebar.classList.remove('animate__animated', 'animate__slideOutRight')
        //if display is none place first then animation cannot start because there nothing to animate 
        sidebar.style.display='none'
        sidebar.removeEventListener('animationend',removeanimation)
    }
    sidebar.addEventListener('animationend', removeanimation ) 
}
function generateArr(divId){
    str =  document.getElementById(divId).innerText
    str = str.replace(/[\r\n]+/gm, " ")
    var storeArr= str.split(' ')
    return storeArr
}
function alertonclick(){
    alert('This feature is only for demonstration purposes')
}




//this func is not used because the problem with the <br> are solved through removing it by the regex in the 
//func that generate the array
function addatindex(ori,elementToadd, indexadd){
    var temp=[]
    for(var i=indexadd,tempindex=0;i<ori.length;i++,tempindex++){
        temp[tempindex]=ori[i]
    }
    ori[indexadd]=elementToadd
    ori.length=ori.length+1
    for(i=indexadd+1,tempindex=0;i<ori.length;i++,tempindex++){
        ori[i]=temp[tempindex]
    }
}

console.log(para1)
//id is supposed to be a global variable but the used of arr can mitigate the effects of global var 
//as the value of arr chnages based on the func as it is referenced to it
var id=[0]
function generatespan(divtoreplace,newtextarr,spacingarr,x){
    document.getElementById(divtoreplace).innerText=""

    
    for(var i=0 ; i<newtextarr.length;i++){

        var spanEl = document.createElement('span')
        document.getElementById(divtoreplace).appendChild(spanEl)
        spanEl.innerText=newtextarr[i]
        spanEl.style.marginRight='5px'
        if(i!=0){
            spanEl.id=(id[0]).toString()
            id[0]++
        }
        if(i==spacingarr[x]){
            x++
            document.getElementById(divtoreplace).appendChild(document.createElement('br'))
        }

        document.getElementById(divtoreplace).style.display='inline-block'
    }
}

var para1= generateArr("paragraph1")
spacingarr=[0,9,20,32]
generatespan("paragraph1",para1,spacingarr,0)

var para2 =generateArr("paragraph2")
spacingarr = [0,6,13,22,28,35,41]
generatespan("paragraph2",para2,spacingarr,0)

var para3=generateArr("paragraph3")
spacingarr=[0,7,11,17,24,29,36]
generatespan("paragraph3",para3,spacingarr,0)

spacingarr = [0,6,13,22,28,35,41]
generatespan("paragraph4",para2,spacingarr,0)

class subElement{
    constructor(spanIDarr,starttime,endtime,scrollflag){
        this.spanIDarr = spanIDarr
        this.starttime = starttime
        this.endtime = endtime
        this.scrollflag = scrollflag
    }
}
const data = [
    //paragraph1
    //Your morning eyes,I could stare like watching stars
    new subElement([0,8],19.492, 24.492,false),

    //I could walk you by and I'll tell without a thought
    new subElement([9,19], 26.771, 31.771,false),

    //You'd be mine, would you mind if I took your hand tonight
    new subElement([20,31], 33.075, 38.075,false),

    //Know you're all that I want, this life
    new subElement([32,39], 40.589, 45.589,false),




    //paragraph2
    // I'll imagine we fell in love
    new subElement([40,45], 48.630, 50.194,false),

    //I'll nap under moonlight skies with you
    new subElement([46,52], 50.194, 55.085,false),

    //I think I'll picture us, you with the waves
    new subElement([53,61], 55.085, 58.348,false),

    //The ocean's colors on your face
    new subElement([62,67], 58.348, 62.375,false),

    // I'll leave my heart with your air
    new subElement([68,74], 62.375, 66.215,false),

    //So let me fly with you
    new subElement([75,80], 66.215, 69.775,false),

    //Will you be forever with me
    new subElement([81,86], 69.775, 73.608,false),



    //paragraph3
    // My love will always stay by you
    new subElement([87,93], 107.430, 112.430,false),

    //I'll keep it safe
    new subElement([94,97], 113.287, 115.495,false),

    //so don't you worry athing,
    new subElement([98,103],115.485,118.075,false),

    //♪ I'll tell you I love you more ♪
    new subElement([104,110], 118.075, 121.995,false),

    //♪ It's stuck with you forever ♪
    new subElement([111,115], 121.995, 125.058,false),

    //♪ So promise you won't let it go ♪
    new subElement([116,122], 125.058, 128.889,false),

    //♪ I'll trust the universe will always bring me to you ♪
    new subElement([123,132], 128.889, 133.889,false),



    

    //paragraph4
    //♪ I'll imagine we fell in love ♪
    new subElement([133,138] , 137.167, 139.595,false),

    //♪ I'll nap under moonlight skies with you ♪
    new subElement([139,145], 139.595, 143.673,false),

    //♪ I think I'll picture us, you with the waves ♪
    new subElement([146,154], 143.673, 146.855,false,),

    //♪ The ocean's colors on your face ♪
    new subElement([155, 160], 146.855, 151.052,false),

    //♪ I'll leave my heart with your air ♪
    new subElement([161,167], 151.052, 154.895,false),

    //♪ So let me fly with you ♪
    new subElement([168,173], 154.895, 158.515,false),

    //♪ Will you be forever with me ♪
    new subElement([174,179], 158.515, 162.348,false),

]

var audioTag = document.getElementById("audio-control")
const slider = document.getElementById('slider')
audioTag.addEventListener('timeupdate', () =>{
    const currentTime = audioTag.currentTime
   
    slider.addEventListener('input',() =>{
        audioTag.currentTime = slider.value/100 *221
    })
    slider.value = audioTag.currentTime/221 * 100
    document.getElementById("minutes").innerText = Math.floor(currentTime/60).toString()
    document.getElementById('seconds').innerText = Math.floor((currentTime%60))<10 ?"0"+Math.floor((currentTime%60)).toString() : Math.floor((currentTime%60)).toString()
    
    //critical initialisation as this value can only be obtanied once the loop increment from 0  
    // without this causes undefined value and 
    //wont increment i causes the  but weirdly JS won't throw error due to undefined 
    playingidx=0
    //console.log(data)
    for (var i = 0 ; i<data.length ; i++){
        console.log(data[i].scrollflag,'at top of outer condition at i',i)
        if (currentTime<19.492){
            for ( var endidx =0; endidx<=179; endidx++){
                for(let i = 0 ; i< data.length ; i++){
                    data[i].scrollflag = false
                }
                document.getElementById(endidx.toString()).style.color = 'rgb(0, 0, 0)'
                document.getElementById(endidx.toString()).style.textShadow =  'none'
                document.getElementById(endidx.toString()).style.transition = 'color 0.5s ease-in-out, opacity 0.5s ease-in-out '
                document.getElementById(endidx.toString()).style.opacity = '1'
            }
        }
        //console.log(data[i].scrollflag,'before  current highlight condition at i',i)
        console.log('start time is ',data[i].starttime,' |current time is ' ,currentTime,' |end at ',data[i].endtime, ' |at i ',i)
        if ( currentTime>=data[i].starttime-0.3 && !audioTag.paused && currentTime<data[i].endtime-0.3){
            if (data[i].scrollflag==false){
                const element = document.getElementById(data[i].spanIDarr[0]);
                const elementRect = element.getBoundingClientRect();
                const absoluteElementTop = elementRect.top + window.pageYOffset;
                const middle = absoluteElementTop - (window.innerHeight / 2);
                window.scrollTo(0, middle);
                //document.getElementById(data[i].spanIDarr[0]).scrollIntoView(true,{ behavior: "smooth", block: "end" });
                data[i].scrollflag = true
                console.log('scroll triggred')
            }
               
            var playingidx = i
            for ( var spanId = data[i].spanIDarr[0]; spanId<=data[i].spanIDarr[1]; spanId++){
                document.getElementById(spanId.toString()).style.color = '#4169E1'
                document.getElementById(spanId.toString()).style.textShadow =  '2px 2px 8px rgba(65, 105, 225, 0.6)'
                document.getElementById(spanId.toString()).style.transition = 'color 0.3s ease-in-out, text-shadow 0.3s ease-in-out '
                document.getElementById(spanId.toString()).style.opacity = '1'
          
        
            }
        }
        if (playingidx !=0){
            if ( currentTime>data[playingidx-1].endtime ){
                data[playingidx-1].scrollflag = false
                //console.log('flag set to ',data[playingidx-1].scrollflag, ' for ',(playingidx-1))
                for ( var endidx = 0; endidx<=data[playingidx-1].spanIDarr[1]; endidx++){
                    document.getElementById(endidx.toString()).style.color = 'rgb(0, 0, 0)'
                    document.getElementById(endidx.toString()).style.textShadow =  'none'
                    document.getElementById(endidx.toString()).style.transition = 'color 0.5s ease-in-out, opacity 0.5s ease-in-out '
                    document.getElementById(endidx.toString()).style.opacity = '0.5'
        
                }
            }
        }
        if ( playingidx!=0){
            if ( currentTime<data[playingidx+1].endtime ){
                for(let i =playingidx+1 ; i< data.length ; i++) {

                    data[i].scrollflag = false
                    //console.log('flag set to ',data[i].scrollflag, ' for ',(playingidx+1))
                }
                for ( var endidx =data[playingidx+1].spanIDarr[0]; endidx<=179; endidx++){
                    document.getElementById(endidx.toString()).style.color = 'rgb(0, 0, 0)'
                     document.getElementById(endidx.toString()).style.textShadow =  'none'
                     document.getElementById(endidx.toString()).style.transition = 'color 0.5s ease-in-out, opacity 0.5s ease-in-out '
                     document.getElementById(endidx.toString()).style.opacity = '1'
                   
                }
            }
        }
     
        
    }

}


)
audioTag.addEventListener('ended',() =>{
    audioTag.currentTime = 0
    for ( var endidx =0; endidx<=179; endidx++){
        document.getElementById(endidx.toString()).style.color = 'rgb(0, 0, 0)'
        document.getElementById(endidx.toString()).style.textShadow =  'none'
        document.getElementById(endidx.toString()).style.transition = 'color 0.5s ease-in-out, opacity 0.5s ease-in-out '
        document.getElementById(endidx.toString()).style.opacity = '1'
       
       
    }
    clickplayericon()
    slider.value = audioTag.currentTime
    document.getElementById("minutes").innerText = Math.floor(currentTime/60).toString()
    document.getElementById('seconds').innerText = Math.floor((currentTime%60))<10 ?"0"+Math.floor((currentTime%60)).toString() : Math.floor((currentTime%60)).toString()
}
)
function clickplayericon(){
    const icon = document.getElementById('player-icon')
   const audio = document.getElementById("audio-control")
    if (icon.className==="fa-solid fa-play fa-xl"){
        console.log(icon.className)
        audio.play()
        icon.classList.replace("fa-play","fa-pause")

    }
    else{
        audio.pause()
        icon.classList.replace("fa-pause","fa-play")
    }
}
function dialogbutton(){
    const dialog = document.querySelector('dialog')
    window.scrollTo(0, currentScroll)
    document.querySelector('body').style.overflow = 'visible'
    dialog.close()
}
function alertonclick(){
    const dialog = document.querySelector('dialog')
    currentScroll = window.scrollY
    document.querySelector('body').style.overflow = 'hidden'
    dialog.showModal()
}
