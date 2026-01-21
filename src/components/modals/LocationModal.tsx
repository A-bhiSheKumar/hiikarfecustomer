import { X, MapPin, Navigation } from "lucide-react";

import { useLoadScript, Autocomplete } from "@react-google-maps/api";
import { useRef } from "react";
import { useLocation } from "../../context/useLocation";

const libraries: ("places")[] = ["places"];

const LocationModal = ({ onClose }: { onClose: () => void }) => {
  const { setLocation } = useLocation();
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  if (!isLoaded) {
    console.log("⏳ Waiting for Google Maps...");
    return null;
  }

  /* ================= HANDLE PLACE SELECT ================= */
  const onPlaceChanged = () => {
    if (!autocompleteRef.current) return;

    const place = autocompleteRef.current.getPlace();
    if (!place.geometry || !place.geometry.location) return;

    const lat = place.geometry.location.lat();
    const lng = place.geometry.location.lng();

    // UC-style short address
    const mainText = place.address_components?.[0]?.long_name ?? "";
    const city =
      place.address_components?.find((c) =>
        c.types.includes("locality")
      )?.long_name ?? "";

    const shortAddress = `${mainText}${city ? ", " + city : ""}`;

    console.log("📍 Selected Place:", {
      lat,
      lng,
      shortAddress,
      fullPlace: place,
    });

    setLocation({
      lat,
      lng,
      address: shortAddress,
    });

    onClose();
  };

  /* ================= USE CURRENT LOCATION ================= */
  const useCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;

        console.log("📡 Current Location:", latitude, longitude);

        setLocation({
          lat: latitude,
          lng: longitude,
          address: "Current location",
        });

        onClose();
      },
      () => alert("Location permission denied")
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
      <div className="relative bg-white w-full max-w-md h-[55vh] rounded-2xl shadow-xl flex flex-col">

        {/* CLOSE (UC STYLE) */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-gray-100"
        >
          <X size={18} />
        </button>

        {/* SEARCH */}
        <div className="p-4 border-b">
          <Autocomplete
            onLoad={(ref) => (autocompleteRef.current = ref)}
            onPlaceChanged={onPlaceChanged}
          >
            <input
              autoFocus
              placeholder="Search for your location/society/apartment"
              className="w-full border border-gray-200 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black/10"
            />
          </Autocomplete>
        </div>

        {/* BODY */}
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
            <div className="flex gap-3 items-start text-sm">
              <MapPin size={16} />
              <div>
                <p className="font-medium">Home</p>
                <p className="text-xs text-gray-500">
                  Example apartment, city, India
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 text-center text-xs text-gray-400 border-t">
          powered by Google
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
