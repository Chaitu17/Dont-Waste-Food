var Temp=1;
IMG_fun();
function IMG_fun()
    {
        var S=document.getElementsByClassName("img");
        for(let i=0;i<S.length;i++)
        {
            S[i].style.display="none";
        }
        Temp++;
        if(Temp > S.length){Temp=1;}
        S[Temp-1].style.display="block";
        setTimeout(IMG_fun,2000);
    }

// Should write a function called addtag which adds food items with quantities

function addtag() {
    
}