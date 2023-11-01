var input= "";
var minutesInSeconds = 0;
var day = (new Date).clearTime().addSeconds(minutesInSeconds).toString('dd H mm ss').split(' ')[0];
var hours = (new Date).clearTime().addSeconds(minutesInSeconds).toString('dd H mm ss').split(' ')[1];
var minutes = (new Date).clearTime().addSeconds(minutesInSeconds).toString('dd H mm ss').split(' ')[2];
var seconds = (new Date).clearTime().addSeconds(minutesInSeconds).toString('dd H mm ss').split(' ')[3];
    

// document.getElementById("timer").innerHTML =
//             "<div class=\"days\"> \
//             <div class=\"numbers\">" + "U" + "</div>♦</div> \
//             <div class=\"hours\"> \
//             <div class=\"numbers\">" + "U" + "</div>♣</div> \
//             <div class=\"minutes\"> \
//             <div class=\"numbers\">" + "T" + "</div>♠</div> \
//             <div class=\"seconds\"> \
//             <div class=\"numbers\">" + "F" + "</div>♥</div> \
//             </div>";

document.addEventListener('keyup', function (event) { 
    console.log("you've pressed ", event.key);
    if(event.key == "f"){
        console.log(event.key);
        document.querySelectorAll("body")[0].requestFullscreen();
    }
    if(event.key >= 0 && event.key <=9){
        input+=event.key;
    }
	if(event.key == "Enter"){
        let synth = new Tone.Synth().toMaster();
        synth.triggerAttackRelease("E4", "8n");
        setTimeout(()=>{
            synth.triggerAttackRelease("A4", "8n");
        },30);
        new Timer().startTimer(+input*60, document.getElementById("timer"));
        console.log("You pressed ENTER. Good Job!", event);
    }
});
class Timer{
    startTimer(a = 2, v){
        let s = a;
        let view = v;
        console.log(a);
        let timer = setInterval(()=> {    
        let day = (new Date).clearTime().addSeconds(s).toString('dd H mm ss').split(' ')[0];
        let hours = (new Date).clearTime().addSeconds(s).toString('dd H mm ss').split(' ')[1];
        let minutes = (new Date).clearTime().addSeconds(s).toString('dd H mm ss').split(' ')[2];
        let seconds = (new Date).clearTime().addSeconds(s).toString('dd H mm ss').split(' ')[3];
         
        v.innerHTML =
            "<div class=\"days\"> \
            <div class=\"numbers\">" + "X" + "</div>>>></div> \
            <div class=\"hours\"> \
            <div class=\"numbers\">" + hours + "</div>hours</div> \
            <div class=\"minutes\"> \
            <div class=\"numbers\">" + minutes + "</div>minutes</div> \
            <div class=\"seconds\"> \
            <div class=\"numbers\">" + seconds + "</div>seconds</div> \
            </div>";
            s--;
            if(s<0){
                clearInterval(timer);
                let synth = new Tone.Synth().toMaster();
                synth.triggerAttackRelease("E4", "8n");
                setTimeout(()=>{
                    synth.triggerAttackRelease("A4", "8n");
                },30);
            }
        }, 1000);
    }
}