import React from 'react';

export interface Props {
  readonly alt?: string;
  readonly height?: number;
  readonly type?: string;
  readonly url: string;
  readonly width?: number;
}

function OgVideo({ alt, height, type, url, width }: Props): JSX.Element {
  return (
    <>
      <meta property='og:video' content={url} />
      {type && <meta property='og:video:type' content={type} />}
      {width && <meta property='og:video:width' content={width.toString()} />}
      {height && <meta property='og:video:height' content={height.toString()} />}
      {alt && <meta property='og:video:alt' content={alt} />}
    </>
  )
}

export default OgVideo;