const options = document.querySelectorAll('.option input');
const customizeSections = document.querySelectorAll('.customize');
const total = document.querySelector('.total');
const addToCart = document.querySelector('.add-to-cart');
const optionContainers = document.querySelectorAll('.option');

options.forEach((option, index) => {
    option.addEventListener('change', () => {
        const price = parseFloat(option.dataset.price);
        const discount = parseFloat(option.dataset.discount);
        total.textContent = `Total: $${price.toFixed(2)} USD`;

        // Reset flex and customize visibility
        optionContainers.forEach((container, containerIndex) => {
            container.classList.remove('flexed');
            if (customizeSections[containerIndex]) {
                customizeSections[containerIndex].style.display = 'none';
            }
        });

        // Apply flex to the selected section
        optionContainers[index].classList.add('flexed');
        if (customizeSections[index]) {
            customizeSections[index].style.display = 'flex';
        }
    });
});

addToCart.addEventListener('click', () => {
    alert('Item added to cart!');
});