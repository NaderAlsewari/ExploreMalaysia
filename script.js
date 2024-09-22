window.onload = function () {
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("#nav a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
};


if (!localStorage.getItem('visited')) {
    alert("Welcome to Explore Malaysia! Enjoy learning about the rich culture and beautiful destinations.");
    localStorage.setItem('visited', 'true');
}

document.querySelectorAll('a').forEach(link => {
    if (!link.href.includes(window.location.hostname)) {
        link.addEventListener('click', function (event) {
            const confirmLeave = confirm("You are about to leave Explore Malaysia. Continue?");
            if (!confirmLeave) {
                event.preventDefault();
            }
        });
    }
});


