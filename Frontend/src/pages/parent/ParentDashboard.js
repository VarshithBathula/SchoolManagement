import { useState } from 'react';
import {
    CssBaseline,
    Box,
    Toolbar,
    List,
    Typography,
    Divider,
    IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Navigate, Route, Routes } from 'react-router-dom';
import ParentHomePage from './ParentHomePage';
import StudentProfile from '../student/StudentProfile';
import ParentProfile from './ParentProfile';
import StudentSubjects from '../student/StudentSubjects';
import ViewStdAttendance from '../student/ViewStdAttendance';
import Logout from '../Logout'
import AccountMenu from '../../components/AccountMenu';
import { AppBar, Drawer } from '../../components/styles';

const ParentDashboard = () => {
    const [open, setOpen] = useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <>
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
                            Student Dashboard
                        </Typography>
                        <AccountMenu />
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
                    </List>
                </Drawer>
                <Box component="main" sx={styles.boxStyled}>
                    <Toolbar />
                    <Routes>
                        <Route path="/" element={<ParentHomePage />} />
                        <Route path='*' element={<Navigate to="/" />} />
                        <Route path="/Student/dashboard" element={<ParentHomePage />} />
                        <Route path="/Student/profile" element={<StudentProfile />} />
                        <Route path="Parent/profile" element={<ParentProfile />} />

                        <Route path="/Student/subjects" element={<StudentSubjects />} />
                        <Route path="/Student/attendance" element={<ViewStdAttendance />} />

                        <Route path="/logout" element={<Logout />} />
                    </Routes>
                </Box>
            </Box>
        </>
    );
}

export default ParentDashboard

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