const timerElement = document.getElementById('timerCountDown');
        let timer;

        function startTimeCountDown() {
            timer = 60;
            const timeCountdown = setInterval(countdown, 1000);
        }


        function countdown() {
            if (timer == 0) {
                clearTimeout(timer);
                timerElement.innerHTML = 'Tiden er gået!'

            } else {
                timerElement.innerHTML = timer + ' sekunder tilbage...';
                timer--;
            }
        }

        timerElement.addEventListener('click', ev => {
            startTimeCountDown();
        });