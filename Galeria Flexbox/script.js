document.querySelectorAll('.image img').forEach(img => {
    img.addEventListener('click', () => {
        alert('No me toques! ' + img.alt);
    });
});