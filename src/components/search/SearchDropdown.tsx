import type { SearchItem } from "../../data/searchSuggestions";


type Props = {
  results: SearchItem[];
  onSelect: () => void;
};

const SearchDropdown = ({ results, onSelect }: Props) => {
  return (
    <div className="absolute top-full mt-2 w-full bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-50">
      {results.map((item) => (
        <button
          key={item.id}
          onClick={onSelect}
          className="w-full flex gap-3 items-center p-3 hover:bg-gray-50 text-left"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-12 h-12 rounded-md object-cover"
          />

          <div>
            <p className="font-medium text-sm">{item.title}</p>
            <p className="text-xs text-gray-500">{item.subtitle}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

export default SearchDropdown;
