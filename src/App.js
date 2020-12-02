import React from 'react';
import Jumbrotron from './components/jumbotron'
import jumboData from './fixtures/jumbo.json'
export default function App() {
  return (
   <Jumbrotron.container>
     {jumboData.map((item)=>(
       <Jumbrotron key ={item.id} direction={item.direction}>
         <p>{item.title}</p>
         <p>{item.subTitle}</p>
         <p>{item.image}</p>
         <p>{item.alt}</p> 
       </Jumbrotron>
     )
     )}
   </Jumbrotron.container>
  );
}

