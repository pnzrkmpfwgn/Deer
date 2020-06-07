import axios from 'axios';
import React from 'react';
const RandomUselessFact = async () => {
  try {
    const response = await axios.get(
      'https://uselessfacts.jsph.pl/random.json?language=en'
    );
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export default RandomUselessFact;
