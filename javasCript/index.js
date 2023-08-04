/* gsap.registerPlugin(ScrollTrigger);

gsap.to(".segunda-parte",{
    opacity:1,
    scrollTrigger:{
        trigger:".segunda-parte",
        markers:false,
        start:"top center",
        end:"center center",
        scrub:4
    }
    
}) */

/* document.addEventListener("DOMContentLoaded", function() {
    let year = document.getElementById("years");
    let plantillas = document.getElementById("platillas");
    let optimizacion = document.getElementById("optimizacion");
    
    const yearsForYear = 9;
    const yearsForPlantillas = 20; // Cambiar este valor al deseado
    const yearsForOptimizacion = 100; // Cambiar este valor al deseado
    
    const animationDuration = 1; // Duración en segundos de la animación completa
    const updateFrequencyForYear = animationDuration * 800 / yearsForYear; // Calculamos el tiempo entre actualizaciones para el primer elemento
    const updateFrequencyForPlantillas = animationDuration * 800 / yearsForPlantillas; // Calculamos el tiempo entre actualizaciones para el segundo elemento
    const updateFrequencyForOptimizacion = animationDuration * 800 / yearsForOptimizacion; // Calculamos el tiempo entre actualizaciones para el tercer elemento

    // Función para animar un elemento
    function activar_numero(elemento, years, updateFrequency) {
        gsap.to(elemento, {
            scrollTrigger: {
                trigger: ".contenedor-vistas",
                markers: false,
                start: "-=200 center",
                end: "bottom center",
                onEnter: () => {
                    let currentYear = 0;
                    const updateYear = () => {
                        currentYear++;
                        elemento.innerText = "+" + currentYear;
                        if (currentYear < years) {
                            // Continuar la animación si no hemos llegado al año deseado
                            setTimeout(updateYear, updateFrequency);
                        }
                    };
                    updateYear(); // Iniciar la animación
                }
            }
        });
    }

    // Activar animaciones para cada elemento con los años y frecuencias de actualización correspondientes
    activar_numero(year, yearsForYear, updateFrequencyForYear);
    activar_numero(plantillas, yearsForPlantillas, updateFrequencyForPlantillas);
    activar_numero(optimizacion, yearsForOptimizacion, updateFrequencyForOptimizacion);
}); */

/* function moverplantillas(container,xPercent){
    gsap.to(container,{
        xPercent:xPercent,
        duration:20,
        ease:"none",
        scrollTrigger:{
            trigger:".platillas",
            start:"top center",
            end:"center center",
            scrub:7
        }
    })
}
moverplantillas(".contenedor-deimg",-150);
moverplantillas(".contenedor-deimg2",100) */

/* function moverResponsive(contain,yPercent,trigger){
    gsap.to(contain,{
        yPercent:yPercent,
        duration:20,
        ease:"none",
        scrollTrigger:{
            trigger:trigger,
            start:"top center",
            end:"+=300 center",
            markers:true,
            scrub:true,
            pin:true
        }
    })
}
moverResponsive(".movil-informacion h2",1,".movil-informacion h2")
 */
gsap.to(".scroll-dow img",{
    rotate:360,
    duration:4,
    repeat:-1,
    ease:"none"
})
/* function verClases(contenedor,trigger){
    gsap.to(contenedor,{
        opacity:1,
        duration:4,
        scrollTrigger:{
            trigger:trigger,
            markers:true,
            start:"-=400 center",
            end:"bottom center",
            scrub:1
        }
    })
}
verClases(".responsivedesing",".responsivedesing")
verClases(".title-seo",".title-seo")
verClases(".animaciones",".animaciones") */



  
function mostrartexto(){
    const elementos=document.querySelectorAll('.textomostra');

    elementos.forEach(elemento =>{

        const poscision =elemento.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if(poscision < windowHeight){
            elemento.classList.add('mostrartexto')
        }
    })
}

window.addEventListener('scroll',mostrartexto);

mostrartexto();
