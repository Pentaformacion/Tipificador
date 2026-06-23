let currentStep = 0;
let selectedSystem = "";

const flow = [
{
question:"¿Qué problema reporta el usuario?",
options:[
"No puede ingresar a un sistema o aplicación"
]
},
{
question:"¿A qué sistema no puede ingresar?",
options:[
"Citrix",
"HPD",
"VPN",
"Terminal Financiera",
"Windows"
]
}
];

function loadQuestion(){

const title = document.getElementById("questionTitle");
const container = document.getElementById("optionsContainer");

title.textContent = flow[currentStep].question;
container.innerHTML = "";

flow[currentStep].options.forEach(option=>{

const btn = document.createElement("button");

btn.className="option";
btn.textContent=option;

btn.onclick=()=>next(option);

container.appendChild(btn);

});

updateProgress();
}

function next(option){

if(currentStep===0){
currentStep++;
loadQuestion();
return;
}

selectedSystem=option;

showResult();
}

function showResult(){

document.getElementById("questionCard").classList.add("hidden");
document.getElementById("resultCard").classList.remove("hidden");

let producto2="";
let producto3="";

switch(selectedSystem){

case "Citrix":
producto2="Aplicativo o software";
producto3="Citrix";
break;

case "HPD":
producto2="Aplicativo o software";
producto3="HPD";
break;

case "VPN":
producto2="Aplicativo o software";
producto3="VPN";
break;

case "Terminal Financiera":
producto2="Emulación / Altamira";
producto3="Terminal Financiera";
break;

case "Windows":
producto2="Sistema Operativo";
producto3="Windows";
break;
}

document.getElementById("resultContent").innerHTML=`

<div class="result-item"><strong>Plantilla:</strong> AUTODESBLOQUEO CLAVES DE ACCESO (INCIDENCIA)</div>

<div class="result-item"><strong>Tipo:</strong> Incidencia</div>

<div class="result-item"><strong>Operacional 1:</strong> Seguridad</div>

<div class="result-item"><strong>Operacional 2:</strong> Credenciales de Usuario</div>

<div class="result-item"><strong>Operacional 3:</strong> Bloqueos Constantes</div>

<div class="result-item"><strong>Producto 1:</strong> Software/Aplicaciones/Sistemas</div>

<div class="result-item"><strong>Producto 2:</strong> ${producto2}</div>

<div class="result-item"><strong>Producto 3:</strong> ${producto3}</div>

<div class="result-item"><strong>Buzón:</strong> SUN</div>

`;
}

function copyResult(){

navigator.clipboard.writeText(
document.getElementById("resultContent").innerText
);

alert("Tipificación copiada");
}

function restart(){

currentStep=0;

document.getElementById("resultCard").classList.add("hidden");
document.getElementById("questionCard").classList.remove("hidden");

loadQuestion();
}

function updateProgress(){

const progress=document.getElementById("progressBar");

const percent=((currentStep+1)/flow.length)*100;

progress.style.width=percent+"%";
}

loadQuestion();
