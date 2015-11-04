
/// <reference path="jquery-2.1.4.js" />
/// <reference path="angular.js" />
/// <reference path="jquery-ui.js" />

(function () {
    var app = angular.module('myView', []);
    app.controller('AboutController', function ($scope) {
        var learnedSkills = [
            {
                name: 'H5/Css/Js',
                imgSrc: 'Pic/html5cssjavascriptmini.png',
                
            },
            {
                name: 'Angular',
                imgSrc: 'Pic/angular200.png',

            },
            {
                name: 'jQuery',
                imgSrc: 'Pic/jquery250.png',

            },
            {
                name: 'Bootstrap',
                imgSrc: 'Pic/bootstrap-docs-readme.png',

            },
        ]
        $scope.skills = learnedSkills;
    });
}());

/*$("section p").hide();
$('h2').click(function() {
    $(this).next().fadeToggle();
});*/

//The navbar menu
var num = 500;



$(function () {
    
});

$('a.page-scroll').bind('click', function (event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top - 10
    }, 1000, 'easeInOutExpo');

    event.preventDefault();
});

$('body').scrollspy({
    target: '.navbar'
});

$('.fill-screen').css('height', window.innerHeight);

$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    
    


    if (scroll >= 400) {
        $('.navbar-default').addClass('navbar-shrink')

    }
    else {
        $(".navbar-default").removeClass('navbar-shrink')
    }
});

$('#twitter, #facebook, #linkedin').tooltip({
});

$(function () {
    $('button')
      .button()
      .click(function (event) {
          event.preventDefault();
      });
});