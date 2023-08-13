import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Carousel from '../components/Carousel';

export default function Home() {
  const [foodCat, setFoodCat] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [search, setSearch] = useState('');

  const loadFoodItems = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/foodData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const responseData = await response.json();
      setFoodItems(responseData[0]);
      setFoodCat(responseData[1]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadFoodItems();
  }, []);

  return (
    <div>
      <Navbar />
      <div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade " data-bs-ride="carousel">
          <Carousel />
        </div>
      </div>
      <div className='container'>
        {foodCat.length > 0 &&
          foodCat.map(data => (
            <div className='row mb-6' key={data.id}>
              <div className='fs-3 m-3'>{data.CategoryName}</div>
              {foodItems.length > 0
                ? foodItems
                  .filter(
                    items =>
                      items.CategoryName === data.CategoryName &&
                      items.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map(filterItems => (
                    <div key={filterItems.id} className='col-12 col-md-6 col-lg-4 '>
                      <Card
                        foodName={filterItems.name}
                        item={filterItems}
                        options={filterItems.options[0]}
                        ImgSrc={filterItems.img}
                      />
                    </div>
                  ))
                : <div>No Such Data</div>}

              <div>
                <br />
              </div>
              <hr />
            </div>
          ))}
      </div>
      <Footer />
    </div>
  );
}
