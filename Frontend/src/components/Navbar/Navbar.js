// import React from 'react'
// import classes from './Navbar.module.css'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import Drawer from '@mui/material/Drawer';
// // import CssBaseline from '@mui/material/CssBaseline';
// // import MuiAppBar,{AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
// // import { useTheme } from '@mui/material/styles';
// import MobileStepper from '@mui/material/MobileStepper';
// // import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';


// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// // import ChevronLeftIcon from '@mui/material/ChevronLeft';
// // import ChevronRightIcon from '@mui/material/ChevronRight';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
// import MenuIcon from '@mui/icons-material/Menu';
// import {styled,useTheme} from '@mui/material/styles';
// // import {NavLink, Outlet} from 'react-router-dom';
// // import { ThemeContext } from '@emotion/react';
// // import MenuIcon from '@mui/icons-material/MenuIcon'


// const steps = [
//   {
//     label: 'Select campaign settings',
//     description: `For each ad campaign that you create, you can control how much
//               you're willing to spend on clicks and conversions, which networks
//               and geographical locations you want your ads to show on, and more.`,
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Create an ad',
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Create an ad',
//     description: `Try out different ad text to see what brings in the most customers,
//               and learn how to enhance your ads using features like ad extensions.
//               If you run into any problems with your ads, find out how to tell if
//               they're running and how to resolve approval issues.`,
//   },
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];




// function Navbar() {
//   const DrawerHeader = styled('div')(({theme})=>({
//     display:'flex',
//     alignItems:'center',
//     padding:theme.spacing(0,1),
//     ...theme.mixins.toolbar,
//     justifyContent:'flex end',
//   }));
//   const drawerWidth = 240;
//   const theme = useTheme();
//   const handleDrawerClose = () => {
//     setOpen(false);
//   }
//   const [open,setOpen] = React.useState(false);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   }
//   const theme2 = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };
//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };
//   return (
//     <div>
//     <Box sx={{flexGrow:1}}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//           edge="start"
//           color="inherit"
//           onClick={handleDrawerOpen}
//           aria-label='open drawer'
//           sx={{mr:2, ...(open && {display:'none'}) }}>
//             {/* <MenuIcon/> */}
//           </IconButton>
//           <MenuIcon/>
//           <Typography variant="h6" component="div" sx={{flexGrow:1}}>News</Typography>
//           <Button color="inherit">Login</Button>

//         </Toolbar>
//       </AppBar>
//       <Drawer
//       sx={{
//         width: drawerWidth,
//         flexShrink:0,
//         '& .MuiDrawer-paper':{
//           width: drawerWidth,
//           boxSizing:'border-box'
//         },
//       }}
//       variant='persistent'
//       anchor="left"
//       open={open}
//       >
//         <DrawerHeader>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr'}
//           </IconButton>
//           <MenuIcon/>
//         </DrawerHeader>
//         <Divider/>
//         <List>
//           {['Inbox','Starred','Sent','Drafts'].map((text,index)=>(
//             <ListItem key={text} disablePadding>
//               <ListItemButton>
//                 <ListItemIcon>
//                   {index % 2 === 0 ? <InboxIcon/>:<MailIcon/>}
//                 </ListItemIcon>
//                 <ListItemText primary={text}/>
//               </ListItemButton>
//             </ListItem>
//           ))}
//         </List>
//         <Divider/>
//         <List>
//           {['All mails','Trash','Spam'].map((text,index)=>
//         <ListItem key={text} disablePadding>
//         <ListItemButton>
//           <ListItemIcon>
//             {index % 2 === 0 ? <InboxIcon/>:<MailIcon/>}
//           </ListItemIcon>
//           <ListItemText primary={text}/>
//         </ListItemButton>
//       </ListItem>
//     )}
//         </List>
//       </Drawer>
//     </Box>
//     <div className={classes.TextCorosel}>
//     <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
//         {steps[activeStep].description}
//     </Box>
//     <Box>
//     <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme2.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//     <MobileStepper
//       variant="progress"
//       steps={6}
//       position="static"
//       activeStep={activeStep}
//       sx={{ maxWidth: 400, flexGrow: 1 }}
//       nextButton={
//         <Button size="small" onClick={handleNext} disabled={activeStep === 5}>
//           Next
//           {theme2.direction === 'rtl' ? (
//             <KeyboardArrowLeft />
//           ) : (
//             <KeyboardArrowRight />
//           )}
//         </Button>
//       }
//       backButton={
//         <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//           {theme2.direction === 'rtl' ? (
//             <KeyboardArrowRight />
//           ) : (
//             <KeyboardArrowLeft />
//           )}
//           Back
//         </Button>
//       }
//     />
//     </Box>
//     </div>
//     </div>
//   )
// }

// export default Navbar

// ? <ChevronLeftIcon/>:<ChevronLeftIcon/>

// import * as React from 'react';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import MobileStepper from '@mui/material/MobileStepper';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
// import SwipeableViews from 'react-swipeable-views';
// import { autoPlay } from 'react-swipeable-views-utils';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

// const images = [
//   {
//     label: 'San Francisco – Oakland Bay Bridge, United States',
//     imgPath:
//       'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bird',
//     imgPath:
//       'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
//   },
//   {
//     label: 'Bali, Indonesia',
//     imgPath:
//       'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
//   },
//   {
//     label: 'Goč, Serbia',
//     imgPath:
//       'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
//   },
// ];

// function SwipeableTextMobileStepper() {
//   const theme = useTheme();
//   const [activeStep, setActiveStep] = React.useState(0);
//   const maxSteps = images.length;

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleStepChange = (step) => {
//     setActiveStep(step);
//   };

//   return (
//     <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
//       <Paper
//         square
//         elevation={0}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           height: 50,
//           pl: 2,
//           bgcolor: 'background.default',
//         }}
//       >
//         <Typography>{images[activeStep].label}</Typography>
//       </Paper>
//       <AutoPlaySwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={activeStep}
//         onChangeIndex={handleStepChange}
//         enableMouseEvents
//       >
//         {images.map((step, index) => (
//           <div key={step.label}>
//             {Math.abs(activeStep - index) <= 2 ? (
//               <Box
//                 component="img"
//                 sx={{
//                   height: 255,
//                   display: 'block',
//                   maxWidth: 400,
//                   overflow: 'hidden',
//                   width: '100%',
//                 }}
//                 src={step.imgPath}
//                 alt={step.label}
//               />
//             ) : null}
//           </div>
//         ))}
//       </AutoPlaySwipeableViews>
//       <MobileStepper
//         steps={maxSteps}
//         position="static"
//         activeStep={activeStep}
//         nextButton={
//           <Button
//             size="small"
//             onClick={handleNext}
//             disabled={activeStep === maxSteps - 1}
//           >
//             Next
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowLeft />
//             ) : (
//               <KeyboardArrowRight />
//             )}
//           </Button>
//         }
//         backButton={
//           <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
//             {theme.direction === 'rtl' ? (
//               <KeyboardArrowRight />
//             ) : (
//               <KeyboardArrowLeft />
//             )}
//             Back
//           </Button>
//         }
//       />
//     </Box>
//   );
// }

// export default SwipeableTextMobileStepper;


import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
// import Admin from '../SchoolManagement/Admin';
// import { BrowserRouter,Route,Routes } from 'react-router-dom';
// import Admin from '..SchoolManagement/Admin';
// import Signup from '..signup/Signup';
function Navbar() {
  return (
    <div>
        <NavLink to="home">Home</NavLink> &nbsp;
        <NavLink to="admin" >Admin</NavLink> &nbsp;
        <NavLink to="parent">Parent</NavLink> &nbsp;
        <NavLink to="signup">Signup</NavLink> &nbsp;
        <Outlet/>
    </div>
  )
}

export default Navbar

{/* <BrowserRouter>
<Routes>
    <Route path='/admin' element={<Admin/>}/>
    <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </BrowserRouter> */}