/* eslint-disable @typescript-eslint/no-explicit-any */
export interface QueryStringProps {
  orderBy?: string;
  limit?: number;
  [key: string]: any;
}

export interface postMetadataPayload {
  newsUuid: string;
}