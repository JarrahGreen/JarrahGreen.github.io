//Check if the document is loaded (so that this script can be placed in the <head>)
document.addEventListener("DOMContentLoaded", () => {

    // Use Intersection Observer to determine if objects are within the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    });

    // Get all the elements with the .animate class applied
    const allAnimatedElements = document.querySelectorAll('.animate');

    // Add the observer to each of those elements
    allAnimatedElements.forEach((element) => observer.observe(element));

});


function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

document.addEventListener('DOMContentLoaded', () => {
    const startButton = document.querySelector('#Start');


    function start() {
        const root = document.querySelector('#Start')

        const cursor = document.createElement('div')
        cursor.classList.add('cursor')
        root.appendChild(cursor)

        root.addEventListener('mouseMove', (event) => {
            setPosition(cursor, event)
        });
    }

    function setPosition(element, e) {
        element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
    }

    startButton.onclick = start;
});