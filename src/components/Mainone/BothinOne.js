


import Footercomponent from "../Footer/footer";
import Navbar from "../navbar/navbar";
import "./Bothone.css"
import React, { useState, useEffect } from 'react';


const CombinedComponent = ({ data }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [audioElements, setAudioElements] = useState([]);
    const [userInteracted, setUserInteracted] = useState(false);
    console.log(data)
    useEffect(() => {
        // Create audio elements for each item in the data array
        const elements = data.map((item) => {
            const audio = new Audio(item.audioSrc);

            return { audio, id: item.id };
        });
        setAudioElements(elements);

        // Clean up the audio elements when the component is unmounted
        return () => {
            elements.forEach(({ audio }) => {
                audio.pause();
                audio.currentTime = 0;
            });
        };
    }, [data]);

    useEffect(() => {
        // Automatically change the image every 5 seconds
        const intervalId = setInterval(() => {
            nextSlide();
        }, 10000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, []);
    

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    const handleButtonClick = () => {
        setUserInteracted(true);

        // Play a short silent audio to ensure future audio playbacks work
        if (audioElements.length > 0) {
            const firstAudioElement = audioElements[0];
            firstAudioElement.audio.play().then(() => {
                firstAudioElement.audio.pause();
                firstAudioElement.audio.currentTime = 0;
            });
        }
    };

    const handleMouseOver = (id) => {
        // Start playing the audio with the corresponding id
        const audioElement = audioElements.find((element) => element.id === id);
        if (userInteracted && audioElement) {
            audioElement.audio.play();
        }
    };

    const handleMouseOut = (id) => {
        // Pause and reset the audio with the corresponding id
        const audioElement = audioElements.find((element) => element.id === id);
        if (audioElement) {
            audioElement.audio.pause();
            audioElement.audio.currentTime = 0;
        }
    };

    return (
        <>

            <Navbar />

            {!userInteracted && (
                <button onClick={handleButtonClick} className="combined-button">
                    Click here to enable audio interactions
                </button>
            )}
            <div className="combined-container">

                <div className="combined-image-container">
                    <img
                        //   style={{ width: "300px", height: "300px" }}
                        src={data[currentIndex].image}
                        alt={data[currentIndex].title}
                        className="combined-image"
                        onMouseOver={() => handleMouseOver(data[currentIndex].id)}
                        onMouseOut={() => handleMouseOut(data[currentIndex].id)}
                    />



                </div>

                <div className="combined-info">
                    <h2>{data[currentIndex].title}</h2>
                    <h3>Price : {data[currentIndex].price}</h3>
                    <h3>Quantity : {data[currentIndex].quantity}</h3>
                    <h3>alcohol : {data[currentIndex].percentage}</h3>
                    <h1>Located : {data[currentIndex].Located}</h1>
                    <h1>Type : {data[currentIndex].Type}</h1>

                    <p>{data[currentIndex].about}</p>
                </div>

                <div className="combined-buttons">

                    {/* <button onClick={nextSlide} className="combined-button">
    Next
</button> */}

                    <button onClick={nextSlide} className="combined-button" id="combined-button" >
                        <span>nextSlide</span>
                    </button>


                   

                 

<div className="uiverse">
        <span className="tooltip">{data[currentIndex].price}</span>
        <span>
          Add to cart
        </span>
      </div>
{/* 
<div data-tooltip="Price:-$20" className="button1">
        <div className="button1-wrapper">
          <div className="text">Buy Now</div>
          <span className="icon">
            <svg viewBox="0 0 16 16" className="bi bi-cart2" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </span>
        </div>
      </div> */}






                    <button style={{color:"black"}} onClick={prevSlide} className="combined-button">
                        {/* Previous */}
                        <span>prevSlide</span>
                    </button>

                </div>




            </div>

        
<Footercomponent/>
        </>
    );
};

// export default CombinedComponent;


// export default CombinedComponent;


export default CombinedComponent;
