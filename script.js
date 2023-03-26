// window.addEventListener()
// window.onload()= function(){
//     var prev;
//     var current;
//     var keys=document.querySelectorAll('keys')
    
// }
var num=document.getElementById('numbers');
var op=document.getElementById('output');
var curr=0;var prev=0;var res=0;
var flag=0;
function numbers(event){ 
    curr=event.target.value
    if(curr=='C'){
        resetVariables();
        op.value=0;
    }
    else if(curr=='='){
        // console.log(curr);
        toString(res);
        res=eval(prev);
        r=res;
        // console.log("prev:"+prev);
        op.value=r;
        prev=r;
        // for(var i=0;i<1000;i++)
        resetVariables();
    }else{
        if(flag==0 || prev== '0'){
            curr=curr;
            flag=1;
        }else{
            curr=prev+curr;
        }
        op.value=curr;
        prev=curr;
    }
    
}
function resetVariables(){
    flag=0;curr=0;prev=0;res=0;
    // op.value=res;
}
num.addEventListener('click',numbers,false);


var operator=document.getElementById('operators');
operator.addEventListener('click',operators,false)
function operators(event){ 
    var val=event.target.value
    // debugger 
    // console.log("prev:"+prev);
    // console.log("operator: "+val);
    var l=prev.length;
    var ch=prev[l-1];
    s1=prev.split(ch);
    // console.log("String: "+ ch);
    if( ch=='+' || ch=='-' || ch=='*' || ch=='/'){
        // s1[1]=val;
        // var l=prev.length;
        // prev[l-1]='';
        prev=s1[0];                 
    }
    // console.log("prev:"+prev);
    var res=eval(prev);
    var r=res;
    // console.log("res: "+r);
    curr=res+val;
    // prev=res;
    // console.log("CUrr: "+curr);
    op.value=curr;
    // op.value=r;
    // var temp=prev;
    prev=curr;
}



