// var url = 'https://dev.cpf.tadam.ai/peugeot/peugeotClub.umd.min.js';

// if (location.host.indexOf('pajero4x4.ru') >= 0)
//     url = 'https://dev.cpf.tadam.ai/pajero4x4/pajero4x4.umd.min.js';
// if (location.host.indexOf('www.passat-club.ru') >= 0)
//     url = 'https://dev.cpf.tadam.ai/passat/passatClub.umd.min.js';

// (function (url, location) {
//     var scriptTag = document.createElement('script');
//     scriptTag.src = url;
//     scriptTag.async = true;
//     scriptTag.charset = "utf-8";
//     scriptTag.type = "text/javascript";
//     location.appendChild(scriptTag);
// })(url, document.head);

var url="https://dev.cpf.tadam.ai/peugeot/peugeotClub.umd.min.js";0<=location.host.indexOf("pajero4x4.ru")&&(url="https://dev.cpf.tadam.ai/pajero4x4/pajero4x4.umd.min.js"),0<=location.host.indexOf("www.passat-club.ru")&&(url="https://dev.cpf.tadam.ai/passat/passatClub.umd.min.js"),function(t,a){var e=document.createElement("script");e.src=t,e.async=!0,e.charset="utf-8",e.type="text/javascript",a.appendChild(e)}(url,document.head);