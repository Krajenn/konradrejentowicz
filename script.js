// JS

const burger = document.querySelector('.burger');
const burgerInner = document.querySelector('.burger-inner');
const nav = document.querySelector('nav');

burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    burgerInner.classList.toggle('active');
    nav.classList.toggle('active');
})

// jQuery

// const $me1 = $('.me1');
// const $me2 = $('.me2');
// const $me3 = $('.me3');

$('.me1').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.about').offset().top
    }, 500)
    $('.burger, .burger-inner, nav').toggleClass('active');
})

$('.me2').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.photos').offset().top
    }, 500)
    $('.burger, .burger-inner, nav').toggleClass('active');
})

$('.me3').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.projects').offset().top
    }, 500)
    $('.burger, .burger-inner, nav').toggleClass('active');
})

$('.me4').on('click', function () {
    $('body, html').animate({
        scrollTop: $('.contact').offset().top
    }, 500)
    $('.burger, .burger-inner, nav').toggleClass('active');
})

// GUZIK

$(window).on('scroll', function () {
    if ($(window).scrollTop() > $(window).height() / 2) {
        $('button.up').addClass('active');
    } else {
        $('button.up').removeClass('active');
    }
})

$('button.up').on('click', function () {
    $('body, html').animate({
        scrollTop: "0"
    })
})

// TECHNOLOGIE

$(document).on('scroll', function () {
    const scrollValue = $(this).scrollTop();
    const windowHeight = $(window).height();

    const $tech = $('.technology');
    const techFromTop = $tech.offset().top;
    const techHeight = $tech.outerHeight();

    if (scrollValue > techFromTop + techHeight - windowHeight) {
        $tech.addClass('active');
    }
    if (scrollValue < 100) {
        $tech.removeClass('active');
    }
})