import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';

const RemoteResourceList = React.lazy(() => import('addresses/ResourceList'));

const drawerWidth = 280;

const menu = [
  { title: 'ARRING IN PARIS', path: '/arriving' },
  { title: 'USEFULL ADDRESSES', path: '/addresses' },
  { title: 'PROCEDURES', path: '/procedures' },
]

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <Drawer
          variant="permanent"
          sx={{ width: drawerWidth }}
        >
          <List>
            <ListItemText primary="GUIDE PARIS" sx={{ p: 2 }} />
            <Divider />
            {menu.map((item) => (
              <ListItem key={item.title} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemText primary={item.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<h2>Welcome!</h2>} />
              <Route path="/addresses" element={<RemoteResourceList />} />
              <Route path="/arriving" element={<div>Not ready yet</div>} />
              <Route path="/procedures" element={<div>Not ready yet</div>} />
            </Routes>
          </Suspense>
        </Box>
      </Box>
    </BrowserRouter>
  );
};

export default App;
