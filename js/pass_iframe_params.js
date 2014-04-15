$(document).ready(function()  
{  
    var loc = window.location.toString(),  
    params = loc.split('?')[1],  
    iframe = document.getElementById("trackFrame");  
  
iframe.src = iframe.src + '#/?' + params;  
}); 