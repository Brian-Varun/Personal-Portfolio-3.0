'use client';


import React, { useState, useEffect } from 'react';
import { Button, Flex, Text } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  { src: "https://images.unsplash.com/photo-1726383222152-134ad0536b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Q0R3dXdYSkFiRXd8fGVufDB8fHx8fA%3D%3D", caption: "First Image Caption" },
  { src: "https://images.unsplash.com/photo-1727422969655-4a4f190fae5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D", caption: "Second Image Caption" },
  { src: "https://images.unsplash.com/photo-1727525892435-a30151200613?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D", caption: "Third Image Caption" },
  { src: "https://images.unsplash.com/photo-1715465115658-e4272dbb0ada?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDMxfENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D", caption: "Fourth Image Caption" }
];

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every X seconds

    return () => clearInterval(timer);
  }, []);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Flex direction="column" gap="2">
      <div className="relative">
        <img 
          src={images[currentIndex].src}
          alt={`Gallery image ${currentIndex + 1}`}
          className="w-full object-cover rounded-md" 
          style={{height: "155px"}}
        />
        
        <Flex 
          className="absolute inset-0" 
          justify="between" 
          align="center" 
          px="2"
        >
          <Button 
            variant="ghost" 
            onClick={handlePrevious}
            className="p-1 bg-white/80 rounded-full hover:bg-white"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button 
            variant="ghost" 
            onClick={handleNext}
            className="p-1 bg-white/80 rounded-full hover:bg-white"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </Flex>
      </div>
      
      <Text size="1" align="left" className="text-gray-500">
        {images[currentIndex].caption}
      </Text>
    </Flex>
  );
}