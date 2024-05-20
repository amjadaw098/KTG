
let u = document.getElementById('p2');
let moon2 = document.getElementById('p9');


window.onscroll = function(){
let value = scrollY;
p2.style.left = value * 2 + 'px';
moon2.style.top = value * 4  + 'px';

if(scrollY >= 67){
    moon2.style.position ='fixed';
    if(scrollY >=394){
        moon2.style.position ='fixed';
    }else{
        moon2.style.position ='block';
    }
    if(scrollY >= 127)
    {
        document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background ='linear-gradient(#200016,#10001f)'
    }
}

}