import React from "react";

import { OpenGraphPage } from "./config";
import OgImage from "./OpenGraph/OgImage";
import OgMeta from "./OpenGraph/OgMeta";
import OgVideo from "./OpenGraph/OgVideo";
import Page from "./Page";

function generatePage(entry: OpenGraphPage): JSX.Element {
  const ogMeta =
    entry.type != null ? (
      <OgMeta
        description={entry.description}
        siteName="OG Tests"
        title={entry.title}
        type={entry.type}
        url={entry.url}
      />
    ) : (
      <OgMeta siteName="OG Tests" title={entry.title} />
    );

  const entryImages =
    entry.type != null
      ? [...(entry.image != null ? [entry.image] : []), ...(entry.images ?? [])]
      : [];

  const ogImages = entryImages.map((image) => (
    <OgImage
      key={image.url}
      alt={image.alt}
      height={image.height}
      url={image.url}
      type={image.type}
      width={image.width}
    />
  ));

  const entryVideos =
    entry.type != null
      ? [...(entry.video != null ? [entry.video] : []), ...(entry.videos ?? [])]
      : [];

  const ogVideos = entryVideos.map((video) => (
    <OgVideo
      key={video.url}
      alt={video.alt}
      height={video.height}
      url={video.url}
      type={video.type}
      width={video.width}
    />
  ));

  return (
    <Page>
      {ogMeta}
      {ogImages}
      {ogVideos}
    </Page>
  );
}

export default generatePage;
