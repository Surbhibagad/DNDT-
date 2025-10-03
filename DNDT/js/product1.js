document.addEventListener('DOMContentLoaded', () => {

    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to the clicked button and its corresponding content
            const targetTabId = button.getAttribute('data-tab');
            const targetTabContent = document.getElementById(targetTabId);

            button.classList.add('active');
            targetTabContent.classList.add('active');
        });
    });

    // Quantity selector functionality
    const decrementBtn = document.querySelector('.decrement-btn');
    const incrementBtn = document.querySelector('.increment-btn');
    const quantityInput = document.querySelector('.quantity-input input');

    decrementBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    incrementBtn.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });

});