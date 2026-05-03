const form = document.getElementById('blogForm');
const iframe = document.querySelector('iframe[name="hidden_iframe"]');
const toast = document.getElementById('toast');
const advancedToggle = document.querySelector('.advanced-toggle');
const advancedOptions = document.getElementById('advancedOptions');
const infoButton = document.getElementById('infoButton');
const infoTooltip = document.getElementById('infoTooltip');

let isSubmitting = false;

// Advanced Options Toggle
if (advancedToggle) {
  advancedToggle.addEventListener('click', () => {
    advancedToggle.classList.toggle('active');
    advancedOptions.classList.toggle('show');
  });
}

// Info Button Toggle
if (infoButton && infoTooltip) {
  infoButton.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Info button clicked');
    infoTooltip.classList.toggle('show');
  });

  // Close tooltip when clicking outside
  document.addEventListener('click', (e) => {
    if (infoTooltip.classList.contains('show') && !e.target.closest('.label-with-info')) {
      infoTooltip.classList.remove('show');
    }
  });
} else {
  console.warn('Info button or tooltip elements not found');
}

form.addEventListener('submit', () => {
  isSubmitting = true;
});

iframe.addEventListener('load', () => {
  if (isSubmitting) {
    toast.classList.add('show');
    form.reset();

    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);

    isSubmitting = false;
  }
});
