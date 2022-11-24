import { useEffect, useState } from "react";
import { BaseURL } from "../config";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(BaseURL + 'products')
      .then(result => result.json())
      .then(data => setProducts(data))
  }, []);
  console.log(products)
  return (<div>
    <h1>
      Welcome Ankit
    </h1>
    <div style={{ display: 'flex', flexWrap: 'wrap', width: '100%', gap: '20px' }}>
      {products && products.map(item => {
        return (
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '400px',
            border: '1px solid',
            padding: '10px',
            borderRadius: '24px'
          }}>
            <img src={item.image} alt={item.title} width={'100px'} height={'100px'} />
            <p>{item.title}</p>
            <p>{item.price}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
          </div>
        )
      })}
    </div>
  </div>);
}

export default Dashboard;