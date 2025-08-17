import React, { useRef, useState, useEffect } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const ProjectShowcase = () => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkForScrollPosition = () => {
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 1);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    checkForScrollPosition();
    scrollContainer.addEventListener("scroll", checkForScrollPosition);
    return () =>
      scrollContainer.removeEventListener("scroll", checkForScrollPosition);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Left Button */}
      {canScrollLeft && (
        <button
          onClick={() => scroll("left")}
          className="absolute -left-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
        >
          <MdArrowBackIos className="text-2xl" />
        </button>
      )}

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto space-x-6 pb-6 px-2 snap-x snap-mandatory w-full scrollbar-hide"
      >
        {/* Example Project Cards */}
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className="min-w-[300px] snap-center bg-white rounded-xl shadow-lg p-6 flex-shrink-0"
          >
            <h3 className="text-lg font-bold mb-2">Project {idx + 1}</h3>
            <p className="text-gray-600">Description for project {idx + 1}.</p>
          </div>
        ))}
      </div>

      {/* Right Button */}
      {canScrollRight && (
        <button
          onClick={() => scroll("right")}
          className="absolute -right-8 top-1/2 transform -translate-y-1/2 z-20 bg-gray-200 hover:bg-gray-300 text-gray-700 w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition"
        >
          <MdArrowForwardIos className="text-2xl" />
        </button>
      )}
    </div>
  );
};

export default ProjectShowcase;
