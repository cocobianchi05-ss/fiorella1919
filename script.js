const startBtn = document.getElementById("startBtn");

const landing = document.getElementById("landing");
const controlCenter = document.getElementById("controlCenter");
const resultScreen = document.getElementById("resultScreen");

const missionTitle = document.getElementById("missionTitle");
const mainCore = document.getElementById("mainCore");

const missions = [
"📚 Examen sorpresa",
"👥 Trabajo grupal",
"📱 Te dejan en visto",
"🎤 Exposición oral"
];

let currentMission = 0;

const emotions = {
"Alegría":0,
"Tristeza":0,
"Enojo":0,
"Miedo":0,
"Desagrado":0,
"Ansiedad":0,
"Razón":0
};

const colors = {
"Alegría":"gold",
"Tristeza":"#3b82f6",
"Enojo":"#ef4444",
"Miedo":"#8b5cf6",
"Desagrado":"#22c55e",
"Ansiedad":"#f97316",
"Razón":"white"
};

startBtn.onclick = () => {

landing.classList.add("hidden");

controlCenter.classList.remove("hidden");

missionTitle.textContent =
missions[currentMission];
};

document.querySelectorAll(".emotion")
.forEach(btn => {

btn.addEventListener("click", () => {

const emotion =
btn.dataset.emotion;

emotions[emotion]++;

document.getElementById(emotion)
.textContent = emotions[emotion];

mainCore.style.background =
colors[emotion];

mainCore.style.boxShadow =
`0 0 40px ${colors[emotion]},
0 0 90px ${colors[emotion]}`;

currentMission++;

if(currentMission < missions.length){

missionTitle.textContent =
missions[currentMission];

}else{

showResult();

}

});

});

function showResult(){

controlCenter.classList.add("hidden");

resultScreen.classList.remove("hidden");

let winner = Object.keys(emotions)
.reduce((a,b)=>
emotions[a] > emotions[b]
? a : b
);

document.getElementById("winner")
.textContent =
winner;

document.getElementById("reflection")
.textContent =
"Las emociones influyen constantemente en nuestras decisiones. Reconocerlas permite tomar decisiones más conscientes.";
}





let total = 0;

for(let emocion in puntos){
total += puntos[emocion];
}

let porcentaje =
Math.round(
(puntos[ganador]/total)*100
);

document.getElementById("ganador").innerHTML =
ganador + " (" + porcentaje + "%)";






















const colores = {

"Alegría":"#FFD700",
"Tristeza":"#3b82f6",
"Enojo":"#ef4444",
"Miedo":"#8b5cf6",
"Ansiedad":"#f97316"

};

document.getElementById("winnerOrb").style.background =
colores[ganador];

document.getElementById("winnerOrb").style.boxShadow =
`0 0 40px ${colores[ganador]},
0 0 100px ${colores[ganador]},
0 0 180px ${colores[ganador]}`;






































































































































































































































































































































































































const landing = document.getElementById("landing");
const game = document.getElementById("game");
const result = document.getElementById("result");

const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");

const missionTitle = document.getElementById("missionTitle");
const missionText = document.getElementById("missionText");
const missionImage = document.getElementById("missionImage");

const mainCore = document.getElementById("mainCore");

const missions = [

{
title:"📚 MISIÓN 01 - Examen sorpresa",
text:"Entrás al aula y el profesor anuncia una evaluación sorpresa.",
image:"https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200"
},

{
title:"👥 MISIÓN 02 - Trabajo grupal",
text:"Tu grupo tiene opiniones distintas y deben tomar una decisión importante.",
image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55e?w=1200"
},

{
title:"📱 MISIÓN 03 - Te dejan en visto",
text:"Esperabas una respuesta importante y pasan horas sin contestarte.",
image:"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
},

{
title:"🎤 MISIÓN 04 - Exposición oral",
text:"Debés hablar frente a toda la clase en pocos minutos.",
image:"https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200"
}

];

const emotions = {
"Alegría":0,
"Tristeza":0,
"Enojo":0,
"Miedo":0,
"Ansiedad":0
};

const colors = {
"Alegría":"#FFD700",
"Tristeza":"#3b82f6",
"Enojo":"#ef4444",
"Miedo":"#8b5cf6",
"Ansiedad":"#f97316"
};

let currentMission = 0;

startBtn.addEventListener("click",()=>{

landing.classList.remove("active");
game.classList.add("active");

loadMission();

});

function loadMission(){

missionTitle.textContent =
missions[currentMission].title;

missionText.textContent =
missions[currentMission].text;

missionImage.src =
missions[currentMission].image;

}

document.querySelectorAll(".emotion")
.forEach(button=>{

button.addEventListener("click",()=>{

const emotion =
button.dataset.emotion;

emotions[emotion]++;

mainCore.style.background =
colors[emotion];

mainCore.style.boxShadow =
`0 0 40px ${colors[emotion]},
0 0 90px ${colors[emotion]}`;

updateBars();

currentMission++;

if(currentMission < missions.length){

loadMission();

}else{

showResult();

}

});

});

function updateBars(){

const total =
Object.values(emotions)
.reduce((a,b)=>a+b,0);

if(total===0)return;

document.getElementById("joyBar").style.width =
(emotions["Alegría"]/total*100)+"%";

document.getElementById("sadnessBar").style.width =
(emotions["Tristeza"]/total*100)+"%";

document.getElementById("angerBar").style.width =
(emotions["Enojo"]/total*100)+"%";

document.getElementById("fearBar").style.width =
(emotions["Miedo"]/total*100)+"%";

document.getElementById("anxietyBar").style.width =
(emotions["Ansiedad"]/total*100)+"%";

}

function showResult(){

game.classList.remove("active");
result.classList.add("active");

let winner =
Object.keys(emotions)
.reduce((a,b)=>
emotions[a] > emotions[b] ? a : b
);

document.getElementById("winnerText")
.textContent =
winner;

document.getElementById("winnerCore")
.style.background =
colors[winner];

document.getElementById("winnerCore")
.style.boxShadow =
`0 0 50px ${colors[winner]},
0 0 120px ${colors[winner]}`;

let text = "";

for(let emotion in emotions){

const total =
Object.values(emotions)
.reduce((a,b)=>a+b,0);

const percent =
Math.round(
(emotions[emotion]/total)*100
);

text += `${emotion}: ${percent}% | `;
}

document.getElementById("winnerPercentages")
.textContent = text;

}

restartBtn.addEventListener("click",()=>{

location.reload();

});