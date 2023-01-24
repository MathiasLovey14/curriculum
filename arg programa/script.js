let menuvisible= false;
function mostrasOcultarMenu(){
    if(menuvisible){
        document.getElementById("nav").classList="";
        menuvisible=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuvisible=true;
    }
}
function seleccionar(){
    document.getElementById("nav").classList="";{
        menuvisible=false
    }
}
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills =window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("phyton");
        habilidades[3].classList.add("ruby");
        habilidades[4].classList.add("canva");
        habilidades[5].classList.add("ligthroom");
        habilidades[6].classList.add("adobepremierepro");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("trabajoenequipo");
        habilidades[9].classList.add("creatividad");
        habilidades[10].classList.add("dedicacion");
        habilidades[11].classList.add("pensamientocritico");
        habilidades[12].classList.add("organizacion");
        habilidades[13].classList.add("adaptabilidad");
    }
}
window.onscroll = function(){
    efectoHabilidades();
}