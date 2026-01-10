import { ShoppingCart } from "lucide-react";

interface Props {
  itemCount: number;
  totalAmount: number;
  onClick: () => void;
}

const StickyCartBar = ({ itemCount, totalAmount, onClick }: Props) => {
  if (itemCount === 0) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="card-soft flex items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-3 text-sm">
            <ShoppingCart size={18} />
            <span className="font-medium">
              {itemCount} item{itemCount > 1 ? "s" : ""} added
            </span>
            <span className="text-gray-500">
              ₹{totalAmount}
            </span>
          </div>

          {/* CTA */}
          <button
            onClick={onClick}
            className="px-5 py-2 bg-black text-white rounded-md text-sm font-medium"
          >
            View cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default StickyCartBar;
