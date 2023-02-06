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
      return this.items.length[0];
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
  
  const queuePhilip = new Queue();
  const queueLe = new Queue();
  const queueAnh = new Queue();
  
  document.getElementById("enqueue-philip").addEventListener("click", function() {
    queuePhilip.enqueue(document.getElementById("input-philip").value);
    document.getElementById("output-philip").innerHTML = "Queue Philip: " + queuePhilip.printQueue();
    document.getElementById("input-philip").value = "";
  });
  
  document.getElementById("dequeue-philip").addEventListener("click", function() {
    queuePhilip.dequeue();
    document.getElementById("output-philip").innerHTML = "Queue Philip: " + queuePhilip.printQueue();
  });
  
  document.getElementById("enqueue-le").addEventListener("click", function() {
    queueLe.enqueue(document.getElementById("input-le").value);
    document.getElementById("output-le").innerHTML = "Queue Le: " + queueLe.printQueue();
    document.getElementById("input-le").value = "";
  });
  
  document.getElementById("dequeue-le").addEventListener("click", function() {
    queueLe.dequeue();
    document.getElementById("output-le").innerHTML = "Queue Le: " + queueLe.printQueue();
  });
  
  document.getElementById("enqueue-anh").addEventListener("click", function() {
    queueAnh.enqueue(document.getElementById("input-anh").value);
    document.getElementById("output-anh").innerHTML = "Queue Anh: " + queueAnh.printQueue();
    document.getElementById("input-anh").value = "";
  });
  
  document.getElementById("dequeue-anh").addEventListener("click", function() {
    queueAnh.dequeue();
    document.getElementById("output-anh").innerHTML = "Queue Anh: " + queueAnh.printQueue();
  });
  