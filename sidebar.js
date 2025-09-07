const bar = document.getElementById("burger");
const xBtn = document.getElementById("hide-x");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

bar.addEventListener("click", function () {
    bar.style.display = "none";
    xBtn.style.display = "inline";
    sidebar.style.right = "0";
    overlay.style.display = "block"; 
});

xBtn.addEventListener("click", closeSidebar);
overlay.addEventListener("click", closeSidebar);

function closeSidebar() {
    xBtn.style.display = "none";
    bar.style.display = "inline";
    sidebar.style.right = "-100%";
    overlay.style.display = "none"; 
}
