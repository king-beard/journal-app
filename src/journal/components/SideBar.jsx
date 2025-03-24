import { TurnedInNot } from "@mui/icons-material";
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"

const months = ['Enero', 'Febrero', 'Marzo', 'Abril'];

export const SideBar = ({ drawerWith }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWith, flexShrink: { sm: 0 } } }}
    >
      <Drawer
        variant="permanent"
        open
        sx={{
          display : { xs: 'block' },
          '& .MuiDrawer-paper' : { boxSizing: 'border-box', width: drawerWith }
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Jesus Herrera
          </Typography>
        </Toolbar>
        <Divider />

        <List>
         {
          months.map( text => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                  <ListItemText primary={text}></ListItemText>
                  <ListItemText secondary={"Occaecat magna excepteur"}></ListItemText>
                </Grid2>
              </ListItemButton>
            </ListItem>
          ))
         }
        </List>
      </Drawer>
    </Box>
  )
}
