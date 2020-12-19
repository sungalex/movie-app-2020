import React from 'react';

function Food({name, img}) {
return <div>
  <h2>I like {name}</h2>
  <img src={img} />
</div>

}

const foodILike = [
  {
    name: "kimchi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj406AKZN9ILW8_LqHQL0gyV0cIb6QcYLaHA&usqp=CAU"
  },
  {
    name: "samgiupsal",
    image: "https://i.pinimg.com/originals/c4/c5/d5/c4c5d5d428634b5ddf1aabd9f98faf60.jpg"
  },
  {
    name: "bibimbab",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA8nrLeU_kj8dStJg54tkAo-VdXZVaAZFp0A&usqp=CAU"
  }
]

function App() {
  return (
    <div>
      {foodILike.map(dish => <Food name={dish.name} img={dish.image} />)}
    </div>
  );
}

export default App;
