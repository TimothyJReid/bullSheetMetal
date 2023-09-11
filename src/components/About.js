import React, { useEffect, useState } from "react";

const About = () => {
  const [imageSrc, setImageSrc] = useState("/Placeholder.jpg"); // Initial placeholder image
  const [isLoading, setIsLoading] = useState(true); // To track the loading status

  useEffect(() => {
    // Function to download the image and update the state
    const loadImage = async () => {
      const image = new Image();
      image.src = "/Background1.jpg";

      image.onload = () => {
        setImageSrc("/Background1.jpg");
        setIsLoading(false); // Image has loaded
      };
    };

    loadImage();
  }, []);

  const bgStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    opacity: isLoading ? 0.5 : 1, // While loading, reduce opacity
    transition: "opacity 0.5s ease",
  };

  return (
    <div
      id="about"
      style={bgStyle}
      className="min-h-screen flex flex-col md:flex-row items-center justify-center"
    >
      <div className="p-12 flex-1 md:w-1/2 bg-opacity-75 bg-white">
        <h2 className="text-4xl font-bold mb-8 text-primary-600">About Us</h2>
        <p className="text-lg">
          With over 20 years working with sheet, we're passionate about creating
          beautiful and functional metalwork pieces using our state-of-the-art
          CNC machinery. Our team of skilled designers and fabricators work
          closely with clients to turn their ideas into reality, whether it's a
          custom fire pit for your backyard, a personalized metal sign for your
          home, a custom part for you business, or anything you can dream up. We
          take pride in our attention to detail and commitment to customer
          satisfaction. Contact us today to learn more about our services and
          see how we can help bring your metalwork vision to life.
        </p>
      </div>
      <div className="p-12 flex-1 md:w-1/2">
        <video
          className="w-full h-full object-cover rounded-md"
          autoPlay
          loop
          muted
        >
          <source src="Video1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default About;
