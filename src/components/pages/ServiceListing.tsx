import { useParams, useNavigate } from "react-router-dom";
import { Star, Clock, Percent, ShoppingCart } from "lucide-react";
import { useState } from "react";
import StickyCartBar from "../cart/StickyCartBar";

/* ================= TYPES ================= */
type CartItem = {
  id: string;
  title: string;
  price: number;
  quantity: number;
};

/* ================= COMPONENT ================= */
const ServiceListing = () => {
  const navigate = useNavigate();

  // ✅ SAFE PARAMS
  const { category, subcategory } = useParams<{
    category: string;
    subcategory: string;
  }>();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  /* ================= CART HELPERS ================= */
  const addItem = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) =>
          p.id === item.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeItem = (id: string) => {
    setCartItems((prev) =>
      prev
        .map((p) =>
          p.id === id
            ? { ...p, quantity: p.quantity - 1 }
            : p
        )
        .filter((p) => p.quantity > 0)
    );
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  /* ================= PACKAGE DATA ================= */
  const ITEM_ID = "make-your-own-package";
  const ITEM_PRICE = 3183;

  const cartItem = cartItems.find((i) => i.id === ITEM_ID);

  /* ================= SAFE TITLES ================= */
  const pageTitle = subcategory
    ? subcategory.replace(/-/g, " ")
    : "Services";

  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-10 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_320px] gap-8">

          {/* ================= LEFT ================= */}
          <aside className="hidden lg:block">
            <div className="card-soft p-4">
              <p className="text-sm font-medium mb-4">
                Select a service
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                {[
                  "Packages",
                  "Haircut & beard",
                  "Facial & cleanup",
                  "Manicure & pedicure",
                  "Hair color",
                  "Massage",
                ].map((item) => (
                  <div
                    key={item}
                    className="card-soft card-soft-hover p-2 text-center cursor-pointer"
                  >
                    <div className="h-14 bg-gray-100 rounded mb-2" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </aside>

          {/* ================= CENTER ================= */}
          <main className="space-y-6">
            <div>
              <p className="text-xs text-gray-400 capitalize mb-1">
                {category}
              </p>
              <h1 className="text-2xl font-semibold capitalize">
                {pageTitle}
              </h1>
            </div>

            {/* ================= PACKAGE CARD ================= */}
            <div className="card-soft p-6 flex gap-6">
              <div className="flex-1">
                <p className="text-xs text-green-700 font-medium mb-1">
                  PACKAGE
                </p>

                <h3 className="font-semibold text-lg mb-1">
                  Make your own package
                </h3>

                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Star size={14} className="fill-black" />
                    4.85 (7.4M)
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={14} />
                    3 hrs 50 mins
                  </span>
                </div>

                <div className="text-sm text-gray-600 space-y-1 mb-4">
                  <p>• Haircut for men</p>
                  <p>• Head massage (10 mins)</p>
                  <p>• Beard grooming</p>
                </div>

                <button className="text-sm border-soft px-4 py-2 rounded-md">
                  Edit your package
                </button>
              </div>

              <div className="flex flex-col items-center justify-between">
                <div className="bg-gray-100 rounded-xl px-6 py-4 text-center border-soft">
                  <Percent
                    className="mx-auto text-green-700 mb-1"
                    size={18}
                  />
                  <p className="text-3xl font-bold text-green-700">
                    5%
                  </p>
                  <p className="text-xs text-green-700">OFF</p>
                </div>

                <div className="text-center mt-4">
                  <p className="font-semibold">₹{ITEM_PRICE}</p>
                  <p className="text-xs text-gray-400 line-through">
                    ₹428
                  </p>

                  {cartItem ? (
                    <div className="mt-3 flex items-center gap-2 border-soft rounded-md px-2 py-1">
                      <button
                        onClick={() => removeItem(ITEM_ID)}
                        className="px-2 text-lg"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium">
                        {cartItem.quantity}
                      </span>
                      <button
                        onClick={() =>
                          addItem({
                            id: ITEM_ID,
                            title: "Haircut & massage",
                            price: ITEM_PRICE,
                            quantity: 1,
                          })
                        }
                        className="px-2 text-lg"
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() =>
                        addItem({
                          id: ITEM_ID,
                          title: "Haircut & massage",
                          price: ITEM_PRICE,
                          quantity: 1,
                        })
                      }
                      className="mt-3 px-6 py-2 bg-black text-white rounded-md text-sm"
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </main>

          {/* ================= RIGHT ================= */}
          <aside className="hidden lg:block space-y-4">
            {cartItems.length === 0 ? (
              <div className="card-soft p-6 text-center text-sm text-gray-500">
                <ShoppingCart className="mx-auto mb-3" />
                No items in your cart
              </div>
            ) : (
              <div className="card-soft p-4 text-sm space-y-3">
                <p className="font-medium">Cart</p>

                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>
                      {item.title} × {item.quantity}
                    </span>
                    <span>₹{item.price * item.quantity}</span>
                  </div>
                ))}

                <div className="border-t pt-3 flex justify-between font-medium">
                  <span>Total</span>
                  <span>₹{totalAmount}</span>
                </div>
              </div>
            )}
          </aside>
        </div>
      </section>

      {/* ================= STICKY CART ================= */}
      <StickyCartBar
        itemCount={totalItems}
        totalAmount={totalAmount}
        onClick={() => {
          if (totalItems > 0) navigate("/checkout");
        }}
      />
    </>
  );
};

export default ServiceListing;
