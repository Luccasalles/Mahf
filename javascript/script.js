$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

$(document).ready(function() {
    // Seleciona todos os links do menu
    $('#nav_list a, #mobile_nav_list a').on('click', function(event) {
        // Previne o comportamento padrão do link
        event.preventDefault();

        // Obtém o destino do link
        var target = $(this).attr('href');

        // Rola suavemente até o destino
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800); // 800 milissegundos para a animação
    });
});

$(document).ready(function() {
    // Ao clicar no botão "Leia Avaliações"
    $('#btn-read-reviews').on('click', function() {
        // Rolagem suave para a seção de avaliações
        $('html, body').animate({
            scrollTop: $('#testimonials').offset().top
        }, 800); // 800 é a duração da animação em milissegundos
    });
});


