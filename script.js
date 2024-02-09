// audioElement.play()

// Initialize variables
let songIndex = 0;
let audioElement = new Audio ('./songs/1.mp3')
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName')
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs= [
    {songName: "llalalalllaaaalalala", filePath: "./song/1.mp3", coverPath: "./covers/1.jpg"},
    {songName: "lovely baby", filePath: "./song/2.mp3", coverPath: "./covers/2.jpg"},
    {songName: "pyar bda anokha hai", filePath: "./song/3.mp3", coverPath: "./covers/3.jpg"},
    {songName: "piche dekho", filePath: "./song/4.mp3", coverPath: "./covers/4.jpg"},
    {songName: "bubbly bouncer", filePath: "./song/5.mp3", coverPath: "./covers/5.jpg"},
    {songName: "sultan hai chacha", filePath: "./song/6.mp3", coverPath: "./covers/6.jpg"},
    {songName: "chal nikal hat", filePath: "./song/7.mp3", coverPath: "./covers/7.jpg"},
    {songName: "boor ho gya bhai ", filePath: "./song/8.mp3", coverPath: "./covers/8.jpg"},
    {songName: "likhte  likhte ", filePath: "./song/9.mp3", coverPath: "./covers/9.jpg"},
    {songName: "Aur kya hee kar sakta hu", filePath: "./song/10.mp3", coverPath: "./covers/10.jpg"}
];
// element = 0;
// Fix the loop to set cover image and song name
songItems.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName;
});





// play and pause
masterPlay.addEventListener('click' , ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName
        
    }else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
        gif.style.opacity = 0;

    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    progress  = parseInt(( audioElement.currentTime/ audioElement.duration)* 100);
    myProgressBar.value = progress;
    
});

// progress bar
myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = ((myProgressBar.value * audioElement.duration)/ 100);
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    
    // Array.from(songItemPlayElements).forEach(element => {
    //     if (element) {
    //         element.classList.add('fa-pause-circle');
    //     }
    // });
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e)=>{
        songIndex  =  parseInt(e.target.id)


        makeAllPlays();
        console.log(e.target);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');

        audioElement.src = `./songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName


        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        





    });
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex >=9){
        songIndex = 0 
    } else{
        songIndex += 1
    }
    masterSongName.innerText = songs[songIndex].songName
    audioElement.src = `./songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex <= 0){
        songIndex = 0 
    } else{
        songIndex += 1
    }
    masterSongName.innerText = songs[songIndex].songName
    audioElement.src = `./songs/${songIndex+1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})