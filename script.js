/* ==========================
   CardZen - script.js
========================== */

const googleBtn = document.getElementById("googleLogin");

// Demo Google Login
if (googleBtn) {
    googleBtn.addEventListener("click", () => {

        googleBtn.innerHTML = "Signing In...";

        googleBtn.disabled = true;

        setTimeout(() => {

            localStorage.setItem("cardzenUser", "true");

            window.location.href = "dashboard.html";

        }, 1500);

    });
}

/* Navbar Shadow */

window.addEventListener("scroll", () => {

    const nav = document.querySelector("nav");

    if (!nav) return;

    if (window.scrollY > 20) {

        nav.style.boxShadow = "0 10px 30px rgba(0,0,0,.45)";

    } else {

        nav.style.boxShadow = "none";

    }

});

/* Fade Animation */

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: .15
});

document.querySelectorAll(".feature").forEach((item) => {

    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = ".7s";

    observer.observe(item);

});

/* Floating Card */

const card = document.querySelector(".demo-card");

if (card) {

    setInterval(() => {

        card.animate([
            {
                transform: "translateY(0px)"
            },
            {
                transform: "translateY(-12px)"
            },
            {
                transform: "translateY(0px)"
            }

        ], {

            duration: 2500,
            iterations: 1

        });

    }, 2600);

}

/* Mouse Glow */

document.addEventListener("mousemove", (e) => {

    document.body.style.background =
        `radial-gradient(circle at ${e.clientX}px ${e.clientY}px,
        rgba(212,175,55,.08),
        #090909 45%)`;

});

/* Loader */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = ".6s";

        document.body.style.opacity = "1";

    }, 100);

});
