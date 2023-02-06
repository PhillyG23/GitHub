document.addEventListener("DOMContentLoaded", function() {
    class Queue {
    constructor(barberName) {
    this.barberName = barberName;
    this.items = [];
    }
  
    enqueue(element) {
        this.items.push(element);
      }
      
      dequeue() {
        if (this.isEmpty())
          return "Underflow";
        return this.items.shift();
      }
      
      front() {
        if (this.isEmpty())
          return "No elements in Queue";
        return this.items[0];
      }
      
      isEmpty() {
        return this.items.length == 0;
      }
      
      getQueue() {
        return this.items;
      }
  }
  
  const philip = new Queue("Philip");
  const le = new Queue("Le");
  const anh = new Queue("Anh");
  
  const allQueues = [philip, le, anh];
  
  document.getElementById("add").addEventListener("click", function() {
    const customer = document.getElementById("input").value;
    const selectedBarber = document.querySelector('input[name="barber"]:checked').value;
  
    allQueues.forEach((queue) => {
      if (queue.barberName === selectedBarber) {
        queue.enqueue(customer);
      }
    });
  
    displayQueues();
    document.getElementById("input").value = "";
  });
  
  document.getElementById("remove").addEventListener("click", function() {
    const selectedBarber = document.querySelector('input[name="barber"]:checked').value;
  
    allQueues.forEach((queue) => {
      if (queue.barberName === selectedBarber) {
        queue.dequeue();
      }
    });
  
    displayQueues();
  });
  
  function displayQueues() {
    let output = "";
    allQueues.forEach((queue) => {
      output += `<h2>${queue.barberName}</h2>`;
      output += `<ul>`;
      queue.getQueue().forEach((customer) => {
        output += `<li>${customer}</li>`;
      });
      output += `</ul>`;
    });
    document.getElementById("output").innerHTML = output;
  }
  
});
