import * as React from 'react';
import { useState } from 'react';
import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from "@mui/icons-material/Home";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AssignmentIcon from '@mui/icons-material/Assignment';


const SideBar = () => {
    const location = useLocation();
    return (
        <>
            <React.Fragment>
                <ListItemButton component={Link} to="/adminhome" >
                    <ListItemIcon>
                        <HomeIcon color={location.pathname === ("/" || "/adminhome") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton component={Link} to="/adminhome/schedule">
                    <ListItemIcon>
                        <AssignmentIcon color={location.pathname.startsWith("/adminhome/schedule") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Schedule" />
                </ListItemButton>
                <ListItemButton component={Link} to="/adminhome/staff">
                    <ListItemIcon>
                        <SupervisorAccountOutlinedIcon color={location.pathname.startsWith("/adminhome/staff") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Teachers" />
                </ListItemButton>
                <ListItemButton component={Link} to="/adminhome/grade">
                    <ListItemIcon>
                        <PersonOutlineIcon color={location.pathname.startsWith("/adminhome/grade") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Grading" />
                </ListItemButton>
                <ListItemButton component={Link} to="/adminhome/fee" >
                    <ListItemIcon>
                        <AccountBalanceIcon color={location.pathname === ( "/adminhome/fee") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Fee Payments" />
                </ListItemButton>
            </React.Fragment>
            <Divider sx={{ my: 1 }} />
            <React.Fragment>
                <ListSubheader component="div" inset>
                    User
                </ListSubheader>
                <ListItemButton component={Link} to="/adminhome/profile">
                    <ListItemIcon>
                        <AccountCircleOutlinedIcon color={location.pathname.startsWith("/adminhome/profile") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
                <ListItemButton component={Link} to="/logout">
                    <ListItemIcon>
                        <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItemButton>
            </React.Fragment>
        </>
    )
}

export default SideBar















// import * as React from 'react';
// import { Divider, ListItemButton, ListItemIcon, ListItemText, ListSubheader } from '@mui/material';
// import { Link, useLocation } from 'react-router-dom';

// import HomeIcon from "@mui/icons-material/Home";
// import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
// import ExitToAppIcon from "@mui/icons-material/ExitToApp";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
// import AnnouncementOutlinedIcon from '@mui/icons-material/AnnouncementOutlined';
// import ClassOutlinedIcon from '@mui/icons-material/ClassOutlined';
// import SupervisorAccountOutlinedIcon from '@mui/icons-material/SupervisorAccountOutlined';
// import FamilyRestroomIcon from '@mui/icons-material/FamilyRestroom';
// import ReportIcon from '@mui/icons-material/Report';
// import AssignmentIcon from '@mui/icons-material/Assignment';

// const SideBar = () => {
//     const location = useLocation();
//     return (
//         <>
//             <React.Fragment>
//                 <ListItemButton component={Link} to="/">
//                     <ListItemIcon>
//                         <HomeIcon color={location.pathname === ("/" || "/Admin/dashboard") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Home" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/classes">
//                     <ListItemIcon>
//                         <ClassOutlinedIcon color={location.pathname.startsWith('/Admin/classes') ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Classes" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/subjects">
//                     <ListItemIcon>
//                         <AssignmentIcon color={location.pathname.startsWith("/Admin/subjects") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Subjects" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/teachers">
//                     <ListItemIcon>
//                         <SupervisorAccountOutlinedIcon color={location.pathname.startsWith("/Admin/teachers") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Teachers" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/students">
//                     <ListItemIcon>
//                         <PersonOutlineIcon color={location.pathname.startsWith("/Admin/students") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Students" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/parents">
//                     <ListItemIcon>
//                         <FamilyRestroomIcon color={location.pathname.startsWith("/Admin/parents") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Parents" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/Admin/notices">
//                     <ListItemIcon>
//                         <AnnouncementOutlinedIcon color={location.pathname.startsWith("/Admin/notices") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Notices" />
//                 </ListItemButton>
//             </React.Fragment>
//             <Divider sx={{ my: 1 }} />
//             <React.Fragment>
//                 <ListSubheader component="div" inset>
//                     User
//                 </ListSubheader>
//                 <ListItemButton component={Link} to="/Admin/profile">
//                     <ListItemIcon>
//                         <AccountCircleOutlinedIcon color={location.pathname.startsWith("/Admin/profile") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Profile" />
//                 </ListItemButton>
//                 <ListItemButton component={Link} to="/logout">
//                     <ListItemIcon>
//                         <ExitToAppIcon color={location.pathname.startsWith("/logout") ? 'primary' : 'inherit'} />
//                     </ListItemIcon>
//                     <ListItemText primary="Logout" />
//                 </ListItemButton>
//             </React.Fragment>
//         </>
//     )
// }

// export default SideBar