import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const HorizontalScroller = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!ref.current) return;
    ref.current.scrollBy({
      left: dir === "left" ? -320 : 320,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative">
      <h2 className="text-2xl font-semibold mb-6">
        {title}
      </h2>

      {/* Left Arrow */}
      <button
        onClick={() => scroll("left")}
        className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border shadow hover:shadow-md items-center justify-center"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Scroll container */}
      <div
        ref={ref}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide pb-2"
      >
        {children}
      </div>

      {/* Right Arrow */}
      <button
        onClick={() => scroll("right")}
        className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-9 h-9 rounded-full bg-white border shadow hover:shadow-md items-center justify-center"
      >
        <ChevronRight size={18} />
      </button>
    </section>
  );
};

export default HorizontalScroller;
