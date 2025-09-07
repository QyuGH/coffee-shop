const link = document.querySelectorAll(".cat-link");
const menu = document.querySelectorAll(".category-container");

link.forEach(linkBtn => {
    linkBtn.addEventListener("click", function(e){
        e.preventDefault();

        const target = this.dataset.target;

        menu.forEach(menu => menu.style.display = 'none');

        document.getElementById(target).style.display = 'flex';

        link.forEach(l => l.classList.remove("active"));

        this.classList.add("active");
    });
});