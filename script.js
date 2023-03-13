document.querySelectorAll('.accordion_btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion_btn_active');

        if (button.classList.contains('accordion_btn_active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})