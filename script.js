const $Icon = document.querySelectorAll('.flowicon');
const $Text = document.querySelectorAll('.flowtext');

for(i = 0; i < $Icon.length; i++) {
    $Icon[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
    });
};

