import CircularProgress from "@mui/joy/CircularProgress";

function LoadingScreen() {
  return (
    <div className="loadingScreen">
      <h1 className="loadingScreen--title">Stock Order</h1>
      <div className="loadingScreen--circle">
        {" "}
        <CircularProgress
          color="info"
          determinate={false}
          size="lg"
          value={25}
          variant="plain"
        />
      </div>
    </div>
  );
}

export default LoadingScreen;
