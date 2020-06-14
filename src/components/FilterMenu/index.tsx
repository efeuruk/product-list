import React from "react";
import {
  Card, CardContent, Typography,
  List, ListItem, ListItemText, ListItemSecondaryAction, Checkbox
} from '@material-ui/core';

interface Props {
  classes: any;
  title: string;
  filterItems: any;
  filterFunction: (value: string) => void;
  renderAll: () => void;
  dispatch?: any;
  globalState: any;
}

export const FilterMenu: React.FC<Props> = ({ classes, title, filterItems,
  filterFunction, renderAll, dispatch, globalState }) => {
  const [checked, setChecked] = React.useState([]);
  const { listItems, filters } = globalState;

  const handleChange = (index: never) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const currentIndex = checked.indexOf(index);
    const newChecked = [...checked];
    if (currentIndex === -1) {
      newChecked.push(index);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
    event.target.checked ? dispatch(filterFunction((event.target.value).toString())) : dispatch(renderAll());
  };

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.filterTitle} align="center" variant="h5">{title}</Typography>
        <List className={classes.list} component="nav" aria-label="categories">
          {filterItems.map((filterItem, index: never) => (
            <ListItem key={`${filterItem.id}`} divider>
              <ListItemText primary={`${filterItem.name}`} />
              <ListItemSecondaryAction>
                <Checkbox
                  edge="end"
                  onChange={handleChange(index)}
                  value={filterItem.id}
                  checked={checked.indexOf(index) !== -1}
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
