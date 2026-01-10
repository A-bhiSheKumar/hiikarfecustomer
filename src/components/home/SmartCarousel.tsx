import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CarouselItem = {
  id: string;
  title: string;
  element: React.ReactNode;
};

type Props = {
  title: string;
  items: CarouselItem[];
};

const AUTO_SCROLL_DELAY = 3500;

const SmartCarousel = ({ title, items }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const scrollTo = (i: number) => {
    const container = containerRef.current;
    if (!container) return;

    const child = container.children[i] as HTMLElement;
    if (!child) return;

    container.scrollTo({
      left: child.offsetLeft,
      behavior: "smooth",
    });
  };

  const next = () => {
    const nextIndex = (index + 1) % items.length;
    setIndex(nextIndex);
    scrollTo(nextIndex);
  };

  const prev = () => {
    const prevIndex = (index - 1 + items.length) % items.length;
    setIndex(prevIndex);
    scrollTo(prevIndex);
  };

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (paused) return;

    intervalRef.current = window.setInterval(next, AUTO_SCROLL_DELAY);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [index, paused]);

  return (
    <section className="relative">
      <h2 className="text-2xl font-semibold mb-6">
        {title}
      </h2>

      {/* ================= CAROUSEL ================= */}
      <div
        ref={containerRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="flex gap-6 overflow-hidden"
      >
        {items.map((item) => (
          <div key={item.id} className="min-w-[220px]">
            {item.element}
          </div>
        ))}
      </div>

      {/* ================= LEFT ARROW ================= */}
      <button
        onClick={prev}
        className="hidden md:flex absolute -left-6 top-1/2 -translate-y-1/2 items-center gap-2 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 text-sm hover:shadow-lg transition"
      >
        <ChevronLeft size={16} />
        <span className="font-medium">
          {items[(index - 1 + items.length) % items.length].title}
        </span>
      </button>

      {/* ================= RIGHT ARROW ================= */}
      <button
        onClick={next}
        className="hidden md:flex absolute -right-6 top-1/2 -translate-y-1/2 items-center gap-2 bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 text-sm hover:shadow-lg transition"
      >
        <span className="font-medium">
          {items[(index + 1) % items.length].title}
        </span>
        <ChevronRight size={16} />
      </button>
    </section>
  );
};

export default SmartCarousel;
