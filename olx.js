const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')
    
}



function loadcoupon()
{
    document.getElementById("coupon").style.visibility = 'visible';
}

function closecoupon()
{
    document.getElementById("coupon").style.visibility = 'hidden';
    document.getElementById("bodymain").style.opacity = '1';
}


function myFunction()
{
    let popup = document.getElementById("popuscontainer");
    popup.classList.toggle("show");
}