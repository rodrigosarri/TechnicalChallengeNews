import { css } from "styled-components";

import { QueryStringProps } from "src/services/interface";

const mediaSizes: { [key: string]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
  xxxl: 1599,
};

export const mediaQueries = () => {
  const media = (Object.keys(mediaSizes) as Array<keyof typeof mediaSizes>).reduce((acc, label) => {
    acc[label] = (...args: Parameters<typeof css>) => css`
      @media (min-width: ${mediaSizes[label]}px) {
        ${css(...args)}
      }
    `;
    return acc;
  }, {} as { [key in keyof typeof mediaSizes]: (...args: Parameters<typeof css>) => ReturnType<typeof css> });

  return media;
};

export function toQueryString(params: QueryStringProps): string | null {
  const query = new URLSearchParams(params).toString();
  return query ? `?${query}` : "";
}

export const formatDate = (dateString: Date): string => {
  if (!dateString) {
    return "";
  }

  const date = new Date(dateString);
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return formatter.format(date);
};