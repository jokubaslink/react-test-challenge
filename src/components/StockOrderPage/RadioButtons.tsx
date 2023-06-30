import Radio from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import Sheet from "@mui/joy/Sheet";

export default function RadioButtons() {
  return (
    <RadioGroup
      aria-labelledby="tradeType"
      defaultValue="Market"
      size="lg"
      sx={{ gap: 1.5, display: "flex", flexDirection: "row" }}
    >
      {["Market", "Limit", "Stop"].map((value) => (
        <Sheet
          key={value}
          sx={{
            backgroundColor: "#241E29",
            borderRadius: 20,
            paddingX: 2,
            paddingY: 1,
          }}
        >
          <Radio
            label={value}
            overlay
            disableIcon
            value={value}
            slotProps={{
              label: () => ({
                sx: {
                  fontWeight: "lg",
                  fontSize: "md",
                  color: "#C0A8EA",
                },
              }),
              action: ({ checked }) => ({
                sx: {
                  backgroundColor: checked ? "#5b4c67" : "#241E29",
                  border: checked ? "2px solid #C0A8EA" : "none",
                  ":hover": { backgroundColor: "#5b4c67" },
                },
              }),
            }}
          />
        </Sheet>
      ))}
    </RadioGroup>
  );
}
