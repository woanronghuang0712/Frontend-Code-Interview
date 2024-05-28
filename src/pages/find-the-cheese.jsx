import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Maze from '../components/Maze';
import { MainTitle } from '../components/utils';

export default function FindTheCheese() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiEndpoint = '/api/maze';

    const fetchData = async () => {
      try {
        const response = await axios.get(apiEndpoint);
        setData(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <MainTitle>Find the cheese</MainTitle>
      <div className="flex justify-center mt-4">
        Click 'Start' to see how the mouse finds the cheese by using DFS!
      </div>
      <div>
        {data && data.map((e, idx) => <Maze currentMaze={e} key={idx} />)}
      </div>
    </div>
  )
}
