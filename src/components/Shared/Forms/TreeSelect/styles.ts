import { styled } from "@mui/material";
import ListMui from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIconMui from "@mui/material/ListItemIcon";
import ListItemTextMui from "@mui/material/ListItemText";

export const List = styled(ListMui)`
  padding: 0;
`;
export const ListItem = styled(ListItemButton)`
  border-radius: 0;
  padding-top: 6px;
  padding-bottom: 6px;
`;
export const ListItemText = styled(ListItemTextMui)``;
export const ListItemIcon = styled(ListItemIconMui)`
  min-width: 24px;
  max-width: 24px;
  & .MuiSvgIcon-root {
    font-size: 1.2em;
    opacity: 0.8;
  }
`;

export default styled("div")``;
