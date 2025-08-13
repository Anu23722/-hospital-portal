document.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded fired.");
    checkPassword();

    // News Section: Read More/Show Less
    /*
    const newsContainer = document.querySelector('.news-container');
    newsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more-btn')) {
            const btn = e.target;
            const moreText = btn.previousElementSibling.querySelector('.more-text');
            moreText.style.display = moreText.style.display === 'none' || moreText.style.display === '' ? 'inline' : 'none';
            btn.textContent = moreText.style.display === 'none' ? 'Read More' : 'Show Less';
        }
    });

    // Library Section: Search and Filter
    const librarySearch = document.getElementById('library-search');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const libraryItems = document.querySelectorAll('.library-item');

    // Search functionality
    librarySearch.addEventListener('keyup', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        filterItems(searchTerm, document.querySelector('.filter-btn.active').dataset.category);
    });

    // Filter functionality
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.filter-btn.active').classList.remove('active');
            btn.classList.add('active');
            const searchTerm = librarySearch.value.toLowerCase();
            filterItems(searchTerm, btn.dataset.category);
        });
    });

    function filterItems(searchTerm, category) {
        libraryItems.forEach(item => {
            const title = item.querySelector('h4').textContent.toLowerCase();
            const description = item.querySelector('p').textContent.toLowerCase();
            const itemCategory = item.dataset.category;

            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            const matchesCategory = category === 'all' || itemCategory === category;

            if (matchesSearch && matchesCategory) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }
    */
});

function checkPassword() {
    console.log("checkPassword function called.");
    const correctPassword = "123"; // Replace with your desired staff ID
    let enteredPassword = prompt("Please enter your staff ID to access the portal:");

    while (enteredPassword !== correctPassword) {
        enteredPassword = prompt("Incorrect staff ID. Please try again:");
    }

    const portalContent = document.getElementById('portal-content');
    if (portalContent) {
        console.log("portal-content element found.");
        portalContent.style.display = 'block';
        console.log("portal-content display set to block.");
    } else {
        console.error("Error: portal-content element not found!");
    }
}
