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

// submit names
var submit=document.getElementById('submit_btn');
submit.onclick=function(){
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
                var names= request.responseText;
                names=JSON.parse(names);
                var list="";
                for(var i=0; i<names.length;i++)
                {
                    list +='<li>'+names[i]+'</li>';
                    
                }
                var ul=document.getElementById('namelist');
                ul.innerHTML=list;
        }
    }
  };
  
  // submit name
    var nameInput=document.getElementById('name');
    var name=nameInput.value;
    
  // Make the request.
  request.open('GET','http://nshannughf.imad.hasura-app.io/submit-name?name=' + name,true);
  request.send(null);
    
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