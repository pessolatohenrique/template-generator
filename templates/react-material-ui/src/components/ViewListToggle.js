import { Button, Grid } from "@mui/material";
import ListIcon from "@material-ui/icons/List";
import ViewModuleIcon from "@material-ui/icons/ViewModule";

function ViewListToggle({ isTable, isList, switchFormat }) {
  return (
    <Grid container justifyContent="flex-end" gap="10px">
      <Button
        variant={isTable() ? "contained" : "text"}
        onClick={() => switchFormat("table")}
      >
        <ListIcon />
      </Button>
      <Button
        variant={isList() ? "contained" : "text"}
        onClick={() => switchFormat("list")}
      >
        <ViewModuleIcon />
      </Button>
    </Grid>
  );
}

export default ViewListToggle;
