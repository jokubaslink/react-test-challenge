import { TextField } from "@mui/material";
import RadioButtons from "./RadioButtons";

type OrderFormProps = {
  security: string;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

function OrderForm({ security, setQuantity }: OrderFormProps) {
  return (
    <>
      <div className="orderForm__top">
        <TextField label="Security" focused value={security || ""} />
      </div>

      <div className="orderForm__bottom">
        <TextField
          type="number"
          label="Shares"
          inputProps={{ min: 0 }}
          focused
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.value.length > 0) {
              setQuantity(parseFloat(e.target.value));
            } else {
              setQuantity(0);
            }
          }}
        />
        <RadioButtons />
      </div>
    </>
  );
}

export default OrderForm;
