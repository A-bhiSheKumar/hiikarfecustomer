import {
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* ================= TOP GRID ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* LOGO */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-black text-white rounded-md flex items-center justify-center font-semibold">
                HC
              </div>
              <span className="font-semibold text-lg">
                hiikarcare
              </span>
            </div>

            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Trusted home services, delivered by verified professionals
              with transparent pricing and premium experience.
            </p>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">About us</li>
              <li className="hover:text-black cursor-pointer">Careers</li>
              <li className="hover:text-black cursor-pointer">Investor Relations</li>
              <li className="hover:text-black cursor-pointer">ESG Impact</li>
            </ul>
          </div>

          {/* CUSTOMERS */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              For customers
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">Categories near you</li>
              <li className="hover:text-black cursor-pointer">UC reviews</li>
              <li className="hover:text-black cursor-pointer">Contact us</li>
            </ul>
          </div>

          {/* PROFESSIONALS */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              For professionals
            </h4>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="hover:text-black cursor-pointer">
                Register as a professional
              </li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold text-sm mb-4">
              Social links
            </h4>

            <div className="flex items-center gap-3 mb-6">
              <button className="p-2 rounded-full border border-gray-200 hover:border-black transition">
                <Twitter size={18} />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:border-black transition">
                <Facebook size={18} />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:border-black transition">
                <Instagram size={18} />
              </button>
              <button className="p-2 rounded-full border border-gray-200 hover:border-black transition">
                <Linkedin size={18} />
              </button>
            </div>

            {/* APP BUTTONS */}
            <div className="space-y-3">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="h-10"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Play Store"
                className="h-10"
              />
            </div>
          </div>
        </div>

        {/* ================= DIVIDER ================= */}
        <div className="border-t border-gray-200 my-10" />

        {/* ================= BOTTOM ================= */}
        <div className="flex flex-col md:flex-row justify-between gap-4 text-xs text-gray-500">
          <p>
            * Makers CodexCrackers
          </p>

          <p className="text-right">
            © 2026 hiikarcare Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
