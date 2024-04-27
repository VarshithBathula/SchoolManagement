import React, { useState, useEffect, useContext } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
    Paper,
    MobileStepper,
    Button
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AppBar, Drawer } from '../../Components/styles';
import ParentSideBar from '../../Components/ParentSideBar';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useTheme } from '@mui/material/styles';


const steps = [
    {
      label: 'Parent Home Page',
      description: `This home page redirects you to other accessible 
      components such as to view schedule and  time table,
      to view the teachers and their respective subject, and
      grading of a student.`,
    },
    {
      label: 'Parent Schedule Page',
      description:`This schedule page helps parents to check their
      kid's current and upcoming classes, this page also mentions
       time and day of the respective session.`,
    },
    {
      label: 'Parent Staff Page',
      description: `This staff page helps parent to keep a 
      track of their subject and their respective teacher
       or to keep a track of their teacher and their
        respective subject.`,
    },
    {
        label: 'Parent Grading Page',
        description: `This grading page helps parent to check
        their and compare themselves with their fellow
         students without waiting for a physical report
          card to come`,
      },
  ];


const ParentHomePage = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
        
    };
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = steps.length;
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };
    return (
        <div className="student-home-page">
            <h2>Parent</h2>
            <div style={{display:'flex'}}>
            <div>
                <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar open={open} position='absolute'>
                    <Toolbar sx={{ pr: '24px' }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && { display: 'none' }),
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{ flexGrow: 1 }}
                        >
                            Parent Dashboard
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open} sx={open ? styles.drawerStyled : styles.hideDrawer}>
                    <Toolbar sx={styles.toolBarStyled}>
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon />
                        </IconButton>
                    </Toolbar>
                    <Divider />
                    <List component="nav">
                        <ParentSideBar />
                    </List>
                </Drawer>
                </Box>
            </div>
            <div style={{margin:'10%', marginTop:'100px'}}>
            <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{steps[activeStep].label}</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <MobileStepper
      variant="progress"
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{ maxWidth: 400, flexGrow: 1 }}
      nextButton={
        <Button size="small" onClick={handleNext} disabled={activeStep === 3}>
          Next
          {theme.direction === 'rtl' ? (
            <KeyboardArrowLeft />
          ) : (
            <KeyboardArrowRight />
          )}
        </Button>
      }
      backButton={
        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
          {theme.direction === 'rtl' ? (
            <KeyboardArrowRight />
          ) : (
            <KeyboardArrowLeft />
          )}
          Back
        </Button>
        }
      />
    </Box>
    </div>
            </div>
            
        </div>
    );
};

export default ParentHomePage;

const styles = {
    boxStyled: {
        backgroundColor: (theme) =>
            theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    toolBarStyled: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        px: [1],
    },
    drawerStyled: {
        display: "flex"
    },
    hideDrawer: {
        display: 'flex',
        '@media (max-width: 600px)': {
            display: 'none',
        },
    },
}









// import React,{useEffect,useState} from 'react';
// import GradeList from '../../Components/Grading/GradeList';
// import ScheduleList from '../../Components/Schedule/ScheduleList';
// import StaffList from '../../Components/StaffManagement/StaffList';

// const ParentHomePage = () => {

//     return (
//         <div className="student-home-page">
//             <h2>Welcome to Parents Home Page</h2>
//             <ScheduleList/>
//             <StaffList/>
//             <GradeList/>
//         </div>
//     );
// };

// export default ParentHomePage;