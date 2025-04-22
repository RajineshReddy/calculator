const display = document.getElementById('display');
    
    
    function appendValue(value) {
      display.value += value;
    }
    
   
    function clearDisplay() {
      display.value = '';
    }
    
    
    function calculateResult() {
      try {
        display.value = eval(display.value);
      } catch (error) {
        display.value = 'Error';
      }
    }
    
    
    function calculateRoot() {
      try {
        let currentValue = parseFloat(display.value);
        if (!isNaN(currentValue) && currentValue >= 0) {
          display.value = Math.sqrt(currentValue);
        } else {
          display.value = 'Error';
        }
      } catch (error) {
        display.value = 'Error';
      }
    }