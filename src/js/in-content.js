// var loadJS = function (url, location) {
//     var scriptTag = document.createElement('script');
//     scriptTag.src = url;
//     scriptTag.async = true;
//     location.appendChild(scriptTag);
// };
// loadJS('https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js', document.body);

var loadJS=function(e,t){var a=document.createElement("script");a.src=e,a.async=!0,t.appendChild(a)};loadJS("https://cpf.tadam.ai/peugeot/peugeotClub.umd.min.js",document.body);