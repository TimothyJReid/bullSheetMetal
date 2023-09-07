import React, { useState, useEffect, useCallback } from "react";

const Showcase = () => {
  const carouselItems = [
    { image: "/IMG1.jpg", description: "Description 1" },
    { image: "/IMG2.jpg", description: "Description 2" },
    { image: "/IMG3.jpg", description: "Description 3" },
    { image: "/IMG4.jpg", description: "Description 4" },
    { image: "/IMG5.jpg", description: "Description 5" },
    { image: "/IMG6.jpg", description: "Description 6" },
    { image: "/IMG7.jpg", description: "Description 7" },
    { image: "/IMG8.jpg", description: "Description 8" },
    { image: "/IMG9.jpg", description: "Description 9" },
  ];

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(3);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({
    image: "",
    description: "",
  });

  const handleNext = useCallback(() => {
    if (end < carouselItems.length) {
      setStart(start + 3);
      setEnd(end + 3);
    } else {
      setStart(0);
      setEnd(3);
    }
  }, [start, end, carouselItems.length]);

  const handlePrev = useCallback(() => {
    if (start > 0) {
      setStart(start - 3);
      setEnd(end - 3);
    }
  }, [start, end]);

  useEffect(() => {
    const timer = setTimeout(handleNext, 8000);
    return () => clearTimeout(timer);
  }, [start, end, handleNext]);

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
          className="self-center w-12 h-12 sm:w-20 sm:h-20 text-white text-2xl sm:text-8xl m-2"
        >
          {"<"}
        </button>
        <div className="flex space-x-4 overflow-auto">
          {carouselItems.slice(start, end).map((item, index) => (
            <div
              key={index}
              className="w-1/2 sm:w-1/3 p-4 bg-secondary-bg rounded-md"
            >
              <img
                src={item.image}
                alt={item.description}
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
          className="self-center w-12 h-12 sm:w-20 sm:h-20 text-white text-2xl sm:text-8xl m-2"
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
