import React, { FC, useState, useEffect } from "react";

import { ResourceLink } from "src/components/ResourceLinks/interface";
import { Media } from "src/components/SocialMedia/interface";
import { MenuLink } from "./Menu/interface";

import {
  HeaderContainer,
  HeaderContainerCol,
  HeaderContainerTop,
  HeaderCurrentDate,
  HeaderNav,
  HeaderTop,
} from "./styled";

import { Wrapper, ResourceLinks, SocialMedia, Menu } from "src/components";

import { getMenu, getSocialMedia, getResourceLink } from "src/services";

import { formatDate } from "src/utils";

export const Header: FC = () => {
  const [menuItems, setMenuItems] = useState<MenuLink[]>([]);
  const [socialMediaItems, setSocialMediaItems] = useState<Media[]>([]);
  const [resourceLinkItems, setResourceLinkItems] = useState<ResourceLink[]>([]);

  const fetchSocialMedias = async (): Promise<void> => {
    const data = await getSocialMedia({orderBy: "asc"});
    setSocialMediaItems(data);
  };

  const fetchResourceLink = async (): Promise<void> => {
    const data = await getResourceLink({orderBy: "asc"});
    setResourceLinkItems(data);
  };

  const fetchMenu = async (): Promise<void> => {
    const data = await getMenu({orderBy: "asc"});
    setMenuItems(data);
  };

  useEffect(() => {
    fetchMenu();
    fetchSocialMedias();
    fetchResourceLink();
  }, []);

  return (
    <HeaderContainer>
      <HeaderTop>
        <Wrapper>
          <HeaderContainerTop>
            <HeaderContainerCol>
              <HeaderCurrentDate>{formatDate(new Date())}</HeaderCurrentDate>
              <ResourceLinks links={resourceLinkItems} />
            </HeaderContainerCol>
            <HeaderContainerCol>
              <SocialMedia medias={socialMediaItems} />
            </HeaderContainerCol>
          </HeaderContainerTop>
        </Wrapper>
      </HeaderTop>
      <HeaderNav>
        <Wrapper>
          <Menu menu={menuItems} />
        </Wrapper>
      </HeaderNav>
    </HeaderContainer>
  );
};
