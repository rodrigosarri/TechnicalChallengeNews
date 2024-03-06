import React, { FC } from "react";
import { Link } from "react-router-dom";
import { SocialMediaProps } from "./interface";

import { SocialMediaItem, SocialMediaList } from "./styled";

export const SocialMedia: FC<SocialMediaProps> = ({ medias }) => {
  return (
    <>
      {medias && medias.length > 0 && (
        <SocialMediaList>
          {medias.map(({ url, icon }, index) => (
            <SocialMediaItem key={`SocialMedia_${index}`}>
              <Link to={url} target="_blank">
                <i className={`fab ${icon}`}></i>
              </Link>
            </SocialMediaItem>
          ))}
        </SocialMediaList>
      )}
    </>
  );
};
