import { useEffect, useState } from "react";

import './App.css';

function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8',
      );

      const data = await response.json()
      setData(data);
    })()
  }, [])

  if (!data) {
    return 'loading...';
  }

  return (
    <div className="page">
      <h1>Results for: apples</h1>

      <div className="container">
        {data.response.results.map((item) => (
          <div className="item">
            <div className="frame">
              <img className="image" src={item.data.image_url} />
            </div>

            <div className="name">
              {item.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
