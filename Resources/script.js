
<head><link rel="stylesheet" href="resources/css/styles.css"/>

</head>
body {
    font-family:'Lato',sans-serif;
}

#quiz {
    margin-left:0px;
    background:#d2def2;
    padding:10px 20px 10px 20px;
    width:auto;
    border-radius:20px;
    float:left;
}


h1 {
    text-align:center;
}


#input {
    margin-border:20px;
    display:block ;
}


#textbox {
    height:22px;
    width:120px;
    font-size:16px;
    border-radius:5px;
    border:none;
    padding-left:5px;
}


#button {
    background:green;
    border:none;
    border-radius:5px;
    padding:10px;
    color:white;
    font-size:16px;
    transition-duration:.5s;
    margin-top:15px;
}


#button.hover {
    background:white;
    border:1px solid green;
    color:black;
    cursor:pointer;

}


#after_submit {
    visibility:hidden;
    background:#0000ff;
    padding:10px 20px 10px 20px;
    width:device-width;
    border-radius:20px;
    float:left;
    margin-left:20px;
    font-size:30px;
}


#pictures {
    width:100%;
    height:100%;
}




body {
    font-family:'Lato',sans-serif;
}

#quiz {
    margin-left:0px;
    background:#d2def2;
    padding:10px 20px 10px 20px;
    width:device-width;
    border-radius:20px;
    float:left;
}


h1 {
    text-align:center;
}


#input {
    margin-border:20px;
    display:block ;
}


#textbox {
    height:22px;
    width:120px;
    font-size:16px;
    border-radius:5px;
    border:none;
    padding-left:5px;
}


#button {
    background:green;
    border:none;
    border-radius:5px;
    padding:10px;
    color:white;
    font-size:16px;
    transition-duration:.5s;
    margin-top:15px;
}


#button.hover {
    background:white;
    border:1px solid green;
    color:black;
    cursor:pointer;

}


#after_submit {
    visibility:hidden;
    background:#0000ff;
    padding:10px 20px 10px 20px;
    width:device-width;
    border-radius:20px;
    float:left;
    margin-left:20px;
    font-size:30px;
}


#pictures {
    width:100%;
    height:100%;
}


<!--finish on a diffrent page-->

function check(){

var question1=document.quiz.question1.value;
var question2=document.quiz.question2.value;
var question3=document.quiz.question3.value;
var correct=0;


    if (question1=="7.2mil"){
        correct++;
  }


   if (question2=="It had a lot of resources unknown to us"){
       correct++;
  }


  if (question3==""){
      correct++;
  }

  if (question4==""){
      correct++;
  }

  if (question5=="To make a faster route through the pacific and Atlantic ocean"){
      correct++;
  }



var messages=["Great job!","That's just okay!","You really need to do better"];


var range;

  if(correct<1){
      range=2;
  }

  if(correct>0&&correct<5){
      range=1;
  }

  if(correct>2){
      range=0;
  }


document.getElementById("after_submit").style.visibility="visible";


document.getElementById("messages").innerHTML=messages[range];
document.getElementById("number_correct").innerHTML="&rarr;you got "+correct+" correct.";
document.getElementById("pictures").src=pictures[range];


}
