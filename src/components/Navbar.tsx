import { MapPin, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import LocationModal from "./modals/LocationModal";
import { useLocation } from "../context/useLocation";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { location } = useLocation();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="h-16 flex items-center justify-between gap-4">

            {/* LEFT */}
            <Link to="/" className="flex items-center gap-2 font-semibold">
              <div className="w-8 h-8 bg-black text-white rounded-md flex items-center justify-center text-sm">
                HC
              </div>
              <span className="hidden sm:block">hiikarcare</span>
            </Link>


            {/* CENTER */}
            <div className="hidden lg:flex flex-1 items-center gap-3 max-w-xl">
              <button
                onClick={() => setOpen(true)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 rounded-md border border-gray-200 hover:bg-gray-50"
              >
                <MapPin size={16} />
                <span className="truncate max-w-[180px]">
                  {location?.address ?? "Select location"}
                </span>
                <ChevronDown size={14} />
              </button>

              <div className="flex-1 relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
                <input
                  placeholder="Search for services"
                  className="w-full pl-9 pr-3 py-2 text-sm rounded-md border border-gray-200 bg-gray-50"
                />
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
