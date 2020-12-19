import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id:1,
    name: "kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj406AKZN9ILW8_LqHQL0gyV0cIb6QcYLaHA&usqp=CAU"
  },
  {
    id:2,
    name: "samgiupsal",
    image: "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg",
    rating: 4.5
  },
  {
    id:3,
    name: "bibimbab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8nrLeU_kj8dStJg54tkAo-VdXZVaAZFp0A&usqp=CAU",
    rating: 4
  }
]

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>rating: {rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number
};

function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />;
}

function App() {
  return (
    <div>
      {
        //console.log(foodILike.map(renderFood))
      }
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
