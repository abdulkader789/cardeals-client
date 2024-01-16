import React, { useState, useEffect } from 'react';

const ImageSlideshow = () => {
    const images = [
        'https://acroadtrip.blob.core.windows.net/catalogo-imagenes/s/RT_V_f8dd481046b54850b439a34ded26e35d.jpg',

        'https://imgd.aeplcdn.com/370x208/n/cw/ec/26918/xuv300-exterior-right-front-three-quarter-148709.jpeg?isig=0&q=80',

        'https://imgd.aeplcdn.com/370x208/n/cw/ec/107543/brezza-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80',

        'https://5.imimg.com/data5/IX/JA/GLADMIN-66473958/maruti-vitara-brezza-car-500x500.png',

        'https://i.pinimg.com/736x/a3/7b/41/a37b419e3d411bc9d1bd724b9710ab4f.jpg',
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            // Update the currentImageIndex to the next image
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 2000);

        // Clear the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [currentImageIndex]);

    return (
        <div className="slideshow-container">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    className={index === currentImageIndex ? 'visible' : 'hidden'}
                />
            ))}
        </div>
    );
};

export default ImageSlideshow;
