document.addEventListener('DOMContentLoaded', function() {
    const dropdownButton = document.getElementById('dropdownButton');
    const dropdownContent = document.getElementById('dropdownContent');
    const arrowIcon = document.getElementById('arrowIcon');

    dropdownButton.addEventListener('click', function() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            arrowIcon.classList.remove('up');
            arrowIcon.classList.add('down');
        } else {
            dropdownContent.style.display = "block";
            arrowIcon.classList.remove('down');
            arrowIcon.classList.add('up');
        }
    });

    // Close the dropdown if the user clicks outside of it
    window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropdown-button') && !event.target.matches('.arrow')) {
            dropdownContent.style.display = "none";
            arrowIcon.classList.remove('up');
            arrowIcon.classList.add('down');
        }
    });
});