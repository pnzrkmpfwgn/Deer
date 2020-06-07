import React from 'react';
const DeerTalks = () => {
  const sentences = [
    'I totally agree!',
    'Absolutely!',
    'One hundred and twenty percent... Sounds stupid but my computer engineering assitant uses that phrase a lot.',
    'Indeed!',
    'I totally agree... Am I anoying?',
  ];

  const generate_id = Math.floor(Math.random() * sentences.length);
  const sentence = sentences[generate_id];
  return <p>{sentence}</p>;
};

export default DeerTalks;
