import { useState } from "react";
import Navbar from "./Scenes/Navbar";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  return (
    <div className="app bg-gray-20">
  <h1>Hello</h1>
    <Navbar 
     selectedPage={selectedPage}
     setSelectedPage={setSelectedPage}
    />
    </div>
  );
}

export default App;
