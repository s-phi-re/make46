document.addEventListener('DOMContentLoaded', function () {
    let count = 0;
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            let number = event.target.id;
            count++;
            const result = document.querySelector('.show_result');
            result.innerHTML = count * number;
            const originalColor = getComputedStyle(result).backgroundColor;
            result.style.backgroundColor = 'rgb(255,65,65)';
            let color = 65;
            let fadeout = setInterval(() => {
                color += 10;
                result.style.backgroundColor = `rgb(255,${color},${color})`;

                if (color >= 255) {
                    clearInterval(fadeout);
                    result.style.backgroundColor = originalColor;
                }
            }, 30);
        });
    });
});