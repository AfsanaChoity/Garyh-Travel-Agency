import React, { useState } from 'react'
import SharedHeading from '../../Component/Shared/SharedHeading'
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material'
import AccountSetting from './AccountSetting/AccountSetting'
import TabPanel from '../../Component/Shared/TabPanel'
import LoginSecurity from './Login&Security/LoginSecurity'
import NotificationsTable from './Notification/NotificationsTable'

export default function ProfileSetting() {
  const [tabValue, setTabValue] = useState(() => {
    const savedTab = localStorage.getItem("profileTab");
    return savedTab ? parseInt(savedTab) : 0;
  });

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
    localStorage.setItem("profileTab", newValue);
  };

  return (
    <div>
      {/* heading */}
      <div>
        <SharedHeading text="My Profile" />
      </div>

      {/* Form */}
      <div className='mt-8'>
        <Paper
          elevation={0}
          sx={{
            p: { md: 4, xs: 0 },
            backgroundColor: "#fafafa",
            borderRadius: 2,
            boxShadow: "0 4px 4px rgba(0,0,0,0.1)",
          }}
        >
          {/* Tabs */}
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 3, overflowX: 'auto' }}>
            <Tabs
              value={tabValue}
              onChange={handleTabChange}
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              sx={{
                minHeight: 48,
                "& .MuiTabs-flexContainer": {
                  flexWrap: "nowrap",
                },
                "& .MuiTab-root": {
                  textTransform: "none",
                  fontSize: "16px",
                  fontWeight: "500",
                  color: "#666",
                  minWidth: "auto",
                  whiteSpace: "nowrap",
                  px: {xs:"20%", md: "16px" },
                  "&.Mui-selected": {
                    color: "#468F9D",
                  },
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#468F9D",
                },
              }}
            >
              <Tab label="Account Setting" />
              <Tab label="Login & Security" />
              <Tab label="Notifications" />
            </Tabs>
          </Box>

          {/* Account Setting Tab */}
          <AccountSetting tabValue={tabValue} />

          {/* Login & Security Tab */}
          <TabPanel value={tabValue} index={1}>
            <LoginSecurity />
          </TabPanel>

          {/* Notifications Tab */}
          <TabPanel value={tabValue} index={2}>
            <NotificationsTable />
          </TabPanel>
        </Paper>
      </div>
    </div>
  );
}
