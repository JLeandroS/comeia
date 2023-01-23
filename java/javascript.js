
function slide1(){
    $("#img_id").fadeTo("slow", 0.3);
    document.getElementById('img_id').src="img/slider3.jpg";
    $("#img_id").fadeTo("slow", 1);
    setTimeout("slide3()", 5000);
}
    
    
function slide3(){
    $("#img_id").fadeTo("slow", 0.3);
    document.getElementById('img_id').src="img/slider4.jpg";
    $("#img_id").fadeTo("slow", 1);
    setTimeout("slide1()", 5000);
}

function remover_login(){
    var load = document.getElementById('load');
    load.style.animation = 'mover 2s';
    load.style.transform = 'translate(100%)';
    slide1();
}


$('#btn_mod1').click(function(){
    var mod1 = document.getElementById('mod_1');
    mod1.style.display = 'flex';
    mod1.style.animation = 'aumentar 1s'; 
})

$('#btn_mod2').click(function(){
    var mod2 = document.getElementById('mod_2');
    mod2.style.display = 'flex';
    mod2.style.animation = 'aumentar 1s'; 
})
$('#btn_mod3').click(function(){
    var mod3 = document.getElementById('mod_3');
    mod3.style.display = 'flex';
    mod3.style.animation = 'aumentar 1s'; 
})
$('#btn_mod4').click(function(){
    var mod4 = document.getElementById('mod_4');
    mod4.style.display = 'flex';
    mod4.style.animation = 'aumentar 1s'; 
})

$('#btn_O1').click(function(){
    var mod1 = document.getElementById('mod_1');
    mod1.style.display = '';
})

$('#btn_O2').click(function(){
    var mod2 = document.getElementById('mod_2');
    mod2.style.display = '';
})
$('#btn_O3').click(function(){
    var mod3 = document.getElementById('mod_3');
    mod3.style.display = '';
})
$('#btn_O4').click(function(){
    var mod4 = document.getElementById('mod_4');
    mod4.style.display = '';
})