import React from 'react';

export interface Props {
  readonly alt?: string;
  readonly height?: number;
  readonly type?: string;
  readonly url: string;
  readonly width?: number;
}

function OgImage({ alt, height, type, url, width }: Props): JSX.Element {
  return (
    <>
      <meta property='og:image' content={url} />
      {type && <meta property='og:image:type' content={type} />}
      {width && <meta property='og:image:width' content={width.toString()} />}
      {height && <meta property='og:image:height' content={height.toString()} />}
      {alt && <meta property='og:image:alt' content={alt} />}
    </>
  )
}

export default OgImage;