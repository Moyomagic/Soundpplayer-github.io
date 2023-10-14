
const EL_play = document.querySelector("#play");

const EL_loop = document.querySelector("#loop");



let  wavesurfer = WaveSurfer.create({

    container: "#audiowave",

    waveColor: "orange",

    progressColor: "#1e594f",

    height: 50,

    responsive: true,


    hideScrollbar: true,

    cursorColor: "#5df9de",

    audioRate: 1,

    cursorWidth: 2,

    barWidth: 3,

    barGap: 1.0,

    skipLength: 5,

});

wavesurfer.load('Harry_Styles_As_It_Was_(NaijaMusic.NG).mp3');

wavesurfer.on('ready', function () {

  var timeline = Object.create(WaveSurfer.Timeline);

  timeline.init({

    wavesurfer: wavesurfer,

    container: '#waveform-timeline',

    primaryFontColor: '#fff',

    primaryColor: '#fff',

    secondaryColor: '#fff',

    secondaryFontColor: '#fff'

  });

});

wavesurfer.on('audioprocess', function() {

  if (wavesurfer.isPlaying()) {

    var totalTime = wavesurfer.getDuration(),

        currentTime = wavesurfer.getCurrentTime(),

        remainingTime = totalTime - currentTime;

        

    document.getElementById('time-total').innerText = Math.round(totalTime / 60).toFixed(1); 

    document.getElementById('time-current').innerText = Math.floor(currentTime);



  }

});



$(".btn-toggle-pause").on("click", function() {
    wavesurfer.playPause(); 
});

$(".btn-backward").on("click", function() {

    wavesurfer.skipBackward();
});

$(".btn-forward").on("click", function() {

    wavesurfer.skipForward();

});
$(".btn-toggle-mute").on("click", function() {

    wavesurfer.toggleMute();

});

$(".btn-stop").on("click", function() {

    wavesurfer.stop();

});
