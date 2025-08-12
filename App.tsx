 //import { Fragment } from 'react';
import './App.css'
import Hotel from './Hotel.tsx';  



// class Counter extends React.Component<{}, { count: number }> {
//   constructor(props: {}) {
//     super(props)
//     this.state = {
//       count: 0
//     }
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1
//     }))
//   }

//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1
//     }))
//   }

//   render() {
//     return (
//       <>
//         <p>count:{this.state.count}</p>
//         <button onClick={(this.increment)}>Increment</button> |<button onClick={(this.decrement)}>Decrement</button>
//       </>

//     )
//   }


// }

// const Counter: React.FC = () => {

//   const [count, setCount] = useState<number>(0);
//   return (
//     <>
//       <p>count:{count}</p>
//       <button onClick={()=>setCount(count+1)}>Increment</button> |<button onClick={()=>setCount(count-1)}>Decrement</button>
//     </>
//   )

// }





// function App() {
//   return (
//     <>
//       <p>count:0</p>
//       <button>Increment</button> |<button>Decrement</button>
//     </>
//   )


// }





const HotelList = [

  {
    id: 1,
    name: 'Hotel California',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'A lovely place to stay.',
    hotelProfile: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsScmOj082NmC0UjWoME5MS040NLK0TE2xMDU0N7YyqDAyTEoxMUg0TTU0MrRIsUzy4svIL0nNUSjOT    8syqxMBACeWBRp&q=hotel+sigiriya&rlz=1C1GCEU_enLK1134LK1135&oq=hotel&gs_lcrp=EgZjaHJvbWUqFggDEC4YrwEYxwEYsQMYgAQYmAUYmgUyBggAEEUYOTINCAEQABiSAxiABBiKBTINCAIQABiSAxiABBiKBTIWCAMQLhivARjHARixAxiABBiYBRiaBTIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiPAtIBCDc1MzlqMGo3qAIIsAIB8QUL4RuxqU09n_EFC-EbsalNPZ8&sourceid=chrome&ie=UTF-8'
  },
  {
    id: 2,
    name: 'Grand Hotel',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Experience luxury and comfort.',
    hotelProfile: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsScmOj082NmC0UjWoME5MS040NLK0TE2xMDU0N7YyqDAyTEoxMUg0TTU0MrRIsUzy4svIL0nNUSjOTM8syqxMBACeWBRp&q=hotel+sigiriya&rlz=1C1GCEU_enLK1134LK1135&oq=hotel&gs_lcrp=EgZjaHJvbWUqFggDEC4YrwEYxwEYsQMYgAQYmAUYmgUyBggAEEUYOTINCAEQABiSAxiABBiKBTINCAIQABiSAxiABBiKBTIWCAMQLhivARjHARixAxiABBiYBRiaBTIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiPAtIBCDc1MzlqMGo3qAIIsAIB8QUL4RuxqU09n_EFC-EbsalNPZ8&sourceid=chrome&ie=UTF-8'
  },

  {
    id: 3,
    name: 'Beach Resort1',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Relax by the sea.',
    hotelProfile: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsScmOj082NmC0UjWoME5MS040NLK0TE2xMDU0N7YyqDAyTEoxMUg0TTU0MrRIsUzy4svIL0nNUSjOTM8syqxMBACeWBRp&q=hotel+sigiriya&rlz=1C1GCEU_enLK1134LK1135&oq=hotel&gs_lcrp=EgZjaHJvbWUqFggDEC4YrwEYxwEYsQMYgAQYmAUYmgUyBggAEEUYOTINCAEQABiSAxiABBiKBTINCAIQABiSAxiABBiKBTIWCAMQLhivARjHARixAxiABBiYBRiaBTIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiPAtIBCDc1MzlqMGo3qAIIsAIB8QUL4RuxqU09n_EFC-EbsalNPZ8&sourceid=chrome&ie=UTF-8'
  },

  {
    id: 4,
    name: 'Beach Resort2',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Relax by the sea.',
    hotelProfile: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsScmOj082NmC0UjWoME5MS040NLK0TE2xMDU0N7YyqDAyTEoxMUg0TTU0MrRIsUzy4svIL0nNUSjOTM8syqxMBACeWBRp&q=hotel+sigiriya&rlz=1C1GCEU_enLK1134LK1135&oq=hotel&gs_lcrp=EgZjaHJvbWUqFggDEC4YrwEYxwEYsQMYgAQYmAUYmgUyBggAEEUYOTINCAEQABiSAxiABBiKBTINCAIQABiSAxiABBiKBTIWCAMQLhivARjHARixAxiABBiYBRiaBTIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiPAtIBCDc1MzlqMGo3qAIIsAIB8QUL4RuxqU09n_EFC-EbsalNPZ8&sourceid=chrome&ie=UTF-8'
  },

  {
    id: 5,
    name: 'Beach Resort3',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    description: 'Relax by the sea.',
    hotelProfile: 'https://www.google.com/search?gs_ssp=eJzj4tZP1zcsScmOj082NmC0UjWoME5MS040NLK0TE2xMDU0N7YyqDAyTEoxMUg0TTU0MrRIsUzy4svIL0nNUSjOTM8syqxMBACeWBRp&q=hotel+sigiriya&rlz=1C1GCEU_enLK1134LK1135&oq=hotel&gs_lcrp=EgZjaHJvbWUqFggDEC4YrwEYxwEYsQMYgAQYmAUYmgUyBggAEEUYOTINCAEQABiSAxiABBiKBTINCAIQABiSAxiABBiKBTIWCAMQLhivARjHARixAxiABBiYBRiaBTIKCAQQABixAxiABDIKCAUQABixAxiABDIHCAYQABiABDIHCAcQABiABDITCAgQLhivARjHARiABBiYBRiZBTIHCAkQABiPAtIBCDc1MzlqMGo3qAIIsAIB8QUL4RuxqU09n_EFC-EbsalNPZ8&sourceid=chrome&ie=UTF-8'
  }

]

function App() {

  return (
    <>
      <h2>Hotel Data</h2>
      <hr />
      {
        <>
           {HotelList.map((data) => (
             <Hotel key={data.id} {...data} />
           ))}
        
        </>
        
        
      }
    </>
  );
}

export default App;
