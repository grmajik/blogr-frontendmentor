const nav = document.querySelector(".nav");
const allButtons = document.querySelectorAll(".dropbtn");

allButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.nextElementSibling.classList.toggle("show");
        console.log('yay!');
    })
})

window.onclick = (event) => {
    if (!event.target.matches('.dropbtn')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            if (dropdowns[i].classList.contains('show')) {
                dropdowns[i].classList.remove('show');
            }
        }
    }
}