const names = ["Lisa", "Kaitlin", "Jan"];


function writeCards() {
  const birthday = [];
  for (let i = 0; i < names.length; i++) {
    birthday.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
  }
    return birthday;
}

writeCards();

function countDown() {
    let countDown = 10;
    while (countDown >= 0) {
    console.log(countDown--);
    } 
  }
  
  countDown ();
