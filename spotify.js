 let songIndex = 0;
 let audioElement = new Audio("songs/0.mp3");
 let playKey = document.getElementById("playKey");
 let myProgressBar = document.getElementById("myProgressBar");
 let songItems = Array.from(document.getElementsByClassName("songItem"));
 let songItemPlay= Array.from(document.getElementsByClassName("songItemPlay"));
 let masterSongName= document.getElementById("masterSongName");
   
 let songs=[
    {songName:"Lullaby Rajkumari", filePath:"songs/0.mp3", coverPath:"covers/0.jpg", duration:"3:26"},
    {songName:"Belageddu", filePath:"songs/1.mp3", coverPath:"covers/1.jpg", duration:"3:37" },
    {songName:"Udupi Hotelu", filePath:"songs/2.mp3", coverPath:"covers/2.jpg", duration:"3:15"},
    {songName:"Singara Siriye", filePath:"songs/3.mp3", coverPath:"covers/3.jpg", duration:"4:41"},
    {songName:"Torture song", filePath:"songs/4.mp3", coverPath:"covers/4.jpg", duration:"5:11"},
    {songName:"Salaam Rocky Bhai", filePath:"songs/5.mp3", coverPath:"covers/5.jpg", duration:"4:05"},
    {songName:"Karvalli Song", filePath:"songs/6.mp3", coverPath:"covers/6.jpg", duration:"3:20"},
    {songName:"EE Preethi", filePath:"songs/7.mp3", coverPath:"covers/7.jpg", duration:"4:47"},
    {songName:"Friendship Song", filePath:"songs/8.mp3", coverPath:"covers/8.jpg", duration:"4:08"},
    {songName:"Nagu Nagutha neenu", filePath:"songs/9.mp3", coverPath:"covers/9.jpg", duration:"4:49"},
 ];
//  adding songitems
 songItems.forEach((element, i) => { 
   element.getElementsByTagName("img")[0].src = songs[i].coverPath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName 
   element.getElementsByClassName("timestamp")[0].firstChild.textContent = songs[i].duration;
  
});

// adding events to play key
 playKey.addEventListener('click', () =>{
  if(audioElement.paused || audioElement.currentTime<=0) {
   audioElement.play();
    playKey.classList.remove("fa-play-circle")
    playKey.classList.add("fa-pause-circle")
    gif.style.opacity = 1;
  }
  else{
    audioElement.pause();
    makeAllPlay();
    playKey.classList.remove("fa-pause-circle")
    playKey.classList.add("fa-play-circle")
    gif.style.opacity = 0;
  }
});

// adding events to progressBar
//  audioElement.addEventListener('timeupdate', ()=>{
//   myProgressBar.value = parseInt((audioElement.currentTime/audioElement.duration) * 100);
// })

audioElement.addEventListener('timeupdate', ()=>{
  myProgressBar.value = parseInt((audioElement.currentTime/audioElement.duration) * 100);
while (audioElement.currentTime === audioElement.duration){
  if(songIndex>9){
    songIndex=0;
  }
    else{
      songIndex+=1
    }
  audioElement.src= songs[songIndex].filePath ;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText=songs[songIndex].songName;
  gif.style.opacity = 1;
  playKey.classList.remove("fa-play-circle")
  playKey.classList.add("fa-pause-circle") 
  makeAllPlay();
  }
})

myProgressBar.addEventListener('change', ()=>{
  audioElement.currentTime= parseInt((myProgressBar.value*audioElement.duration)/100);
})

const makeAllPlay = ()=>{
 Array.from(document.getElementsByClassName("songItemPlay")).forEach(item=>{
   item.classList.remove('fa-pause-circle');
   item.classList.add('fa-play-circle');
 })
}
 
songItemPlay.forEach(item=>{
    item.addEventListener('click', (e)=>{
      console.log(item);
    makeAllPlay();
    songIndex=parseInt(e.target.id) ;
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
    audioElement.src= songs[songIndex].filePath ;
    audioElement.currentTime = 0;
    audioElement.play();
    masterSongName.innerText=songs[songIndex].songName;
    gif.style.opacity = 1;
    playKey.classList.remove("fa-play-circle")
    playKey.classList.add("fa-pause-circle") 
    // let tem= document.getElementById("2");
    // tem.style.color="red"
   console.log( "display", e.target.parentElement.parentElement.)
}) 
})

// audioElement.addEventListener('timeupdate', ()=>{
//   myProgressBar.value = parseInt((audioElement.currentTime/audioElement.duration) * 100);
// while (audioElement.currentTime === audioElement.duration){
//   if(songIndex>9){
//     songIndex=0;
//   }
//     else{
//       songIndex+=1
//     }
//   audioElement.src= songs[songIndex].filePath ;
//   audioElement.currentTime = 0;
//   audioElement.play();
//   masterSongName.innerText=songs[songIndex].songName;
//   gif.style.opacity = 1;
//   playKey.classList.remove("fa-play-circle")
//   playKey.classList.add("fa-pause-circle") 
//   makeAllPlay();
//   }
// })

document.getElementById("previous").addEventListener('click', (e)=>{
  if(songIndex<=0){
  songIndex=0;}
  else{songIndex-=1}

  makeAllPlay();
  audioElement.src= songs[songIndex].filePath ;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText=songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
})
 
document.getElementById("next").addEventListener('click', (e)=>{
  if(songIndex>9){
  songIndex=0;
}
  else{
    songIndex+=1
  }
  makeAllPlay();
  audioElement.src= songs[songIndex].filePath ;
  audioElement.currentTime = 0;
  audioElement.play();
  masterSongName.innerText=songs[songIndex].songName;
  gif.style.opacity = 1;
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');

})

