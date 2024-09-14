// Get DOM elements
const calendarBody = document.querySelector('.calendar-body');
const monthYearElement = document.getElementById('month-year');
const eventDetails = document.querySelector('.event-details');

// Current date
let currentDate = new Date();

// Function to generate calendar days
function generateCalendar(year, month) {
  calendarBody.innerHTML = '';
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  // Add empty cells for the first week of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('calendar-day');
    calendarBody.appendChild(dayCell);
  }

  // Add days of the month
  for (let i = 1; i <= daysInMonth; i++) {
    const dayCell = document.createElement('div');
    dayCell.classList.add('calendar-day');
    dayCell.textContent = i;
    calendarBody.appendChild(dayCell);
  }
}

// Function to update event details
function updateEventDetails(date) {
  // Replace with your logic to fetch event details from a data source
  const eventData = {
    title: 'January 1, 2020',
    description: 'New Year',
    greeting: 'The heart touching greetings will make feel anyone very special. Wish your near and dear one with our special greetings.'
  };

  eventDetails.querySelector('#event-title').textContent = eventData.title;
  eventDetails.querySelector('#event-description').textContent = eventData.description;
  eventDetails.querySelector('#event-greeting').textContent = eventData.greeting;
}

// Initial calendar generation
generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
monthYearElement.textContent = `${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`;

// Event listeners for navigation buttons and calendar days
const prevMonthBtn = document.querySelector('.prev-month');
const nextMonthBtn = document.querySelector('.next-month');
const calendarDays = document.querySelectorAll('.calendar-day');

prevMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  monthYearElement.textContent = `${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`;
});

nextMonthBtn.addEventListener('click', () => {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar(currentDate.getFullYear(), currentDate.getMonth());
  monthYearElement.textContent = `${currentDate.toLocaleString('en-us', { month: 'long' })} ${currentDate.getFullYear()}`;
});

calendarDays.forEach(day => {
  day.addEventListener('click', () => {
    calendarDays.forEach(day => day.classList.remove('selected'));
    day.classList.add('selected');
    const selectedDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), parseInt(day.textContent));
    updateEventDetails(selectedDate);
  });
});
// ... rest of your JavaScript

// Get references to event form elements
const eventTitleInput = document.getElementById('event-title-input');
const eventDescriptionInput = document.getElementById('event-description-input');
const addEventBtn = document.getElementById('add-event-btn');
const eventForm = document.querySelector('.event-form');

// Function to show/hide event form
function toggleEventForm() {
  eventForm.style.display = eventForm.style.display === 'block' ? 'none' : 'block';
}

// Event listener for add event button
addEventBtn.addEventListener('click', () => {
  const title = eventTitleInput.value;
  const description = eventDescriptionInput.value;

  // Validate input data (add your validation logic here)

  // Create a new event object
  const newEvent = {
    title,
    description,
    date: selectedDate // Assuming you have a selectedDate variable
  };

  // Add the event to the calendar (implement your logic here)

  // Clear form fields and hide the form
  eventTitleInput.value = '';
  eventDescriptionInput.value = '';
  toggleEventForm();
});

// ... rest of your JavaScript