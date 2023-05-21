function updateDateTime() {
    var now = new Date();
    var greeting = document.getElementById('greeting');
    var datetime = document.getElementById('datetime');
    
    var hour = now.getHours();
    var greetingText = '';
    
    if (hour < 12) {
        greetingText = 'Good morning, Bagus!';
    } else if (hour < 18) {
        greetingText = 'Good afternoon, Bagus!';
    } else {
        greetingText = 'Good evening, Bagus Ahlul!';
    }
    
    greeting.textContent = greetingText;
    datetime.textContent = now.toLocaleString();
}

updateDateTime(); 

setInterval(updateDateTime, 1000);