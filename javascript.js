// Scroll Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
});

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Search Icon Alert (Demo)
document.querySelector('.fa-search').addEventListener('click', () => {
    const query = prompt("🔍 Search Yonex products:");
    if (query) {
        window.open(`https://us.yonex.com/search?q=${encodeURIComponent(query)}`, '_blank');
    }
});

// Console Message
console.log('%c✅ Yonex Official Website Clone Loaded Successfully!', 'color: #00A651; font-size: 16px; font-weight: bold;');