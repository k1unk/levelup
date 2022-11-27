let btns = document.getElementsByClassName('order__button');
for (let i = 0; i < btns.length; ++i) {
    btns[i].addEventListener('click', function (e) {
        let blockToScroll = document.getElementById("order-block").offsetTop;
        window.scrollTo({top: blockToScroll, behavior: 'smooth'});
    });
}

let startTimer = () => {
    let timerSeconds = 1800
    let getTimerString = () => {
        let minutes = Math.floor((timerSeconds) / 60)
        let seconds = timerSeconds % 60
        if (seconds < 10) seconds = `0${seconds}`
        return `${minutes}:${seconds}`
    }

    let timer = setInterval(() => {
        if (timerSeconds === 0) {
            clearInterval(timer);
        }
        document.getElementById("timer").innerHTML = getTimerString();
        timerSeconds--
    }, 1000);

}

let timerStarted = false
window.onscroll = function (e) {
    let scrollToElem = document.getElementById("order-block").offsetTop - window.innerHeight
    let winScrollTop = document.documentElement.scrollTop;
    if (winScrollTop > scrollToElem) {
        if (!timerStarted) {
            timerStarted = true
            startTimer()
        }
    }
};

