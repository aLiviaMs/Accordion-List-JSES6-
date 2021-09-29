const buttons = document.querySelectorAll('.accordion-button');

document.querySelectorAll('.accordion-content').forEach(item => {
    item.style.maxHeight = 0;
})

buttons.forEach(button => {

    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            accordionContent.style.borderBottom = "1px solid #7D7089"
        } else {
            accordionContent.style.maxHeight = 0;
            accordionContent.style.border = "none"

        }
    })
})