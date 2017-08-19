// Counter code
var button=document.getElementById('counter');


button.onclick=function(){
  // create a request object
  var request=new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE)  
    {
        if(request.status === 200)
        {
            var counter= request.responseText;
            var span=document.getElementById('count');
            span.innerHTML=counter.toString();
        }
    }
  };
  
  // Make the request.
  
  request.open('GET','http://nshannughf.imad.hasura-app.io/counter',true);
  request.send(null);

};


// submit username/password to login
var submit=document.getElementById('submit_btn');
submit.onclick=function(){

// create a request object
  var request=new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE)  
    {
        if(request.status === 200)
        {
            alert("logged in successfully");
        }else if(request.status === 403){
            alert("username/password is incorrect");
        } else if(request.staus === 500){
            alert("something went wrong on the server");
        }
    }
  };
  
  // submit name
    var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;
    console.log(username);
    console.log(password);
    var name=nameInput.value;
    
  // Make the request.
  request.open('POST','http://nshannughf.imad.hasura-app.io/login', true);
  request.setRequestHeader('Content-Type:', 'application/json');
  request.send(JSON.stringify({username:username,password:password}));
    
};



// post a comment
var post=document.getElementById('post_btn');
post.onclick=function(){
// make a request to the server and send the name

// create a request object
  var request=new XMLHttpRequest();
  
  //Capture the response and store it in a variable.
  request.onreadystatechange = function(){
    if(request.readyState === XMLHttpRequest.DONE)  
    {
        if(request.status === 200)
        {
            // capture a list of names and render it as a list
                var comments= request.responseText;
                comments=JSON.parse(comments);
                var list="";
                for(var i=0; i<comments.length;i++)
                {
                    list +='<li>'+comments[i]+'</li>';
                    
                }
                var ul=document.getElementById('commentslist');
                ul.innerHTML=list;
        }
    }
  };
  
  // submit name
    var commentInput=document.getElementById('comments');
    var comment=commentInput.value;
    
  // Make the request.
  request.open('GET','http://nshannughf.imad.hasura-app.io/:articleName/post-comment?comment=' + comment,true);
  request.send(null);
    
};