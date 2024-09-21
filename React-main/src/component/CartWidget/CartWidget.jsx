import { CiShoppingCart } from "react-icons/ci";

const CartWidget = () => {
    return (
        <div
        style={{
            display: "flex",
            marginRight: "2rem",
            alignItems: "center",
            width: "30%",
            justifyContent: "space-between",
            padding: "0.5rem",
            border: "1px solid #ccc",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease",
        }}
        >
        <CiShoppingCart size={30} />
        10
        </div>
    );
};

export default CartWidget;