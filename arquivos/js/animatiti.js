$('.txt').html(function(i, html) {
    var chars = $.trim(html).split("");
    return '<span>' + chars.join('</span><span>') + '</span>';
});

var textWrapper = document.querySelector('.ml2');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false}).add({
    targets: '.ml2 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
});

var textWrapper1 = document.querySelector('.ml1');
textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({loop: false}).add({
    targets: '.ml1 .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
});

function mysobre(){
    var textWrapper = document.querySelector('.ml2');
    var textWrapper1 = document.querySelector('.ml1');
    textWrapper1.style.opacity = 0;
    textWrapper.style.opacity = 0;

    setTimeout(function() {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        textWrapper1.innerHTML = textWrapper1.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false}).add({targets: '.ml2 .letter',scale: [4,1],opacity: [0,1],translateZ: 0,easing: "easeOutExpo",duration: 950,delay: (el, i) => 70*i});
        anime.timeline({loop: false}).add({targets: '.ml1 .letter',scale: [4,1],opacity: [0,1],translateZ: 0,easing: "easeOutExpo",duration: 950,delay: (el, i) => 70*i});
        setTimeout(function() {
            textWrapper1.style.opacity = 1;
            textWrapper.style.opacity = 1;
        }, 100);
    }, 500);
}
function myresume(){

    var textWrapper3 = document.querySelector('.ml3');
    textWrapper3.style.opacity = 0;
    setTimeout(function() {
        textWrapper3.innerHTML = textWrapper3.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false}).add({targets: '.ml3 .letter',scale: [4,1],opacity: [0,1],translateZ: 0,easing: "easeOutExpo",duration: 950,delay: (el, i) => 70*i});				
        setTimeout(function() {
            textWrapper3.style.opacity = 1;
        }, 100);
    }, 500);
}
function myskills(){		
    var textWrapper4 = document.querySelector('.ml4');
    textWrapper4.style.opacity = 0;
    setTimeout(function() {
        textWrapper4.innerHTML = textWrapper4.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false}).add({targets: '.ml4 .letter',scale: [4,1],opacity: [0,1],translateZ: 0,easing: "easeOutExpo",duration: 950,delay: (el, i) => 70*i});				
        setTimeout(function() {
            textWrapper4.style.opacity = 1;
        }, 100);
    }, 500);
}
function myworks(){		
    var textWrapper5 = document.querySelector('.ml5');
    textWrapper5.style.opacity = 0;
    setTimeout(function() {
        textWrapper5.innerHTML = textWrapper5.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        anime.timeline({loop: false}).add({targets: '.ml5 .letter',scale: [4,1],opacity: [0,1],translateZ: 0,easing: "easeOutExpo",duration: 950,delay: (el, i) => 70*i});				
        setTimeout(function() {
            textWrapper5.style.opacity = 1;
        }, 100);
    }, 500);
}
