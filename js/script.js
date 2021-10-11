/*COD SCROLL SUAVE*/ 
window.onload = () => {
    let links = document.querySelectorAll('.desplazamiento')
    
    let res = links[0]
    res.addEventListener('click', () => {
      scrollSuave('#res', 1000, 81)
    })
  
    let pollo = links[1]
    pollo.addEventListener('click', () => {
      scrollSuave('#pollo', 1800, 78)
    })
    
    let cerdo = links[2]
    cerdo.addEventListener('click', () => {
      scrollSuave('#cerdo', 1800, 50)
    })
  
    let pavo = links[3]
    pavo.addEventListener('click', () => {
      scrollSuave('#pavo', 1800, 78)
    })

    let pescado = links[4]
    pescado.addEventListener('click', () => {
      scrollSuave('#pescado', 1800, 78)
    })
    let especiales = links[5]
    especiales.addEventListener('click', () => {
      scrollSuave('#especiales', 1800, 78)
    })
  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }

var playVideo = function (modal) {
    var video = modal.querySelector('iframe, video');
    //                video.play();
    if (!video) return;
    if (video.tagName.toLowerCase() === 'video') {
        video.play();
        return;
    }
    video.src = video.src + (video.src.indexOf('?') < 0 ? '?' : '&') + 'autoplay=1';
    //                            return;
}
var stopVideo = function (modal) {
    var video = modal.querySelector('iframe, video');
    //                video.pause();
    if (!video) return;
    if (video.tagName.toLowerCase() === 'video') {
        video.pause();
        return;
    }

    video.src = video.src.replace('&autoplay=1', '').replace('?autoplay=1', '');
    //                            return;
}

document.addEventListener("DOMContentLoaded", function () {

    try {

        MicroModal.init({
            awaitCloseAnimation: true,// set to false, to remove close animation
            onShow: function (modal) {
                playVideo(modal);
            },
            onClose: function (modal) {
                stopVideo(modal);
            }
        });

    } catch (e) {
        console.log("micromodal error: ", e);
    }

});


MicroModal.init({
    onShow: modal => console.info(`${modal.id} is shown`), // [1]
    onClose: modal => console.info(`${modal.id} is hidden`), // [2]
    openTrigger: 'data-custom-open', // [3]
    closeTrigger: 'data-custom-close', // [4]
    openClass: 'is-open', // [5]
    disableScroll: true, // [6]
    disableFocus: false, // [7]
    awaitOpenAnimation: false, // [8]
    awaitCloseAnimation: false, // [9]
    debugMode: true, // [10]
    callbackClose: function (toggle, modal) {
        stopVideo(modal);
    }
});

/*
Codigo Glide js
*/ 

