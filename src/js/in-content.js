var url = 'https://dev.cpf.tadam.ai/peugeot/peugeotClub.umd.min.js';

if (location.host === 'www.pajero4x4.ru')
    url = 'https://dev.cpf.tadam.ai/pajero4x4/pajero4x4.umd.min.js';
if (location.host === 'www.passat-club.ru')
    url = 'https://dev.cpf.tadam.ai/passat/passatClub.umd.min.js';

(function (url, location) {
    var scriptTag = document.createElement('script');
    scriptTag.src = url;
    scriptTag.async = true;
    location.appendChild(scriptTag);
})(url, document.body);

// var loadJS=function(e,t){var a=document.createElement("script");a.src=e,a.async=!0,t.appendChild(a)};loadJS("https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js",document.body);