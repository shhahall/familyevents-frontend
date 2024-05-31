function hmaction(){
    if (window.innerWidth <= 425) {
        a=document.getElementsByClassName('glass-bar');
        if(a[0].style.display==="block"){
            a[0].style.display="none";
        }
        else{
            a[0].style.display="block";
        }
    }
}
