
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();

        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

function toggleMenu() {

    const sidebar = document.querySelector(".left");
    const button = document.querySelector(".menu-btn");

    sidebar.classList.toggle("active");

    if (sidebar.classList.contains("active")) {
        button.innerHTML = "✕";
        button.style.left = "235px";
    } else {
        button.innerHTML = "☰";
        button.style.left = "15px";
    }

}

function showPage(id){

    const pages=document.querySelectorAll(".page");

    pages.forEach(page=>{
        page.classList.remove("active");
    });

    document.getElementById(id).classList.add("active");

}