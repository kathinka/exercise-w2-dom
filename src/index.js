
const radioButtons = document.querySelectorAll('input[type="radio"]');
const swap = document.querySelector('.box');

const removeStyle = setInterval(function () {
    swap.classList.remove('light', 'crazy', 'dark');
}, 8000);


radioButtons.forEach(radio => {
    radio.addEventListener('change', function () {
        if (this.value === 'dark') {
            swap.classList.add('dark', 'color-transition');
            swap.classList.remove('light', 'crazy');
            const text = swap.children[0];
            text.innerHTML = ("This is a box with text that will change color when you toggle the theme switch \n- but also the text, fonts, font colors, and size!")

        }

        else if (this.value === 'light') {
            swap.classList.add('light', 'color-transition');
            swap.classList.remove('dark', 'crazy');
        }

        else if (this.value === 'crazy') {
            swap.classList.add('crazy', 'color-transition');
            swap.classList.remove('light', 'dark');

        }

    }

    );

    removeStyle;
}

);