    function responsive(){
        let x= document.getElementById("nav");
        if(x.className==="navbar"){
            x.className+=" responsive";

        }
        else{
            x.className="navbar";
        }
    }