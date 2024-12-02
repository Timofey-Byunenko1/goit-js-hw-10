
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

document.querySelector('.form').addEventListener('submit', (event) => {
    event.preventDefault(); // Зупиняємо стандартну поведінку форми
  

    const delayInput = event.target.elements.delay.value;
    const delay = parseInt(delayInput, 10);
  

    const state = event.target.elements.state.value;
  
    // Створюємо проміс
    createPromise(delay, state)
      .then((delay) => {
        // Виведення успішного повідомлення
        iziToast.success({
          title: '✅ Success',
          message: `Fulfilled promise in ${delay}ms`,
          position: 'topRight',
        });
      })
      .catch((delay) => {
    
        iziToast.error({
          title: '❌ Error',
          message: `Rejected promise in ${delay}ms`,
          position: 'topRight',
        });
      });
  });
  
  // Функція для створення промісу
  function createPromise(delay, state) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay); // Успіх
        } else {
          reject(delay); // Помилка
        }
      }, delay);
    });
  }