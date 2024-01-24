let currentStep = 1;
const circles = document.querySelectorAll('.circle');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function updateButtons() {
  prevButton.disabled = currentStep === 1;
  nextButton.disabled = currentStep === circles.length;
}

function updateProgress() {
  circles.forEach((circle, index) => {
    if (index < currentStep) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });

  const lines = document.querySelectorAll('.line');
  lines.forEach((line, index) => {
    line.style.backgroundColor = index < currentStep - 1 ? 'blue' : '#ccc';
  });
}


function prevStep() {
  if (currentStep > 1) {
    currentStep--;
    updateProgress();
    updateButtons();
  }
}

function nextStep() {
  if (currentStep < circles.length) {
    currentStep++;
    updateProgress();
    updateButtons();
  }
}
