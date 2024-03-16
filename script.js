let count = 1; // Initial count value set to 1
const countDisplay = document.getElementById('count-value');
const errorDisplay = document.getElementById('error');
const decrementButton = document.getElementById('decrement');

function updateCount() {
    countDisplay.textContent = count;
    if (count === 0) {
        decrementButton.disabled = true;
        errorDisplay.style.display = 'block';
    } else {
        decrementButton.disabled = false;
        errorDisplay.style.display = 'none';
    }
}

function increment() {
    count++;
    updateCount();
}

function decrement() {
    if (count > 0) {
        count--;
        updateCount();
    } else {
        errorDisplay.style.display = 'block';
    }
}

function clearCount() {
    count = 0;
    updateCount();
}
