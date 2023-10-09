const astronauta = document.querySelector('.astronauta');

const mob = document.querySelector('.mob');

const fundo = document.querySelector('.terra')



var movimentando;
const jump = () =>{
    movimentando = "True";
    astronauta.classList.add('jump')

    setTimeout(()=>{

        astronauta.classList.remove('jump')

    },500);
}

const loop = setInterval(() => {
    const mobPosition = mob.offsetLeft;
    const terraPos = fundo.offsetLeft;
    const astronautaPosition = +window.getComputedStyle(astronauta).bottom.replace('px', '');

    if (mobPosition <= 17 && mobPosition > 0 && astronautaPosition < 150) {
        mob.style.animation = 'none';
        mob.style.left = `${mobPosition}px`;

        astronauta.style.animation = 'none';
        astronauta.style.bottom = `${astronautaPosition}px`;

        fundo.style.animation = 'none';
        fundo.style.left = `${terraPos}px`;

        astronauta.src = 'Imagens/AstronautaCaido.png';
        astronauta.style.width = '150px';
        astronauta.style.marginBottom = '-10px';
        astronauta.style.marginLeft = '-15px';

        

        clearInterval(loop);
        movimentando = false; // Corrija para false em vez de "False"
    }
}, 10);



document.addEventListener('keydown' , jump)

