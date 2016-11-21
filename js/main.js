var body = document.querySelector('body');

var bookingBtn = document.querySelector('.booking-btn-top');

var bookingContainer = document.querySelector('.booking-form');

// добавляем класс для боди
body.classList.add('js-yes');

// нажатие кнопки
bookingBtn.addEventListener('click', function (event) {
  event.preventDefault();
  bookingContainer.classList.toggle('booking-form-show');
});