"use client";

import { useCartStore } from "@/lib/store/cartStore";
import Link from "next/link";

const CartPage = () => {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } =
    useCartStore();

  return (
    <div className="min-h-screen bg-[#050506] text-white px-6 py-20">
      <Link href={"/"} className="text-white">
        Go back
      </Link>
      <h1 className="text-5xl mb-12 text-[#FDD90B] mt-5">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6 max-w-4xl">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border border-white/10 rounded-xl p-5"
            >
              <div>
                <h2 className="text-xl">{item.name}</h2>
                <p className="text-gray-400 text-sm">${item.price} each</p>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="number"
                  min={1}
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, Number(e.target.value))
                  }
                  className="w-16 bg-[#1A1A1A] text-white px-2 py-1 rounded-lg"
                />

                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-400 hover:text-red-500 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-8 border-t border-white/10">
            <span className="text-2xl">
              Total: <span className="text-[#FDD90B]">${totalPrice()}</span>
            </span>

            <button
              onClick={clearCart}
              className="px-6 py-3 bg-[#FDD90B] text-black rounded-xl hover:bg-[#e6c700]"
            >
              Clear cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
