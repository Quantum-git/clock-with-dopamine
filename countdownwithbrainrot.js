    const targetDate = new Date("Jan 21, 2026 8:00:00").getTime();
    
    // Store timing information
    let timerState = {
      startTime: performance.now(),
      animationFrameId: null
    };
    
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
    const millisecondsElement = document.getElementById('milliseconds');

    // Format numbers with leading zeros
    function padNumber(number) {
      return number.toString().padStart(2, '0');
    }
    
    // Update the countdown timer display
    function updateCountdown() {

      // Get current time with high precision
      const now = performance.now();

      // Calculate current date/time in milliseconds
      const currentTime = Date.now();
      
      // Find the distance between now and the countdown date
      const distance = targetDate - currentTime;
      
      timerState.animationFrameId = requestAnimationFrame(updateCountdown);

      if (distance <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        millisecondsElement.textContent = '000';
        
        cancelAnimationFrame(timerState.animationFrameId);
        alert("Monster Energy Crash");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(distance % 1000);
      
      daysElement.textContent = padNumber(days);
      hoursElement.textContent = padNumber(hours);
      minutesElement.textContent = padNumber(minutes);
      secondsElement.textContent = padNumber(seconds);
      millisecondsElement.textContent = padNumber(milliseconds, 3);
      
    }
    
    // Start the countdown
    function startCountdown() {
      timerState.startTime = performance.now();
      updateCountdown();
    }

    // Start the countdown on page load
    startCountdown();