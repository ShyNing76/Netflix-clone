const radios = document.querySelectorAll('input[type="radio"][name="accordion"]');

radios.forEach(radio => {
  radio.addEventListener('click', function() {
    if (this.previousValue === this.value) {
      this.checked = false;
      this.previousValue = null;
    } else {
      this.previousValue = this.value;
    }
  });
});