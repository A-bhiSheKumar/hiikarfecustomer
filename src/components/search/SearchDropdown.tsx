import type { SearchItem } from "../../data/searchSuggestions";


type Props = {
  items: SearchItem[];
  onSelect: (item: SearchItem) => void;
};

const SearchDropdown = ({ items, onSelect }: Props) => {
  if (items.length === 0) return null;

  return (
    <div
      className="
        absolute top-full left-0 right-0 mt-2
        bg-white
        rounded-xl
        border border-[#EAEAEA]
        shadow-lg
        z-50
        overflow-hidden
      "
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => onSelect(item)}
          className="
            w-full
            flex gap-3 items-center
            px-4 py-3
            text-left
            hover:bg-gray-50
            transition
          "
        >
          {/* Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 rounded-lg object-cover bg-gray-100"
          />

          {/* Text */}
          <div>
            <p className="text-sm font-medium text-gray-900">
              {item.title}
            </p>
            <p className="text-xs text-gray-500">
              {item.subtitle}
            </p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchDropdown;
