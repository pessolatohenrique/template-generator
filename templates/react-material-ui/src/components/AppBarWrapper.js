import {
  Typography,
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
} from "@mui/material";
import MenuIcon from "@material-ui/icons/Menu";

function AppBarWrapper() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Project name
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default AppBarWrapper;
