import { useState, useEffect } from "react";
import OrderForm from "./OrderForm";
import StockInfoBox from "./StockInfoBox";
import EstimatedPriceBox from "./EstimatedPriceBox";
import { Button } from "@mui/material";
import axios from "axios";
import LoadingScreen from "../LoadingScreen";
import OrderFulfilled from "../OrderFulfilled";

function OrderPage() {
  const [stock, setStock] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [loading, setLoading] = useState(true);
  const [purchased, setPurchased] = useState(false);

  type stockData = {
    "Global Quote": {
      "01. symbol": string;
      "02. open": string;
      "03. high": string;
      "04. low": string;
      "05. price": string;
      "06. volume": string;
      "07. latest trading day": string;
      "08. previous close": string;
      "09. change": string;
      "10. change percent": string;
    };
  };

  useEffect(() => {
    async function fetchStockData() {
      const { data } = await axios.get<stockData>(
        "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=demo"
      );
      setStock(data["Global Quote"]);
      setLoading(false);
    }
    fetchStockData();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  if (purchased) {
    return <OrderFulfilled />;
  }

  return (
    <>
      <h1 className="title">Stock Order</h1>
      <OrderForm
        security={stock["01. symbol" as keyof typeof stock]}
        setQuantity={setQuantity}
      />
      <StockInfoBox
        security={stock["01. symbol" as keyof typeof stock]}
        stockPrice={stock["05. price" as keyof typeof stock]}
      />
      <EstimatedPriceBox
        quantity={quantity || 0}
        stockPrice={stock["05. price" as keyof typeof stock]}
        security={stock["01. symbol" as keyof typeof stock]}
      />{" "}
      <Button
        onClick={() => {
          setTimeout(() => {
            setLoading(false);
            setPurchased(true);
          }, 500);
          setLoading(true);
        }}
        sx={{
          backgroundColor: "#684FA5",
          borderRadius: 5,
          ":hover": {
            backgroundColor: "#8a75bd",
          },
          paddingY: 1,
          paddingX: 2,
          width: { xs: "140px", sm: "200px" },
          fontWeight: 400,
          textTransform: "capitalize",
        }}
        className="buyBtn"
        variant="contained"
      >
        Buy {stock["01. symbol" as keyof typeof stock]}
      </Button>
    </>
  );
}

export default OrderPage;
