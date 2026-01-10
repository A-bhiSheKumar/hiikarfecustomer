import { useEffect, useState } from "react";

interface LoaderProps {
  onComplete: () => void;
}

const Loader = ({ onComplete }: LoaderProps) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setFadeOut(true);

          setTimeout(onComplete, 400); // match fade animation
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white ${fadeOut ? "animate-fadeOut" : ""
        }`}
    >
      {/* Logo */}
      <div className="mb-6 flex items-center gap-2">
        <div className="w-9 h-9 bg-black text-white rounded flex items-center justify-center font-semibold">
          HC
        </div>
        <span className="text-lg font-medium">hiikarcare</span>
      </div>


      {/* Progress bar */}
      <div className="w-64 h-[2px] bg-gray-200 rounded overflow-hidden">
        <div
          className="h-full bg-black transition-all duration-300"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default Loader;
