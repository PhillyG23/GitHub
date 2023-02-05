class Queue {
    constructor() {
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
  
    printQueue() {
      let str = "";
      for (let i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
      return str;
    }
  }
  
  const queue = new Queue();
  
  document.getElementById("enqueue").addEventListener("click", function() {
    queue.enqueue(document.getElementById("input").value);
    document.getElementById("output").innerHTML = "Queue: " + queue.printQueue();
    document.getElementById("input").value = "";
  });
  
  document.getElementById("dequeue").addEventListener("click", function() {
    queue.dequeue();
    document.getElementById("output").innerHTML = "Queue: " + queue.printQueue();
  });
  