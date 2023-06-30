type StockInfoBoxProps = {
  security: string;
  stockPrice: number;
};

function StockInfoBox({ security, stockPrice }: StockInfoBoxProps) {
  return (
    <div className="stockInfoBox">
      <div className="stockInfoBox__left">
        <h2 className="stockInfoBox__left--security">{security}</h2>
        <p className="stockInfoBox__left--securityFull"> {security}</p>
      </div>
      <div className="stockInfoBox__right">
        <h1 className="stockInfoBox__right--price">${stockPrice}</h1>
      </div>
    </div>
  );
}

export default StockInfoBox;
