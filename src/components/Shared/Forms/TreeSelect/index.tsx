import { Props } from "./types";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import { findInText } from "./utils";
import { createFilterOptions } from "@mui/material/Autocomplete";

import WrapperStyles, {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "./styles";
import { useEffect, useState } from "react";
import { get as getProp } from "object-path";

const TreeSelect: React.FC<Props> = ({
  id,
  name,
  label,
  multiple,
  className,
  onChange,
  error,
  helperText,
  placeholder,
  options,
  value,
}) => {
  const [selected, setSelected] = useState(value);
  const [privateOptions, setOptions] = useState(options);

  useEffect(() => {
    const list = options.map((item) => {
      item.children = recursiveFinderItem(item, item.children, true);
      return item;
    });
    setOptions(list);
  }, [options]);

  useEffect(() => {
    onChange({ target: { name, value: selected } });
  }, [selected]);

  const hasChildren = (option: any): boolean => {
    return Array.isArray(option.children) && option.children.length > 0;
  };

  const recursiveFinderItem = (
    item: any,
    list: any,
    original: boolean = false
  ) => {
    if (!Array.isArray(list)) {
      return [];
    }
    return list.map((opt: any) => {
      if (opt.id === item.id) {
        opt.open = original ? opt.open : !item.open;
      }
      opt.selected = false;
      if (opt.id === item.id && !hasChildren(opt)) {
        opt.selected = true;
      }
      opt.children = recursiveFinderItem(item, opt.children);
      return opt;
    });
  };

  const onClickItemAction = (event: any, item: any) => {
    event.stopPropagation();
    // console.log("CLICKED", item, hasChildren(item));
    const list = recursiveFinderItem(item, privateOptions);
    setOptions(list);
    if (!hasChildren(item)) {
      setSelected(item);
    }
    return false;
  };

  const renderSubOptions = (option: any, node: number) => {
    return (
      <>
        {hasChildren(option) && (
          <List className={option.open ? "" : "hide"}>
            {option.children.map((item: any, index: number) => (
              <div key={`${option.id}${node}${index}`}>
                <ListItem
                  style={{ paddingLeft: 36 * node }}
                  onClick={(event) => onClickItemAction(event, item)}
                >
                  {hasChildren(item) && (
                    <ListItemIcon>
                      {item.open ? (
                        <KeyboardArrowDownIcon />
                      ) : (
                        <ChevronRightIcon />
                      )}
                    </ListItemIcon>
                  )}
                  <ListItemText primary={item.label} />
                </ListItem>
                {renderSubOptions(item, node + 1)}
              </div>
            ))}
          </List>
        )}
      </>
    );
  };

  const renderOption = (_props: object, option: any, _state: object) => {
    return (
      <List key={option.id}>
        <ListItem onClick={(event) => onClickItemAction(event, option)}>
          {hasChildren(option) && (
            <ListItemIcon>
              {option.open ? <KeyboardArrowDownIcon /> : <ChevronRightIcon />}
            </ListItemIcon>
          )}
          <ListItemText primary={option.label} />
        </ListItem>
        {renderSubOptions(option, 1)}
      </List>
    );
  };

  const recursiveFinder = (option: any, value: any): boolean => {
    if (option.id === value.id) {
      return true;
    }
    let equal = false;
    if (hasChildren(option)) {
      for (let index = 0; index < option.children.length; index++) {
        const item = option.children[index];
        if (item.id === value.id) {
          equal = true;
          return true;
        }
        equal = recursiveFinder(item, value);
      }
    }
    return equal;
  };

  const findInText = createFilterOptions({
    matchFrom: "any",
    stringify: (option: any) => option.label,
  });

  const recursiveFilter = (options: any, state: any): Array<any> => {
    //Busca en el nodo principal...
    const principalResults = findInText(options, state);
    //Ahora tenemos que buscar en los nodos hijos...
    // const childResults = options.filter((item: any) => {
    //   return recursiveFilter([...item.children], state);
    // });
    return principalResults;

    // if (findInText(optio)) {
    //   return true;
    // }
    // let equal = false;
    // if (hasChildren(option)) {
    //   for (let index = 0; index < option.children.length; index++) {
    //     const item = option.children[index];
    //     if (findInText(item, inputValue)) {
    //       equal = true;
    //       return true;
    //     }
    //     equal = recursiveFilter(item, inputValue);
    //   }
    // }
    // return equal;
  };

  const filterOptions = (options: any, state: any) => {
    console.log("OPTIONS", options);
    console.log("STATE", state);
    return recursiveFilter(options, state);
    // return options.filter((item: any) => {
    //   if (recursiveFilter(item, state)) {
    //     return item;
    //   }
    // });
  };

  return (
    <WrapperStyles>
      <Autocomplete
        id={id || name}
        noOptionsText="Sin opciones"
        multiple={multiple}
        className={`tree-select-autocomplete ${className}`}
        options={privateOptions}
        value={value}
        renderOption={renderOption}
        filterOptions={filterOptions}
        getOptionLabel={(option: any) => {
          return getProp(option, "label", "");
        }}
        isOptionEqualToValue={(option, value) => {
          return recursiveFinder(option, value);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            size="small"
            error={error}
            helperText={helperText}
            placeholder={placeholder}
          />
        )}
      />
    </WrapperStyles>
  );
};

export default TreeSelect;
