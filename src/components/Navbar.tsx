import {
  MapPin,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LocationModal from "./modals/LocationModal";
import { useLocation } from "../context/useLocation";

import {
  SEARCH_SUGGESTIONS,
  type SearchItem,
} from "../data/searchSuggestions";
import SearchDropdown from "./search/SearchDropdown";

const Navbar = () => {
  const { location } = useLocation();

  const [openLocation, setOpenLocation] = useState(false);

  /* ================= SEARCH STATE ================= */
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState(false);

  /* ================= FILTER LOGIC ================= */
  useEffect(() => {
    if (!query.trim()) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResults([]);
      return;
    }

    const filtered = SEARCH_SUGGESTIONS.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">

          {/* ================= TOP ROW ================= */}
          <div className="h-16 flex items-center justify-between gap-4">

            {/* LEFT */}
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center text-sm">
                HC
              </div>
              <span className="hidden sm:block">hiikarcare</span>
            </Link>

            {/* ================= DESKTOP CENTER ================= */}
            <div className="hidden lg:flex flex-1 items-center gap-3 max-w-xl">

              {/* Location */}
              <button
                onClick={() => setOpenLocation(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                <MapPin size={16} />
                <span className="truncate max-w-[180px]">
                  {location?.address ?? "Select location"}
                </span>
                <ChevronDown size={14} />
              </button>

              {/* Search */}
              <div className="flex-1 relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setShowResults(true);
                  }}
                  onFocus={() => setShowResults(true)}
                  placeholder="Search for services"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none"
                />

                {showResults && (
                  <SearchDropdown
                    items={results}
                    onSelect={(item) => {
                      console.log("Selected search:", item);
                      setQuery(item.title);
                      setShowResults(false);
                    }}
                  />
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <ShoppingCart size={20} className="cursor-pointer" />
              <User size={20} className="cursor-pointer" />
            </div>
          </div>

          {/* ================= MOBILE SEARCH ================= */}
          <div className="lg:hidden pb-3 space-y-2">

            {/* Location */}
            <button
              onClick={() => setOpenLocation(true)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-md border border-gray-200 bg-gray-50"
            >
              <MapPin size={16} />
              <span className="truncate">
                {location?.address ?? "Select location"}
              </span>
              <ChevronDown size={14} />
            </button>

            {/* Search */}
            <div className="relative">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setShowResults(true);
                }}
                onFocus={() => setShowResults(true)}
                placeholder="Search for services"
                className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none"
              />

              {showResults && (
                <SearchDropdown
                  items={results}
                  onSelect={(item) => {
                    console.log("Selected search:", item);
                    setQuery(item.title);
                    setShowResults(false);
                  }}
                />
              )}
            </div>
          </div>

        </div>
      </header>

      {/* LOCATION MODAL */}
      {openLocation && (
        <LocationModal onClose={() => setOpenLocation(false)} />
      )}
    </>
  );
};

export default Navbar;
