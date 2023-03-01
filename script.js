var themeSwitch = document.getElementById("switch-theme");
var bannerBlob = document.querySelector(".banner-blob");

themeSwitch.onclick = function(){
document.body.classList.toggle("dark-theme-colors")
if(document.body.classList.contains("dark-theme-colors")){

            themeSwitch.classList.remove("bx-moon");
            themeSwitch.classList.add("bx-sun");
            bannerBlob.setAttribute("style","display: none;");
            localStorage.setItem("theme","dark-theme-colors");
            localStorage.setItem("theme-icon","bx-sun");
        }
        else{
            themeSwitch.classList.remove("bx-sun");
            themeSwitch.classList.add("bx-moon");
            bannerBlob.setAttribute("style","display: initial;");
            localStorage.setItem("theme","light-theme-colors");
            localStorage.setItem("theme-icon","bx-moon");

     }
} 
document.body.classList.add(localStorage.getItem("theme"))
themeSwitch.classList.add(localStorage.getItem("theme-icon"))
if(localStorage.getItem("theme") == "dark-theme-colors"){
    bannerBlob.setAttribute("style","display: none;");
}
else{
    bannerBlob.setAttribute("style","display: initial;");
}