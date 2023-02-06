window.onload = function() {
    const barbers = [
      {
        id: "queue1",
        enqueueId: "enqueue1",
        dequeueId: "dequeue1",
        clearId: "clear1"
      },
      {
        id: "queue2",
        enqueueId: "enqueue2",
        dequeueId: "dequeue2",
        clearId: "clear2"
      },
      {
        id: "queue3",
        enqueueId: "enqueue3",
        dequeueId: "dequeue3",
        clearId: "clear3"
      }
    ];
  
    barbers.forEach((barber) => {
      document
        .getElementById(barber.enqueueId)
        .addEventListener("click", () => addToQueue(barber.id));
  
      document
        .getElementById(barber.dequeueId)
        .addEventListener("click", () => removeFromQueue(barber.id));
  
      document
        .getElementById(barber.clearId)
        .addEventListener("click", () => clearQueue(barber.id));
    });
  
    function addToQueue(queueId) {
      const input = document.getElementById(queueId.replace("queue", "input"));
      const name = input.value;
  
      if (!name) {
        alert("Please enter a name.");
        return;
      }
  
      const queue = document.getElementById(queueId);
      const li = document.createElement("li");
      li.textContent = name;
      queue.appendChild(li);
      input.value = "";
    }
  
    function removeFromQueue(queueId) {
      const queue = document.getElementById(queueId);
      queue.removeChild(queue.firstChild);
    }
  
    function clearQueue(queueId) {
      const queue = document.getElementById(queueId);
      while (queue.firstChild) {
        queue.removeChild(queue.firstChild);
      }
    }
  };
  