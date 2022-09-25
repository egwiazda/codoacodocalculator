
var str="";

document.getElementById("open").onclick=function(){
    str+="(";
    document.getElementById("result").textContent=str;
}
document.getElementById("close").onclick=function(){
    str+=")";
    document.getElementById("result").textContent=str;
}
document.getElementById("one").addEventListener("click",function(){
    str+="1";
    document.getElementById("result").textContent=str;
    alert ("hola");
});
document.getElementById("two").onclick=function(){
    str+="2";
    document.getElementById("result").textContent=str;
}
document.getElementById("three").onclick=function(){
    str+="3";
    document.getElementById("result").textContent=str;
}
document.getElementById("four").onclick=function(){
    str+="4";
    document.getElementById("result").textContent=str;
}
document.getElementById("five").onclick=function(){
    str+="5";
    document.getElementById("result").textContent=str;
}
document.getElementById("six").onclick=function(){
    str+="6";
    document.getElementById("result").textContent=str;
}
document.getElementById("seven").onclick=function(){
    str+="7";
    document.getElementById("result").textContent=str;
}
document.getElementById("eight").onclick=function(){
    str+="8";
    document.getElementById("result").textContent=str;
}
document.getElementById("nine").onclick=function(){
    str+="9";
    document.getElementById("result").textContent=str;
}
document.getElementById("zero").onclick=function(){
    str+="0";
    document.getElementById("result").textContent=str;
}
document.getElementById("add").onclick=function(){
    str+="+";
    document.getElementById("result").textContent=str;
}
document.getElementById("minus").onclick=function(){
    str+="-";
    document.getElementById("result").textContent=str;
}
document.getElementById("mul").onclick=function(){
    str+="*";
    document.getElementById("result").textContent=str;
}
document.getElementById("divide").onclick=function(){
    str+="/";
    document.getElementById("result").textContent=str;
}
document.getElementById("modulo").onclick=function(){
    str+="%";
    document.getElementById("result").textContent=str;
}
document.getElementById("point").onclick=function(){
    str+=".";
    document.getElementById("result").textContent=str;
}
document.getElementById("xpowy").onclick=function(){
    str+="pow";
    document.getElementById("result").textContent=str;
}

document.getElementById("xrty").onclick=function(){
    str+="xrty";
    document.getElementById("result").textContent=str;
}
document.getElementById("equals").onclick=function(){
    if(str.search("log")!=-1){
        var temp,arr;
        temp=str.replace("log",",");
        arr=temp.split(",");
        str=Math.log( Number(arr[0])) / Number(Math.log(arr[1]) ).toString() ;
        document.getElementById("result").textContent=str;
    }
    else if(str.search("pow")!=-1){
        var temp,arr;
        temp=str.replace("pow",",");
        arr=temp.split(",");
        str=Math.pow( Number(arr[0]) , Number(arr[1]) ).toString();
        document.getElementById("result").textContent=str;
    }
    else if(str.search("xrty")!=-1){
        var temp,arr;
        temp=str.replace("xrty",",");
        arr=temp.split(",");
        str=Math.pow(arr[1], 1/arr[0]);
        document.getElementById("result").textContent=str;
    }
    else{
        document.getElementById("result").textContent=eval(str);
        str=document.getElementById("result").textContent;
    }
}
document.getElementById("cancel").onclick=function(){
    str="";
    document.getElementById("result").textContent=0;
}

document.getElementById("epow").onclick=function(){
    var num=document.getElementById("result").textContent;
    var ans=Math.pow(Math.exp(1),num); 
    document.getElementById("result").textContent=ans;
    str=ans.toString();
}

document.getElementById("pi").onclick=function(){
    document.getElementById("result").textContent=Math.PI;
    str+=Math.PI.toString();
}
document.getElementById("sqrt").onclick=function(){
    var num=Math.sqrt(document.getElementById("result").textContent);
    document.getElementById("result").textContent=num;
    str=num.toString();		
}
document.getElementById("cubrt").onclick=function(){
    var num=Math.cbrt(document.getElementById("result").textContent);
    document.getElementById("result").textContent=num;
    str=num.toString();		
}
document.getElementById("fact").onclick=function(){
    var num=Math.round(document.getElementById("result").textContent);
    var fact=1;
    for(var i=1;i<=num;i++)
        fact*=i;
    document.getElementById("result").textContent=fact;
    str=fact.toString();
}
document.getElementById("sin").onclick=function(){
    var num;
   
        num=Math.sin((document.getElementById("result").textContent)*(Math.PI/180));
        document.getElementById("result").textContent=num;
        str=num.toString();	
}
document.getElementById("cos").onclick=function(){
    var num;
    /* 
    if(document.getElementById("rad").checked==true){
        num=Math.cos(document.getElementById("result").textContent);
        document.getElementById("result").textContent=num;
        str=num.toString();	
    }
    if(document.getElementById("deg").checked==true){
    */
        num=Math.cos((document.getElementById("result").textContent)*(Math.PI/180));
        document.getElementById("result").textContent=num;
        str=num.toString();	
    // }
}

document.getElementById("ln").onclick=function(){
    var num=Math.log(document.getElementById("result").textContent);
    document.getElementById("result").textContent=num;
    str=num.toString();	
}  
document.getElementById("log10").onclick=function(){
    var num=Math.log10(document.getElementById("result").textContent);
    document.getElementById("result").textContent=num;
    str=num.toString();	
} 
document.getElementById("x2").onclick=function(){
    var num=Math.pow(document.getElementById("result").textContent,2);
    document.getElementById("result").textContent=num;
    str=num.toString();	
} 
document.getElementById("x3").onclick=function(){
    var num=Math.pow(document.getElementById("result").textContent,3);
    document.getElementById("result").textContent=num;
    str=num.toString();	
} 
