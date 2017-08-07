// Counter code
var button=document.getElementById("counter");


button.onclick=function(){
  // create a request object
  var request=new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  request.onreadystatechange=function(){
    if(request.readystate===XMLHttpRequest.DONE)  
    {
        if(request.status==200)
        {
            var counter=request.responseText;
            var span=document.getElementById("count");
            span.innerHTML=counter.toString();
        }
    }
  };
  
  // Make the request.
  
  request.open('GET','http://nshannughf.imad.hasura-app.io',true);
  request.send(null);

};