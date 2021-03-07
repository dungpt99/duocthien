
var width = document.getElementById("width");
var height = document.getElementById("height");
var margin = document.getElementById("margin");
var padding = document.getElementById("padding");
console.log(width.value);
function change(){
        for(i=0;i<x.length;i++){
            x[i].style.width=width.value + "px";
            x[i].style.height=height.value +"px";
            x[i].style.margin=margin.value +"px";
            x[i].style.padding=padding.value +"px";
            x[i].style.display="inline-block";
        }
        for(i=0;i<y.length;i++){
            y[i].style.width=width.value + "px";
            y[i].style.height=height.value +"px";
            y[i].style.margin=margin.value +"px";
            y[i].style.padding=padding.value +"px";
            y[i].style.display="inline-block";
        }
};

var x = document.getElementsByClassName("chan");
var y = document.getElementsByClassName("le");
