document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.querySelector("#name");
    const delayInput = document.querySelector("#delay");
    const button = document.querySelector("#set-alarm");
    const output = document.querySelector("#output");
  
    function alarm(person, delay) {
      return new Promise((resolve, reject) => {
        if (delay < 0) {
          reject(new Error("Alarm delay must not be negative"));
          return;
        }
        setTimeout(() => {
          resolve(`Wake up, ${person}!`);
        }, delay);
      });
    }
  
    button.addEventListener("click", async () => {
      const delayValue = parseInt(delayInput.value, 10);
      if (isNaN(delayValue)) {
        output.textContent = "Please enter a valid number for delay.";
        return;
      }
  
      try {
        const message = await alarm(nameInput.value, delayValue);
        output.textContent = message;
      } catch (error) {
        output.textContent = `Couldn't set alarm: ${error.message}`;
      }
    });
  });
  