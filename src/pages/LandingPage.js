import { React, useState } from "react";
import bg from "../styles/images/langingImg/heroBg.png";
import { AppBar, Box, Typography } from "@mui/material";
import FormLayoutsBasic from "../views/forms/form-layouts/FormLayoutsBasic";
import { CardBox } from "../styles/theme/styledComponents";
import BlankLayout from "../components/MainLayout/BlankLayout";
import { Toolbar } from "@mui/material";
import { Button } from "@mui/material";
import { IconButton } from "@mui/material";
import { MenuItem } from "@mui/material";
import FooterIllustrationsV1 from "../views/pages/auth/FooterIllustrationsV1";
import { fontSize } from "@mui/system";

import School from "../styles/images/school.png";
import Indiviual from "../styles/images/woman.png";

// ** MUI Imports
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid } from "mdi-material-ui";
import { Person } from "@mui/icons-material";

const LandingPage = () => {
  // ** State
  const [value, setValue] = useState("controlled-checked");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "repeat",
        height: "100vh",

        // keeps page from scrolling
      }}
    >
      <BlankLayout>
        {/* <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuItem />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        </Box> */}
        <Box
          className="content-center"
          sx={{
            flexGrow: 1,
            height: "fit-content(20em)",
          }}
        >
          <CardBox
            sx={{
              paddingTop: { xs: "20px", "2xl": "40px" },
              paddingBottom: "15px",
              paddingX: { xs: "30px", "2xl": "40px", "3xl": "50px" },
              display: "flex",
              flexDirection: "column",
              gap: { xs: "40px", "2xl": "20px" },
              justifyContent: "space-between",
              width: "50%",
              height: "100%",
              boxShadow: 20,
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontSize: "35px", display: "flex" }}
            >
              {" "}
              Hi there. Are you a School or Individual?
            </Typography>

            <Box
              sx={{
                pl: "200px",
                display: "flex",
                alignContent: "center",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <RadioGroup
                row
                aria-label="controlled"
                name="controlled"
                value={value}
                onChange={handleChange}
              >
                <Box>
                  <Box>
                    <img src={School} alt="Hear" width="200px" height="200px" />
                  </Box>

                  <FormControlLabel
                    value="controlled-checked"
                    control={<Radio />}
                    label="School"
                  />
                </Box>
                <Box>
                  <Box>
                    <img
                      src={Indiviual}
                      alt="Hear"
                      width="200px"
                      height="200px"
                    />
                  </Box>
                  <FormControlLabel
                    value="controlled-unchecked"
                    control={<Radio />}
                    label="Individual"
                  />
                </Box>
              </RadioGroup>
            </Box>
          </CardBox>
        </Box>
      </BlankLayout>
    </div>
  );
};

export default LandingPage;
