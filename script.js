document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".carousel-item");
    const total = items.length;
    let currentIndex = 2;

    function updateCarousel() {
        items.forEach((item, index) => {
            let relativeIndex = (index - currentIndex + total) % total;
            item.classList.remove("center");
            item.classList.remove("mid-left");
            item.classList.remove("mid-right");
            item.classList.remove("small-left");
            item.classList.remove("small-right");
            if (relativeIndex === 0) {
                item.classList.add("center");
            } else if (relativeIndex === 1) {
                item.classList.add("mid-left");
            } else if (relativeIndex === total - 1){
                item.classList.add("mid-right");
            } else if (relativeIndex === 2) {
                item.classList.add("small-left");
            } else if (relativeIndex === total - 2) {
                item.classList.add("small-right");
            } else {
                item.style.display = "none";
            }
        });
    }

    document.getElementById("nextBtn").addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCarousel();
    });

    document.getElementById("prevBtn").addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % total;
        updateCarousel();
    });

    updateCarousel();
});
