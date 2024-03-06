import React, { FC } from "react";
import { Link } from "react-router-dom";

import { MenuProps } from "./interface";

import { MenuContainer, MenuItem, MenuNavigation } from "./styled";

import { Brand, SearchBar } from "src/components";

export const Menu: FC<MenuProps> = ({ menu }) => {
  return (
    <MenuContainer>
      <Brand />
      {menu && menu.length > 0 && (
        <MenuNavigation>
          {menu.map(({ label, url }, index) => (
            <MenuItem key={`Menu_${index}`}>
              <Link to={url}>{label}</Link>
            </MenuItem>
          ))}
        </MenuNavigation>
      )}
      <SearchBar />
    </MenuContainer>
  );
};
