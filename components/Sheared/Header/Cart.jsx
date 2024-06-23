import { CartIcon } from "@/assets/Icons/CartIcon";

const Cart = () => {
  return (
    <div className="flex flex-col justify-center">
      <span className="mb-1 bg-amber-500 text-white text-center rounded-full text-xs">
        &nbsp;4&nbsp;
      </span>
      <button>
        <CartIcon height="24px" />
      </button>
    </div>
  );
};

export default Cart;
