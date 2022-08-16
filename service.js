let count = 0;
const valueDisplay = document.getElementById("valueDisplay");
const package = document.querySelector('#package');
const show = document.querySelector('#show');

package.addEventListener('click', function () {
    showPackage();
})
show.addEventListener('fadeIn', function () {
    showPackage();
})
function showPackage() {
    show.classList.toggle('hidden');
    show.classList.fadeIn('hidden');

}

function increment() {
    if (count < 7) {
        count++;
    }
    valueDisplay.innerHTML = count;
};


function decrement() {
    if (count > 0) {
        count--;
    }
    valueDisplay.innerHTML = count;
};

let read = 0;
const value1 = document.getElementById("value1");

function increase() {
    if (read < 7) {
        read++;
    }
    value1.innerHTML = read;
};


function decrease() {
    if (read > 0) {
        read--;
    }
    value1.innerHTML = read;
};
