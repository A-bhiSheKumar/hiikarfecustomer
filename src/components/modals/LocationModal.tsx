import { X, MapPin, Navigation } from "lucide-react";
import { useLocation } from "../../context/useLocation";

const LocationModal = ({ onClose }: { onClose: () => void }) => {
  const { setLocation } = useLocation();

  const useCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        setLocation({
          lat: latitude,
          lng: longitude,
          address: "Using current location",
        });

        onClose();
      },
      () => alert("Location permission denied")
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md h-[45vh] rounded-2xl shadow-xl flex flex-col">

        {/* ================= UC STYLE CLOSE BUTTON ================= */}
        <button
          onClick={onClose}
          className="absolute -top-12 -right-0 z-10 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100 transition"
        >
          <X size={18} />
        </button>

        {/* ================= HEADER ================= */}
        <div className="p-4 border-b border-gray-200">
          <input
            autoFocus
            placeholder="Search for your location/society/apartment"
            className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/10"
          />
        </div>

        {/* ================= BODY ================= */}
        <div className="flex-1 overflow-y-auto p-4 space-y-5">

          <button
            onClick={useCurrentLocation}
            className="flex items-center gap-3 text-purple-600 text-sm font-medium"
          >
            <Navigation size={16} />
            Use current location
          </button>

          <div>
            <p className="text-sm font-medium mb-3">Saved</p>

            <div className="flex gap-3 items-start text-sm cursor-pointer hover:bg-gray-50 p-2 rounded-md">
              <MapPin size={16} className="mt-1 text-gray-600" />
              <div>
                <p className="font-medium">Home</p>
                <p className="text-gray-500 text-xs">
                  Example apartment, city, state, India
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="p-3 text-center text-xs text-gray-400 border-t border-gray-200">
          powered by Google
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
