import { Popover, Button, Typography, Box, MenuList, MenuItem } from "@material-ui/core";
import { useState } from "react";

const bull = (
  <Box
    component="span"
    sx={{
      display: "inline-block",
      mx: "3px",
      transform: "scale(1.5)",
      color: "#D9D9D9",
    }}
  >
    • • •
  </Box>
);

const ButtonMore = () => {
  const [anchor, setAnchor] = useState(null);
  const openPopover = (event) => {
    setAnchor(event.currentTarget);
  };
  return (
    <>
      <Button  onClick={openPopover}>
        {bull}
      </Button>
      <Popover
        open={Boolean(anchor)}
        anchorEl={anchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "center",
          horizontal: "left",
        }}
        onClose={() => setAnchor(null)}
      >
        <MenuList
          autoFocusItem={Boolean(anchor)}
          id="composition-menu"
          aria-labelledby="composition-button"
          
        >
          <MenuItem >Edit</MenuItem>
          <MenuItem >Delete</MenuItem>

        </MenuList>
      </Popover>
    </>
  );
};

export default ButtonMore;
