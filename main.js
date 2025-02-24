document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    let judge = true;
    let color = 255;
    let number = 0;
    let stock = 0;
    let current = 0;
    const answer = 46;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            if (judge && color === 255) {
                const result = document.querySelector('.show_result');
                number = event.target.id;
                count++;
                current = ((count * number) + stock);
                result.innerHTML = current;
                const originalColor = 'rgb(255,255,255)';
                result.style.backgroundColor = 'rgb(255,65,65)';
                color = 65;
                if (current === answer) {
                    judge = false;
                    result.innerHTML = current;
                    result.style.backgroundColor = 'rgb(255,65,65)';
                    result.style.color = 'rgb(255,255,255)';
                } else {
                    let fadeout = setInterval(() => {
                        color += 10;
                        result.style.backgroundColor = `rgb(255,${color},${color})`;

                        if (color === 255) {
                            clearInterval(fadeout);
                            result.style.backgroundColor = originalColor;
                        }
                    }, 20);
                }
                stock = Number(number);

                setTimeout(() => {
                    if (current === answer) {
                        judge = false;
                        result.style.backgroundColor = 'rgb(255,65,65)';
                        result.style.color = 'rgb(255,255,255)';
                    }
                }, 480);
                setTimeout(() => {
                    if (current === answer) {
                        result.innerHTML = 'CLEAR!';
                        count = 0;
                        const tweet = document.querySelector('.tweet');
                        tweet.style.display = 'block';
                    }
                }, 2000);
            } else {
                /*クリア後は何も起きない*/
            }
        });
    });
});