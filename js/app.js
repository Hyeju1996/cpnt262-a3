const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  // Possible values for `day`: 
  // 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'
  const day = form.day.value; 

  // Possible values for `meal`: 
  // 'breakfast', 'lunch', 'dinner'
  const meal = form.meal.value; 

  console.log(day, meal);

  // Declare a variable to hold the answer
  let answer;

  /*************************************/
  /* ^^^ Don't edit the above code ^^^ */
  /*************************************/

  /***********************/
  /* Put your code below */
  /***********************/

  // Using if, else if and else blocks: assign a meal recommendation to `answer` based on the submitted options for `day` and `meal`.
if (day === 'mon' && meal ==='breakfast'){
    answer = "octmeal";
   }
else if (day === 'mon' && meal === 'lunch'){
    answer = 'piza';
   }
else if (day === 'mon' && meal === 'dinner'){
    answer = 'chicken';
   }
if (day === 'tue' && meal === 'breakfast'){
  answer = 'salad';
 }
else if (day === 'tue' && meal === 'lunch'){
  answer = 'taco';
}
else if (day === 'tue' && meal === 'dinner'){
  answer = 'stake'
}
if (day === 'wed' && meal === 'breakfast'){
  answer = 'pancaks'
}
else if (day === 'wed' && meal === 'lunch'){
  answer = 'sushi'
}
else if (day === 'wed' && meal === 'dinner'){
  answer = 'coren bread'
}
if (day === 'thu' && meal === 'breakfast'){
  answer = 'pie'
}
else if (day === 'thu' && meal === 'lunch'){
  answer = 'donuts'
}
else if (day === 'thu' && meal === 'dinner'){
  answer = 'wrap'
}
if (day === 'fri' && meal === 'breakfast'){
  answer = 'chouder crea soup'
}
else if (day === 'fri' && meal === 'lunch'){
  answer = 'sadwhich'
}
else if (day === 'fri' && meal === 'dinner'){
  answer ='ramen'
}
if (day === 'sat' && meal === 'breakfast'){
  answer = 'pasta'
}
else if (day === 'sat' && meal ==='lunch'){
  answer = 'BBQ'
}
else if (day ==='sat' && meal === 'dinner'){
  answer = 'hambuger'
}
if (day === 'sun' && meal === 'breakfast'){
  answer = 'bowl of rice'
}
else if (day === 'sun' && meal === 'lunch'){
  answer = "fris"
}
else if (day === 'sun' && meal === 'dinner'){
  answer = 'cary'
}

  /************************************/
  /* Don't edit the rest of this code */
  /************************************/

  output.innerHTML = answer;

}

form.addEventListener('submit', handleSubmit);