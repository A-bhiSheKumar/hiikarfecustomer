import { useState } from "react";
import {
  MapPin,
  Clock,
  CreditCard,
  Percent,
  CheckCircle,
} from "lucide-react";

const Checkout = () => {
  // 🔐 TEMP AUTH STATE (replace with real auth later)
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8">

        {/* ================= LEFT ================= */}
        <div className="space-y-6">

          {/* SAVINGS BANNER */}
          <div className="flex items-center gap-2 text-sm text-green-700">
            <Percent size={16} />
            Saving ₹21 on this order
          </div>

          {/* ================= NOT LOGGED IN ================= */}
          {!isLoggedIn && (
            <div className="card-soft p-6">
              <h3 className="font-medium mb-1">Account</h3>
              <p className="text-sm text-gray-600 mb-4">
                To book the service, please login or sign up
              </p>

              <button
                onClick={() => setIsLoggedIn(true)}
                className="w-full py-3 bg-purple-600 text-white rounded-md text-sm font-medium"
              >
                Login
              </button>
            </div>
          )}

          {/* ================= LOGGED IN FLOW ================= */}
          {isLoggedIn && (
            <>
              {/* CONTACT */}
              <div className="card-soft p-5 flex items-center gap-3">
                <MapPin size={18} className="text-gray-500" />
                <div>
                  <p className="text-sm font-medium">
                    Send booking details to
                  </p>
                  <p className="text-sm text-gray-600">
                    +91 6204926745
                  </p>
                </div>
              </div>

              {/* ADDRESS */}
              <div className="card-soft p-5 space-y-3">
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-500" />
                  <p className="text-sm font-medium">Address</p>
                </div>

                <button className="w-full py-3 bg-purple-600 text-white rounded-md text-sm">
                  Select address
                </button>
              </div>

              {/* SLOT */}
              <div className="card-soft p-5 flex items-center gap-3 opacity-60">
                <Clock size={18} />
                <p className="text-sm">Slot</p>
              </div>

              {/* PAYMENT METHOD */}
              <div className="card-soft p-5 flex items-center gap-3 opacity-60">
                <CreditCard size={18} />
                <p className="text-sm">Payment method</p>
              </div>

              {/* CANCELLATION */}
              <div className="text-sm text-gray-600">
                <p className="font-medium mb-1">
                  Cancellation policy
                </p>
                Free cancellations if done more than 12 hrs before
                the service or if a professional isn’t assigned.
                A fee will be charged otherwise.
                <br />
                <button className="mt-1 underline text-black">
                  Read full policy
                </button>
              </div>
            </>
          )}
        </div>

        {/* ================= RIGHT ================= */}
        <aside className="space-y-4">

          {/* CART */}
          <div className="card-soft p-5 space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <p className="font-medium">Haircut & massage</p>
              <div className="flex items-center gap-2 border-soft rounded-md px-2">
                <button>−</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            <ul className="text-gray-600 text-xs space-y-1">
              <li>• Haircut for men ×1</li>
              <li>• 10 min relaxing head massage ×1</li>
            </ul>

            <button className="text-sm underline text-black">
              Edit package
            </button>

            <div className="flex justify-between items-center pt-2">
              <p className="font-medium">₹407</p>
              <p className="text-xs text-gray-400 line-through">
                ₹428
              </p>
            </div>

            <div className="bg-green-700 text-white text-xs rounded-md p-2 flex items-center gap-2">
              <CheckCircle size={14} />
              Congratulations! ₹21 saved so far!
            </div>
          </div>

          {/* OFFERS */}
          <div className="card-soft p-4 text-sm">
            <div className="flex items-center gap-2 mb-1">
              <Percent size={16} className="text-green-700" />
              Coupons and offers
            </div>
            <p className="text-gray-600">
              Login/Sign up to view offers
            </p>
          </div>

          {/* PAYMENT SUMMARY */}
          <div className="card-soft p-4 text-sm space-y-2">
            <p className="font-medium mb-2">Payment summary</p>

            <div className="flex justify-between">
              <span>Item total</span>
              <span>
                <span className="line-through text-gray-400 mr-1">
                  ₹428
                </span>
                ₹407
              </span>
            </div>

            <div className="flex justify-between">
              <span>Taxes and fee</span>
              <span>₹49</span>
            </div>

            <div className="border-t pt-2 flex justify-between font-medium">
              <span>Amount to pay</span>
              <span>₹456</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Checkout;
