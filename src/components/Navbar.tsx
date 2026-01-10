import { MapPin, Search, ShoppingCart, User, X } from "lucide-react";
import { useState } from "react";
import LocationModal from "./modals/LocationModal";
import { SEARCH_SUGGESTIONS } from "../data/searchSuggestions";
import SearchDropdown from "./search/SearchDropdown";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = SEARCH_SUGGESTIONS.filter((item) =>
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between gap-4">

            {/* LEFT */}
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 font-semibold">
                <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center text-sm">
                  HC
                </div>
                <span className="hidden sm:block">hiikarcare</span>
              </div>
            </div>

            {/* CENTER */}
            <div className="hidden lg:flex flex-1 items-center gap-3 max-w-xl relative">
              {/* Location */}
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                <MapPin size={16} />
                Select location
              </button>

              {/* SEARCH */}
              <div className="flex-1 relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />

                {query && (
                  <button
                    onClick={() => setQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                  >
                    <X size={14} />
                  </button>
                )}

                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search for services"
                  className="w-full pl-9 pr-8 py-2 text-sm rounded-md border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-black/10"
                />

                {query && filtered.length > 0 && (
                  <SearchDropdown
                    results={filtered}
                    onSelect={() => setQuery("")}
                  />
                )}
              </div>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-4">
              <ShoppingCart size={20} />
              <User size={20} />
            </div>
          </div>
        </div>
      </header>

      {open && <LocationModal onClose={() => setOpen(false)} />}
    </>
  );
};

export default Navbar;
