// import React from "react";
// import Carousel from "../carousel/carousel";
// import Navbar from "../navbar/navbar";
// import Footer from "../footer/footer";
// import Button from "@mui/material/Button";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardActions from "@mui/material/CardActions";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import packagesData from "../../package-data";
// import "./packages.css";
// import { createTheme, ThemeProvider } from "@mui/material";
// import CallIcon from "@mui/icons-material/Call";
// import CollectionsIcon from "@mui/icons-material/Collections";
// import { Link, useNavigate, useLocation } from "react-router-dom";

// import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
// import ArrowRightIcon from "@mui/icons-material/ArrowRight";

// const theme = createTheme({
//   typography: {
//     h5: {
//       fontWeight: "bold",
//       fontFamily: '"Sorts Mill Goudy", serif',
//     },
//     h4: {
//       fontWeight: "bold",
//       fontFamily: '"Sorts Mill Goudy", serif',
//     },
//     body2: {
//       fontFamily: '"Open Sans", sans-serif',
//       fontWeight: "bold",
//     },
//     button: {
//       fontFamily: '"Lora", serif',
//     },
//   },
// });

// const Packages = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   const handleScrollToSection = (sectionId) => {
//     if (location.pathname !== "/") {
//       navigate("/"); // Navigate to the homepage
//     }
//     setTimeout(() => {
//       const section = document.getElementById(sectionId);
//       if (section) {
//         section.scrollIntoView({ behavior: "smooth" });
//       }
//     }, 100); // Delay to allow DOM to re-render after navigation
//   };

//   return (
//     <>
//       <Navbar />
//       <Carousel />

//       <div className="headings">
//         <h2>Packages</h2>
//       </div>

//       <div className="package-card-wrapper">
//         <ThemeProvider theme={theme}>
//           {packagesData.packages.map((pkg, index) => (
//             <Card
//               key={index}
//               sx={{
//                 maxWidth: 345,
  
//                 bgcolor: "#ffb368",
//               }}
//             >
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image="https://picsum.photos/345/300"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h4" component="div">
//                   {pkg.name}
//                 </Typography>
//                 <Typography gutterBottom variant="h5" component="div">
//                   {pkg.package_name}
//                 </Typography>
                
//                   {/* <ul>
//                     {pkg.items.map((item, itemIndex) => (
//                       <li key={itemIndex}>{item}</li>
//                     ))}
//                   </ul> */}
//                   <List>
//                     {pkg.items.map((item, itemIndex) => (
//                       <ListItem key={itemIndex} alignItems="flex-start" sx={{padding:"0"}}>
//                         <ListItemIcon style={{ minWidth: "30px" }}>
//                           {" "}
//                           {/* Adjust spacing */}
//                           <ArrowRightIcon
//                             style={{ fontSize: "2rem", marginTop: "3px" }}
//                           />{" "}
//                           {/* Custom bullet */}
//                         </ListItemIcon>
//                         <ListItemText primary={item} />
//                       </ListItem>
//                     ))}
//                   </List>
                
//               </CardContent>
//               <CardActions style={{ justifyContent: "space-around" }}>
//                 <Button
//                   sx={{
//                     color: "black",
//                     backgroundColor: "#FFD700",
//                   }}
//                   size="small"
//                   variant="contained"
//                   href="/wedding-photos"
//                   startIcon={<CollectionsIcon />}
//                 >
//                   View Photos
//                 </Button>
//                 <Button
//                   sx={{
//                     color: "black",
//                     backgroundColor: "#FFD700",
//                   }}
//                   size="small"
//                   variant="contained"
//                   onClick={() => handleScrollToSection("contact-tag")}
//                   startIcon={<CallIcon />}
//                 >
//                   Contact Us
//                 </Button>
//               </CardActions>
//             </Card>
//           ))}
//         </ThemeProvider>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Packages;


import React, { useState } from "react";
import Carousel from "../carousel/carousel";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import packagesData from "../../package-data";
import "./packages.css";
import { createTheme, ThemeProvider } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import CollectionsIcon from "@mui/icons-material/Collections";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { Link, useNavigate, useLocation } from "react-router-dom";

// Theme settings
const theme = createTheme({
  typography: {
    h5: {
      fontWeight: "bold",
      fontFamily: '"Sorts Mill Goudy", serif',
    },
    h4: {
      fontWeight: "bold",
      fontFamily: '"Sorts Mill Goudy", serif',
    },
    body2: {
      fontFamily: '"Open Sans", sans-serif',
      fontWeight: "bold",
    },
    button: {
      fontFamily: '"Lora", serif',
    },
  },
});

const Packages = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState(
    Array(packagesData.packages.length).fill(false)
  );

  const handleExpandClick = (index) => {
    const newExpandedState = [...expandedCards];
    newExpandedState[index] = !newExpandedState[index];
    setExpandedCards(newExpandedState);
  };

  const handleScrollToSection = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navigate to the homepage
    }
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Delay to allow DOM to re-render after navigation
  };

  return (
    <>
      <Navbar />
      <Carousel />

      <div className="headings">
        <h2>Packages</h2>
      </div>

      <div className="package-card-wrapper">
        <ThemeProvider theme={theme}>
          {packagesData.packages.map((pkg, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 345,
                bgcolor: "#ffb368",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                position: "relative",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://picsum.photos/345/300"
              />
              <CardContent
                sx={{
                  maxHeight: expandedCards[index] ? "none" : "400px", // Limit content height when not expanded
                  overflow: "hidden", // Hide overflow when collapsed
                  transition: "max-height 0.3s ease-in-out", // Smooth expansion/collapse
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {pkg.name}
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {pkg.package_name}
                </Typography>

                <List>
                  {pkg.items.map((item, itemIndex) => (
                    <ListItem
                      key={itemIndex}
                      alignItems="flex-start"
                      sx={{ padding: "0" }}
                    >
                      <ListItemIcon style={{ minWidth: "24px" }}>
                        <ArrowRightIcon
                          style={{ fontSize: "2rem", marginTop: "0px" }}
                        />
                      </ListItemIcon>
                      <ListItemText primary={item} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>

              {/* Read More/Read Less Button */}
              <Button
                size="small"
                sx={{ marginTop: "8px", paddingBottom: "8px" , color:"#F42C1C"}}
                onClick={() => handleExpandClick(index)}
              >
                {expandedCards[index] ? "Read Less" : "Read More"}
              </Button>

              {/* Sticky CTA Button Section */}
              <CardActions
                sx={{
                  justifyContent: "space-around",
                  position: "sticky",
                  bottom: 0,
                  backgroundColor: "#ffb368", // Maintain background color
                  padding: "8px",
                }}
              >
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "#FFD700",
                  }}
                  size="small"
                  variant="contained"
                  href="/wedding-photos"
                  startIcon={<CollectionsIcon />}
                >
                  View Photos
                </Button>
                <Button
                  sx={{
                    color: "black",
                    backgroundColor: "#FFD700",
                  }}
                  size="small"
                  variant="contained"
                  onClick={() => handleScrollToSection("contact-tag")}
                  startIcon={<CallIcon />}
                >
                  Contact Us
                </Button>
              </CardActions>
            </Card>
          ))}
        </ThemeProvider>
      </div>

      <Footer />
    </>
  );
};

export default Packages;
