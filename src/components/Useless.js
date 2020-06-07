import React, {useEffect, useState} from 'react';
import axios from 'axios';
const UselessFact = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        'https://uselessfacts.jsph.pl/random.json?language=en'
      );
      setData(result.data.text);
    };
    fetchData();
  }, []);

  return <p>{data}</p>;
};

export default UselessFact;
