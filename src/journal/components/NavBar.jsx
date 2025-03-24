import { AppBar, IconButton, Toolbar, Typography } from "@mui/material"
import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"

export const NavBar = ({ drawerWith }) => {
  return (
    <AppBar 
      position="fixed"
      sx={{ 
        width: { sm: `calc(100% - ${drawerWith}px)` },
        ml: {sm: `${drawerWith}px`} 
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuOutlined />
        </IconButton>

        <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>JournalApp</Typography>

        <IconButton color="error">
          <LogoutOutlined/>
        </IconButton>

      </Toolbar>
    </AppBar>
  )
}
