var style = getComputedStyle(document.querySelector('.javaScript'));
var varDisplay = style.display;

function hide(){
    if(document.getElementById('pop').style.display == 'none'){
        varDisplay = 'flex';
        document.getElementById('pop').style.display = varDisplay;
    }else{
        varDisplay = 'none';
        document.getElementById('pop').style.display = varDisplay;
    }
}

