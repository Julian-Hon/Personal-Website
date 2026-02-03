function toggleStyleSheet(){
    const currentstyle = document.getElementById("mainStyleSheet");

   const currentstylesheet = currentstyle.getAttribute("href");

    if(currentstylesheet === "styles.css"){
        currentstyle.setAttribute("href","styles2.css");
        localStorage.setItem("style", "styles2.css");
    }
    else if(currentstylesheet === "styles2.css"){
        currentstyle.setAttribute("href", "styles.css");
        localStorage.setItem("style", "styles.css");
    }
}


window.onload = function(){
    const currentstyle = document.getElementById("mainStyleSheet");
    if(localStorage.getItem("style") === "styles.css"){
        currentstyle.setAttribute("href", "styles.css" );
    }
    else if(localStorage.getItem("style") === "styles2.css"){
        currentstyle.setAttribute("href", "styles2.css");
    }
}