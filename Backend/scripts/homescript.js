function showPopup() {
    document.getElementById("address-popup").style.display = "block";
    document.getElementById("overlay").style.display = "block"; 
}

function hidePopup() {
    document.getElementById("address-popup").style.display = "none";
    document.getElementById("filters-popup").style.display = "none";
    document.getElementById("overlay").style.display = "none"; 
}

function showFiltersPopup() {
    document.getElementById("filters-popup").style.display = "block";
    document.getElementById("overlay").style.display = "block"; 
}


window.onscroll = function() {
    shrinkNavOnScroll();
};

function shrinkNavOnScroll() {
    var nav = document.querySelector('nav');
    var header2 = document.querySelector('.header2');
    var coloredLetters = document.querySelectorAll('.color-letter');
    var blackLetterB = document.querySelector('.black-letter.b');
    var blackLetterU = document.querySelector('.black-letter.u');
    var blackLetterD = document.querySelector('.black-letter.d');
    var filtersButton = document.querySelector('.filters');
    var knowMoreButton = document.querySelector('.Know-more');

    if (window.scrollY > 50) {
        nav.style.height = "10vw";
        nav.style.backgroundImage = "none";
        if (header2) header2.style.display = "none";
        coloredLetters.forEach(function(letter) {
            letter.style.display = "none";
        });
        if (blackLetterB) blackLetterB.classList.add('move-b');
        if (blackLetterU) blackLetterU.classList.add('move-u');
        if (blackLetterD) blackLetterD.classList.add('move-d');
        if (filtersButton) filtersButton.style.display = "none";
        if (knowMoreButton) knowMoreButton.style.display = "none";
    } else {
        nav.style.height = "40vw";
        nav.style.backgroundImage =
            "url('../../Images/Homeicons/house1.png'), " +
            "url('../../Images/Homeicons/house2.png'), " +
            "url('../../Images/Homeicons/house3.png')";
        if (header2) header2.style.display = "block";
        coloredLetters.forEach(function(letter) {
            letter.style.display = "inline";
        });
        if (blackLetterB) blackLetterB.classList.remove('move-b');
        if (blackLetterU) blackLetterU.classList.remove('move-u');
        if (blackLetterD) blackLetterD.classList.remove('move-d');
        if (filtersButton) filtersButton.style.display = "block";
        if (knowMoreButton) knowMoreButton.style.display = "block";
    }
}



function showDropdown() {
    const searchBar = document.querySelector('.searchbar');
    const dropdown = document.getElementById('search-dropdown');

    const rect = searchBar.getBoundingClientRect();
    dropdown.style.top = rect.bottom + window.scrollY + "px";
    dropdown.style.left = rect.left + "px";
    dropdown.style.display = "block";
}

function hideDropdown() {
    setTimeout(() => {
        document.getElementById("search-dropdown").style.display = "none";
    }, 200);
}

window.addEventListener('scroll', updateDropdownPosition);
window.addEventListener('resize', updateDropdownPosition);

function updateDropdownPosition() {
    const searchBar = document.querySelector('.searchbar');
    const dropdown = document.getElementById('search-dropdown');

    if (dropdown.style.display === "block") {
        const rect = searchBar.getBoundingClientRect();
        dropdown.style.top = rect.bottom + window.scrollY + "px";
        dropdown.style.left = rect.left + "px";
    }
}

const searchbar = document.querySelector('.searchbar');
const dropdownItems = document.querySelectorAll('.search-dropdown li:not(#no-results)');
const noResults = document.getElementById('no-results');

searchbar.addEventListener('input', function () {
    const query = this.value.toLowerCase();
    let hasResults = false;

    dropdownItems.forEach(item => {
        if (item.textContent.toLowerCase().includes(query)) {
            item.style.display = 'block';
            hasResults = true;
        } else {
            item.style.display = 'none';
        }
    });

    if (!hasResults) {
        noResults.style.display = 'block';
    } else {
        noResults.style.display = 'none';
    }
});

dropdownItems.forEach(item => {
    item.addEventListener('click', function () {
        searchbar.value = this.textContent;
        hideDropdown();
    });
});