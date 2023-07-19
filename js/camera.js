const botaoIniciarCamera = document.querySelector("[data-video-botao]");
const campoCamera = document.querySelector("[data-camera]");
const video = document.querySelector("[data-video]");
const botaoTiraFoto = document.querySelector("[data-tirar-foto]");
const canvas = document.querySelector("data-video-canvas");
const mensagem = document.querySelector("[data-mensagem]");
const botaoEnviarFoto = document.querySelector("[data-enviar]");

let imagemURL = "";

botaoIniciarCamera.addEventListener("click", async function(){
    const _iniciarVideo = await navigator.mediaDevices.getUserMedia({video: true, audio: false});
    botaoIniciarCamera.style.display = "none";
    campoCamera.style.display = "block";

    video.srcObject = _iniciarVideo;
});

botaoTiraFoto.addEventListener("click", function() {
    canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.heigth);
    
    imagemURL = canvas.toDataURL("image/jpeg");

    campoCamera.style.display = "none";
    mensagem.style.display = "block";
});

botaoEnviarFoto.addEventListener("click", () => {
    const _receberDadosExistentes = localStorage.getItem("cadastro");
    const _converteRetorno = JSON.parse(_receberDadosExistentes);

    _converteRetorno.imagem = imagemURL;

    localStorage.setItem('cadastro', JSON.stringify(_converteRetorno));

    window.location.href = "./abrir-conta-form-3.html";
});
