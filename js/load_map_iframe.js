//pass query parameters to an iframe on the page from http://topliners.eloqua.com/docs/DOC-4138

$(document).ready(function()  
{  
    var loc = window.location.toString(),  
    params = loc.split('#/?')[1],  
    iframe = document.getElementById("trackFrame");  
  
iframe.src = 'http://datamade.github.io/fatalities-map/#/?' + params;  
}); 