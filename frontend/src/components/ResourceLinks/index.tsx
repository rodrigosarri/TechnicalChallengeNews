import React, { FC } from "react";
import { Link } from "react-router-dom";

import { ResourceLinksProps } from "./interface";

import { ResourceLinksItem, ResourceLinksList } from "./styled";

export const ResourceLinks: FC<ResourceLinksProps> = ({ links }) => {
  return (
    <>
      {links && links.length > 0 && (
        <ResourceLinksList>
          {links &&
            links.map(({ label, url }, index) => (
              <ResourceLinksItem key={`ResourceLinks_${index}`}>
                <Link to={url} target="_blank" rel="noreferrer">
                  {label}
                </Link>
              </ResourceLinksItem>
            ))}
        </ResourceLinksList>
      )}
    </>
  );
};
