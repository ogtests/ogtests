import React from 'react';
import { OgType } from './OpenGraphTypes';

export interface Props {
  readonly description?: string;
  readonly siteName: string;
  readonly title: string;
  readonly type?: OgType;
  readonly url?: string;
}

function OgMeta({ description, siteName, title, type, url }: Props): JSX.Element {
  return (
    <>
      <meta property='og:site_name' content={siteName} />
      {url && <meta property='og:url' content={url} />}
      {type && <meta property='og:type' content={type} />}
      <meta property='og:title' content={title} />
      {description && <meta property='og:description' content={description} />}
    </>
  )
}

export default OgMeta;