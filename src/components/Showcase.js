import React, { useState, useEffect } from "react";

const Showcase = () => {
  const carouselItems = [
    { image: "/IMG1.jpg", description: "Description 1" },
    { image: "/IMG2.jpg", description: "Description 2" },
    { image: "/IMG3.jpg", description: "Description 2" },
    { image: "/IMG4.jpg", description: "Description 2" },
    { image: "/IMG5.jpg", description: "Description 2" },
    { image: "/IMG6.jpg", description: "Description 2" },
    { image: "/IMG7.jpg", description: "Description 2" },
    { image: "/IMG8.jpg", description: "Description 2" },
    { image: "/IMG9.jpg", description: "Description 2" },
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    description: "",
  });

  useEffect(() => {
    const timer = setTimeout(handleNext, 8000);
    return () => clearTimeout(timer);
  }, [start, end, handleNext]);

  const handleNext = () => {
    if (end < carouselItems.length) {
      setStart(start + 3);
      setEnd(end + 3);
    } else {
      setStart(0);
      setEnd(3);
    }
  };

  const handlePrev = () => {
    if (start > 0) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  };

  const openModal = (item) => {
    setModalContent(item);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div
      id="showcase"
      className="h-screen flex items-center justify-center bg-primary-bg"
    >
      <div className="flex items-center justify-center w-full">
        <button
          onClick={handlePrev}
          className="self-center w-20 h-20 text-white text-8xl m-2"
        >
          {"<"}
        </button>
        <div className="flex space-x-4">
          {carouselItems.slice(start, end).map((item, index) => (
            <div
              key={index}
              className="w-1/3 p-4 bg-secondary-bg rounded-md"
              style={{ overflow: "visible", position: "relative", zIndex: 0 }}
              onMouseOver={(e) => {
                e.currentTarget.style.zIndex = "2";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.zIndex = "0";
              }}
            >
              <img
                src={item.image}
                alt={item.description}
                style={{
                  transition: "transform .3s ease-in-out",
                  position: "relative",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "scale(1.25)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => openModal(item)}
              />
              <p className="mt-2 text-center text-primary-text">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="self-center w-20 h-20 text-white text-8xl m-2"
        >
          {">"}
        </button>
      </div>

      {showModal && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div className="bg-white w-4/5 h-4/5 flex flex-col items-center justify-center relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black text-2xl bg-white p-2 rounded"
            >
              Close
            </button>
            <img
              src={modalContent.image}
              alt={modalContent.description}
              style={{ maxHeight: "75%" }}
            />
            <p className="mt-2 text-center text-black">
              {modalContent.description}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Showcase;
