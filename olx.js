const changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')
    
}


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
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


