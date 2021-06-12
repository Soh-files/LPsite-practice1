const $Icon = document.querySelectorAll('.flowicon');
const $Text = document.querySelectorAll('.flowtext');

for(i = 0; i < $Icon.length; i++) {
    $Icon[i].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
    });
};

const $question = document.querySelectorAll('.question');
for (j = 0; j < $question.length; j++) {
    $question[j].addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle('open');
        this.nextElementSibling.classList.toggle('open');
    });
}
