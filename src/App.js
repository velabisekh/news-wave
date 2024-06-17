import React, {useState} from 'react';
import NavMenu from './Components/NavMenu';
import NewsBoard from './Components/NewsBoard';


const App = () => {

  const [category,setCategory] = useState("general");
  return (
    <div>
      <NavMenu setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App;