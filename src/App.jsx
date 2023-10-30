import './App.css';
import { createContext, useState } from 'react';
import ContentContainer from './NewsApp/Components/ContentContainer';
import Navbar from './NewsApp/Components/Navbar';
import Footer from './NewsApp/Components/Footer';

let Api = createContext()

function App() {

  let [openHeadline , setOpenHeadline] = useState(true)
  let [cat , setCat] = useState('general')
  let [qu , setQu] = useState('India')
  let [url , setUrl] = useState(`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=b01f7549482f487ba0b83f5bc98d6b0d`)

  return (
    <>
    <Api.Provider value={{openHeadline , setOpenHeadline , cat , setCat , qu , setQu , url , setUrl}}>
    <Navbar />
    <ContentContainer />
    <Footer />
    </Api.Provider>
    </>
  );
}

export default App;
export {Api}
