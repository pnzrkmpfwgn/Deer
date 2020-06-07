const randomGreeting = () => {
  const greetings = [
    "What's up?",
    "What's up mate?",
    "How's goin' on?",
    'Hello!',
    'Yo, look over here!',
    'Howdy?',
    'Oh, hello there',
  ];
  const d = new Date();

  if (d.getHours() < 12) {
    greetings.push("top o' the mornin' to ya lad!");
  } else if (d.getHours() > 12 && d.getHours() < 19) {
    greetings.push('Good afternoon!');
  } else if (d.getHours() > 19) {
    greetings.push('Good Evening!');
  }

  const generate_id = Math.floor(Math.random() * greetings.length);

  const greeting = greetings[generate_id];
  return greeting;
};

export default randomGreeting;
