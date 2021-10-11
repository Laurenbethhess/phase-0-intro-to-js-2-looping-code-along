function writeCards(array, event) {
  let message = [];
  for (let i = 0; i < array.length; i++) {
    message.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`)
  }
    return message;
}

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--);
    } 
  }
