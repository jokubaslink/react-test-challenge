type EstimatedPriceBoxProps = {
  quantity: number;
  stockPrice: number;
  security: string;
};

function EstimatedPriceBox({
  quantity,
  stockPrice,
  security,
}: EstimatedPriceBoxProps) {
  return (
    <div className="estimatedBox">
      <p className="estimatedBox--title">Estimated trading amount</p>
      <p className="estimatedBox--cost">
        Buy {quantity}x${stockPrice} {security} = $
        {(quantity * stockPrice).toFixed(2)}
      </p>
    </div>
  );
}

export default EstimatedPriceBox;
