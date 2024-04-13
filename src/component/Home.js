import React, { useEffect, useState } from 'react';
import "./Homec.css"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>

    <div className='contain'>
      <h1>User Data</h1>
    <div className='connn-1'>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.name} | {item.email}
          </li>
        ))}
      </ul>
    </div>
    </div>

    
    </>
  );
};

export default Home;
