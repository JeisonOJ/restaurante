// Elements
const orderNowButton = document.getElementById('orderNowButton');
const orderForm = document.getElementById('orderForm');
const overlay = document.getElementById('overlay');
const closeButton = document.getElementById('closeButton');

orderNowButton.addEventListener('click', function() {
  orderForm.style.display = 'block';
  overlay.style.display = 'block';
});

closeButton.addEventListener('click', function() {
  orderForm.style.display = 'none';
  overlay.style.display = 'none';
});

// Handle form submission
document.getElementById('orderDetailsForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value;
  const order = document.getElementById('order').value;
  const address = document.getElementById('address').value;

  alert(`Thank you, ${name}! Your order for "${order}" will be delivered to "${address}" soon.`);
  
  this.reset();
  orderForm.style.display = 'none';
  overlay.style.display = 'none';
});