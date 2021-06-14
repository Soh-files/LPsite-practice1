document.addEventListener('DOMContentLoaded', function () {

    // 資料請求のコンテンツまでスクロールする
    document.addEventListener('scroll', function() {
        const $contactForm = document.getElementById('contactform');
        const contactHeight = $contactForm.getBoundingClientRect();
        const contactTop = contactHeight.top + window.pageYOffset;
        const $contactBtn = document.querySelectorAll('.contact');
        const $contactBtn2 = document.getElementById('contactbtn');
    
        for(let i = 0; i < $contactBtn.length; i++) {
            $contactBtn[i].addEventListener('click', function (e) {
                e.preventDefault();
                document.documentElement.scrollTop = contactTop - 100;
            });
        }
        $contactBtn2.addEventListener('click', function(e) {
            e.preventDefault();
            document.documentElement.scrollTop = contactTop - 100;
        });
    })

    // モバイル画面ではiSaraの流れをアコーディオンメニューで表示する
    const $icon = document.querySelectorAll('.flowicon');
    const flowContentHeight = [];
    let windowWidth;
    
    for(let j = 0; j < $icon.length; j++) {
        flowContentHeight[j] = $icon[j].nextElementSibling.clientHeight + "px";
        $icon[j].nextElementSibling.style.height = flowContentHeight[j] + "px";

        if ($icon[j].nextElementSibling.classList.contains('closed')) {
            $icon[j].nextElementSibling.style.height = "0px";
        }

        $icon[j].addEventListener('click', function(e) {
            let num = Array.prototype.indexOf.call($icon, this);
            e.preventDefault();
            this.classList.toggle('open');
            this.nextElementSibling.classList.toggle('open');
            this.nextElementSibling.classList.toggle('closed');
            if(this.nextElementSibling.classList.contains('open')) {
                this.nextElementSibling.style.height = flowContentHeight[num];
            } else {
                this.nextElementSibling.style.height = "0px";
            }
        });
    };

    document.addEventListener('scroll', function() {
        windowWidth = innerWidth;
        for (let num = 0; num < $icon.length; num++) {
            if(windowWidth < 769) {
                $icon[num].nextElementSibling.style.height = "0px";
            } else {
                $icon[num].nextElementSibling.style.height = flowContentHeight[num];
            }
        }
    });
    
    // Q&Aの項目はアコーディオンで表示する
    const $question = document.querySelectorAll('.question');
    const AnswerContentHeight = [];

    for(let k = 0; k < $question.length; k++) {
        AnswerContentHeight[k] = $question[k].nextElementSibling.clientHeight + "px";
        $question[k].nextElementSibling.style.height = AnswerContentHeight[k] + "px";

        if (!$question[k].nextElementSibling.classList.contains('open')) {
            $question[k].nextElementSibling.style.height = "0px";
            $question[k].nextElementSibling.style.padding = "0";
        };

        $question[k].addEventListener('click', function(e) {
            let index = Array.prototype.indexOf.call($question, this);
            e.preventDefault();
            this.classList.toggle('open');
            this.nextElementSibling.classList.toggle('open');
            if(this.nextElementSibling.classList.contains('open')) {
                this.nextElementSibling.style.height = AnswerContentHeight[index];
                this.nextElementSibling.style.padding = "20px 15px";
            } else {
                this.nextElementSibling.style.height = "0px";
                this.nextElementSibling.style.padding = "0";
            }
        });
    };

    // 画面下部のボタンでページトップに戻る
    let pageHeight;
    document.addEventListener('scroll', function(){
        pageHeight = window.pageYOffset;
    });

    const $topBtn = document.getElementById('top-btn');
    let timer = null;

    function setTimer () {
        if (pageHeight === 0) {
            clearInterval(timer);
        }
        window.scrollTo(0, pageHeight - 200);
    }
    $topBtn.addEventListener('click', function () {
        timer = setInterval(setTimer, 10);
    });
});

