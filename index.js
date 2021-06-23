var btn=document.querySelectorAll(".drum");
for(var i=0;i<btn.length;i++)   //creating a for loop to assign EventListner to every button.
{
    btn[i].addEventListener("click", Run); //click is event listner and run is function which is invoked when button is clicked.
}

function Run()
{  
    this.style.color="white"; //changing text color to white when button is pressed.
    var SelectedBtn=this.innerHTML; //selecting the value of button which is pressed.

    //function to set color back to #DA0463
    setTimeout(function(){
        document.querySelector("." + SelectedBtn).style.color="#DA0463";
    },100);

    Play(SelectedBtn); //passing that value to the Play function.
    Ani(SelectedBtn);
    
}


document.addEventListener("keydown", KeyDetect); //Using EventListener to detect the key pressed.

    function KeyDetect(event)
    {
        var key=event.key; //storing the value in variable.
        
        Play(key); //Passing the value to Play function();
        Ani(key);
    }
    

function Play(value) //function to detect the key value and play the sound according to it.
{
    switch(value)
    {
        case "w": 
        var audio=new Audio("sounds/tom-1.mp3");
        audio.play();
        break;

        case "a": 
        var audio=new Audio("sounds/tom-2.mp3");
        audio.play();
        break;

        case "s": 
        var audio=new Audio("sounds/snare.mp3");
        audio.play();
        break;

        case "d": 
        var audio=new Audio("sounds/crash.mp3");
        audio.play();
        break;

        case "j": 
        var audio=new Audio("sounds/tom-3.mp3");
        audio.play();
        break;

        case "k": 
        var audio=new Audio("sounds/tom-4.mp3");
        audio.play();
        break;

        case "l": 
        var audio=new Audio("sounds/kick-bass.mp3");
        audio.play();
        break;

        default : console.log(SelectedBtn);

    }
}

function Ani(currentkey)
    {
        var current=document.querySelector("."+currentkey);
        current.classList.add("pressed");

        setTimeout(function(){
            current.classList.remove("pressed");
        },100);
    }