$(document).ready(function(){
    $('.modal').modal();
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.slider').slider({ full_width: true});
    $('.parallax').parallax();
    $(".myreviews").carouse({
        numVisible: 7,
        shift: 55,
        padding: 55,
    });
});

function toggleModal(){
    var instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}

function toggleModal1(){
    var instance = M.Modal.getInstance($('#modal4'))
    instance.open()
}

function toggleModal2(){
    var instance = M.Modal.getInstance($('#modal5'))
    instance.open()
}

function toggleModal3(){
    var instance = M.Modal.getInstance($('#modal6'))
    instance.open()
}

function toggleModal4(){
    var instance = M.Modal.getInstance($('#modal7'))
    instance.open()
}