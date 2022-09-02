import { styled } from "@mui/material/styles";
import { Box, Button, Select, TextField } from "@mui/material";

export const CardBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "20px",
}));

export const CustomButton = styled(Button)(({ theme }) => ({
  textTransform: "none",
  fontFamily: "SchemeRg-Regular",
  borderWidth: '3px',
  fontSize: "25px",
  borderRadius: "50px",
  
  display: "flex",
  gap: "40px",
  color: "inherit",
  justifyContent: "flex-start",
  padding: "20px 30px",
  [theme.breakpoints.down("3xl")]: {
    gap: "10px",
    fontSize: "20px",
  },
  [theme.breakpoints.down("xl")]: {
    gap: "40px",
    justifyContent: "center",
  },
  [theme.breakpoints.down("md")]: {
    gap: "30px",
    fontSize: "18px",
  },
}));
export const UnStyledButton = styled(Button)(({ theme }) => ({
  color: "transparent",
  backgroundColor: "transparent",
  alignSelf: "flex-end",
  "&:hover, &:active": {
    opacity: 0.8,
    outline: "none",
    backgroundColor: "transparent",
  },
}));

export const SearchInput = styled(TextField)(({ theme }) => ({
  outline: "none",
  border: "none",
  borderRadius: "10px",
  background: theme.palette.lightColor.light,
  boxShadow: theme.shadows[1],
  maxWidth: "520px",
  width: "100%",
  "& input": {
    "&::placeholder": {
      textOverflow: "ellipsis !important",
      color: "#31476E",
      opacity: 1,
      fontSize: "17px",
    },
  },
  "& fieldset": {
    border: "none",
  },
}));

export const CustomSelect = styled(Select)(({ theme }) => ({
  outline: "none",
  border: "none",
  fontSize: "18px",
  borderRadius: "10px",
  color: "inherit",
  maxHeight: "45px",
  background: theme.palette.primary.main,
  boxShadow: theme.shadows[1],
  maxWidth: "520px",
  verticalAlign: "center",
  width: "100%",
  "& fieldset": {
    border: "none",
  },
  "& svg": {
    position: "absolute",
    right: "15px",
    pointerEvents: "none",
  },
}));
