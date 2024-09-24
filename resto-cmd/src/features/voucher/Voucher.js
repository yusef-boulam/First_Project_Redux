import { useSelector, useStore } from "react-redux";
import { isVoucherAvailable } from "../../app/selectors";
import { cartSlice } from "../cart/cartSlice";

export const Voucher = () => {
    const store = useStore();

    const available = useSelector(isVoucherAvailable)

    return (
        <div className="Voucher">
            {available && (
                <button
                    onClick={() =>
                        store.dispatch(cartSlice.actions.applyVoucher({ price: 2 }))
                    }
                >
                    Appliquer ma promo Super crémeux à 2 euros
                </button>
            )}
        </div>
    );
};