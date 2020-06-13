import React from "react";
import {
  Box, Card, CardContent, Typography,
  List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox
} from '@material-ui/core';

interface Props {
  classes: any;
  title: string;
  filterItems: any;
}

export const FilterMenu: React.FC<Props> = ({ classes, title, filterItems }) => {
  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.filterTitle} align="center" variant="h5">{title}</Typography>
        <List className={classes.list} component="nav" aria-label="categories">
          {filterItems.map(filterItem => (
            <ListItem key={`${filterItem}`} divider>
              <ListItemText primary={`${filterItem}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={() => console.log("change")}
                  checked={true}
                  inputProps={{ 'aria-labelledby': "efe" }}
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default FilterMenu;
