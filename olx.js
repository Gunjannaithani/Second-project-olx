const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')
    
}


  /*coupon  */
function loadcoupon()
{
    document.getElementById("coupon").style.visibility = 'visible';
}

function closecoupon()
{
    document.getElementById("coupon").style.visibility = 'hidden';
    document.getElementById("bodymain").style.opacity = '1';
}


