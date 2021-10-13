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

let gallery = document.getElementsByClassName('glide');
if (gallery.length !== 0) {
    let check_resize = (glide) => {
                if (glide.slides_count <= glide.settings.perView) {
                    glide.update({ startAt: 0 }).disable();
                } else {
                    glide.enable();
                }
    };
    [...gallery].forEach(el => {
                let el_glide = new Glide(el, {
                    gap: 10,
                    perView: 6,
                    bound: true,
                    breakpoints: {
                        370: {
                            perView: 2,
                        },
                        530: {
                            perView: 2.5,
                        },
                        670: {
                            perView: 3.5,
                        },
                        767: {
                            perView: 4.5,
                        },
                        1080: {
                            perView: 3,
                            startAt: 1,
                        },
                    }
                });
                el_glide.slides_count = el.querySelectorAll('.glide__slide').length;
                el_glide.on('resize', () => {
                    check_resize(el_glide);
                });
                el_glide.mount();
                check_resize(el_glide);
    });
}

/*** INICIO SECCION ROSSMELL ***/
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-clasicos-casa'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-tips-cocina'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-refri-mesa'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-receta'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
/*** FIN SECCION ROSSMELL ***/

/*** INICIO SECCION JHONATAN ***/
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-carnes-especiales'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 420,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-carnes-pavo'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 420,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-carnes-cerdo'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 420,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-carnes-res'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 420,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
window.addEventListener('load',function(){
    var glider = new Glider(document.getElementById('glider-carnes-pollo'), {
        slidesToScroll: 3,
        slidesToShow: 3.5,
        draggable: true,
        dots: '#frac-dots',
        responsive: [
            {
              // screens greater than >= 775px
              breakpoint: 320,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 420,
              settings: {
                slidesToShow: 2.2,
                slidesToScroll: 2,
                itemWidth: 200,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 576,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 775px
              breakpoint: 768,
              settings: {
                slidesToShow: 2.5,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 992,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                itemWidth: 150,
                duration: 0.25
              }
            }
        ]
    });
})
/*** FIN SECCION JHONATAN ***/