import React, {useEffect, useState} from 'react';
import bg from '../img/bg.jpg';
import Wteather from './Wteather';
import Forecast from './Forecast';
import History from './History';

// import Weather from './Weather';

export default function Main(props) {
  
  let [text,setText] = useState("London");
  let [city,newCity] = useState("London");
  let [shouldUpdateChild,setShouldUpdateChild] = useState(false);
  // const chlComponentRef=useRef();
  const handleOnChange=(event) => {
    // console.log("first");
    setText(event.target.value);
    // var autocomplete ;
    // var id="searchBox";
    // autocomplete = new google.maps.places.AutocompleteService((document.getElementById(id)),{
    //   types:['geocode'],
    // });
  } 
  // let city = "Kanpur";
  // let clicked = 0;
  const handleClick = () => {
    setShouldUpdateChild(!shouldUpdateChild);
    // chlComponentRef.current.forceUpdate();
    // clicked=1;
    newCity(text);
    // console.log(city);
  }
  useEffect(() => {
    props.setProgress(0);
    props.setProgress(30);
    props.setProgress(100);
  });
  return (
    <>
    <div className='static'>
      <main className='h-[100vh] absolute'>
          <img src={bg} alt="no img"  className='h-[100vh] w-[100vw]'/>
        
        {/* <div className="hidden">lol</div> */}
      </main>
      <div className='absolute h-[100vh] w-[100vw] grid place-items-center'>
          <div className='space-y-8'>
              <div className='text-[#ffca28] cursor-pointer hover:text-[#87a300] font-extrabold text-5xl md:mx-[-10%] transition-color duration-500'>
                QuickWind
              </div>
              <div className='flex space-x-2 '>
                <input type="search" name="inpu" id="searchBox" value={text} onChange={handleOnChange} className='border-2 border-[#ffca28] outline-none rounded-full w-[100%] md:mx-[-50%] md:w-[200%] h-[8vh]'/>
                <button className="icon text-3xl bg-[#ffca28] w-[50px] px-[33px] flex justify-center items-center rounded-full hover:bg-[#87a300] transition-color duration-500 cursor-pointer md:translate-x-[70px]" onClick={handleClick}>
                    🔍
                </button>
              </div>
          </div>
        </div>
    </div>
    <section className="w-full h-[100vh] bg-yellow-400 overflow-x-hidden"></section>
    <section className="space-y-32 w-full h-fit py-16 md:h-[310vh] bg-gradient-to-b from-[#f6c173] via-[#cf9641] to-[#00d1a9] overflow-x-hidden">
     {/* <Weather/> */}
     {/* {
      clicked?<Wteather place={city}/>:<Wteather place="London"/>
     } */}
      <Wteather place={city} shouldUpdate={shouldUpdateChild}/>
      <Forecast place={city} shouldUpdate={shouldUpdateChild} setProgress={props.setProgress}/>
      <History  place={city} shouldUpdate={shouldUpdateChild} setProgress={props.setProgress}/>
    </section>
    </>
  );
}
