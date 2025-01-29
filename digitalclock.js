function updateClock() {
    const now = new Date();
  
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const date = now.toLocaleDateString(undefined, options);
  
    const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  
    document.getElementById('date').textContent = date;
    document.getElementById('time').textContent = time;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); 
  