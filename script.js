document.addEventListener('DOMContentLoaded', () => {
    const drinkTypeSelect = document.getElementById('drinkType');
    const milkOptionsContainer = document.getElementById('milkOptionsContainer');
    const submitOrderButton = document.getElementById('submitOrder');
    const outputDiv = document.getElementById('output');
  
    // Show/hide milk options when latte is selected
    drinkTypeSelect.addEventListener('change', () => {
      if (drinkTypeSelect.value === 'latte') {
        milkOptionsContainer.style.display = 'block';
      } else {
        milkOptionsContainer.style.display = 'none';
      }
    });
  
    // Handle order submission
    submitOrderButton.addEventListener('click', () => {
      const size = document.getElementById('size').value;
      const drinkType = drinkTypeSelect.value;
      const cupType = document.getElementById('cupType').value;
      const temperature = document.getElementById('temperature').value;
      const name = document.getElementById('name').value;
  
      // Milk options (only for latte)
      let milkType = '';
      if (drinkType === 'latte') {
        milkType = document.getElementById('milkOptions').value;
      }
  
      // Validate inputs
      if (!size || !drinkType || !cupType || !temperature || !name || (drinkType === 'latte' && !milkType)) {
        outputDiv.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
        return;
      }
  
      // Generate order summary
      let orderSummary = `Thanks, ${name}! You ordered a ${size} ${temperature} ${drinkType}.`;
  
      if (milkType) {
        orderSummary += ` Milk type: ${milkType}.`;
      }
  
      orderSummary += ` Cup choice: ${cupType}. Your drink will be ready shortly!`;
  
      outputDiv.innerHTML = `<p>${orderSummary}</p>`;
    });
  });
  

document.addEventListener('DOMContentLoaded', () => {
    const drinkTypeSelect = document.getElementById('drinkType');
    const milkOptionsContainer = document.getElementById('milkOptionsContainer');
    const submitOrderButton = document.getElementById('submitOrder');
    const outputDiv = document.getElementById('output');
  
    // Show/hide milk options with animation
    drinkTypeSelect.addEventListener('change', () => {
      if (drinkTypeSelect.value === 'latte') {
        milkOptionsContainer.style.display = 'block';
        milkOptionsContainer.classList.add('animate');
      } else {
        milkOptionsContainer.style.display = 'none';
        milkOptionsContainer.classList.remove('animate');
      }
    });
  
    // Handle order submission
    submitOrderButton.addEventListener('click', () => {
      const size = document.getElementById('size').value;
      const drinkType = drinkTypeSelect.value;
      const cupType = document.getElementById('cupType').value;
      const temperature = document.getElementById('temperature').value;
      const name = document.getElementById('name').value;
  
      // Milk options (only for latte)
      let milkType = '';
      if (drinkType === 'latte') {
        milkType = document.getElementById('milkOptions').value;
      }
  
      // Validate inputs
      if (!size || !drinkType || !cupType || !temperature || !name || (drinkType === 'latte' && !milkType)) {
        outputDiv.innerHTML = '<p style="color: red;">Please fill out all fields.</p>';
        return;
      }
  
      // Generate order summary
      let orderSummary = `Thanks, ${name}! You ordered a ${size} ${temperature} ${drinkType}.`;
  
      if (milkType) {
        orderSummary += ` Milk type: ${milkType}.`;
      }
  
      orderSummary += ` Cup choice: ${cupType}. Your drink will be ready shortly!`;
  
      outputDiv.innerHTML = `<p>${orderSummary}</p>`;
      outputDiv.style.opacity = 0; // Reset opacity for animation
      setTimeout(() => {
        outputDiv.style.opacity = 1; // Fade-in effect
      }, 100);
    });
  });
  