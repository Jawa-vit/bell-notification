document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("notify-button");
    const notify = document.getElementById("notification");

    button.addEventListener("click", () => {
        let count = parseInt(notify.getAttribute("data-count")) || 0;
        count++;
        notify.setAttribute("data-count", count);
        notify.classList.add("active"); 
    });
});
