
let timer=false;
let count=0;
let s=0;
let m=0;
let h=0;
let start=document.getElementById('start');
let stop=document.getElementById('stop');
let reset=document.getElementById('reset');
let ms=document.getElementById('ms');
let sec=document.getElementById('sec');
let min=document.getElementById('min');
let hr=document.getElementById('hr');
start.addEventListener('click',function(){
    timer=true;
    stopwatch();
}); 
stop.addEventListener('click',function(){
    timer=false;
    stopwatch();
});
reset.addEventListener('click',function(){
    timer=false;
    stopwatch();
    h=0;
    m=0;
    s=0;
    count=0;
    hr.innerHTML="00";
    min.innerHTML="00";
    sec.innerHTML="00";
    ms.innerHTML="00";
});
function stopwatch(){
    if(timer==true){
        count=count+1;
        if(count==100){
            s=s+1;
            count=0;
        }
        if(s==60){
            m=m+1;
            s=0;
        }
        if(m==60){
            h=h+1;
            m=0;
            s=0;
        }
        var countstr=count;
        var secstr=s;
        var minstr=m;
        var hstr=h;
        if(h<10){
            hstr="0"+hstr;
        };
        if(m<10){
            minstr="0"+minstr;
        };
        if(s<10){
            secstr="0"+secstr;
        };
        if(count<10){
            countstr="0"+countstr;
        };
        hr.innerHTML=hstr;
        min.innerHTML=minstr;
        sec.innerHTML=secstr;
        ms.innerHTML=countstr;
        setTimeout("stopwatch()",10);
    }
}