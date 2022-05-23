import { asset, text } from "./utils";

export interface Config {
  [name: string]: OpenGraphPage | undefined;
}

export type OpenGraphPage = 
  | OpenGraphArticle
  | OpenGraphProfile
  | OpenGraphWebsite
  | { title: string, type?: undefined };

interface OpenGraphCommon {
  title: string;
  description?: string;
  url?: string;
  image?: OpenGraphImage;
  images?: OpenGraphImage[];
  video?: OpenGraphVideo;
  videos?: OpenGraphVideo[];
}

interface OpenGraphArticle extends OpenGraphCommon {
  type: 'article';
  author?: string;
  modifiedTime?: string;   
  publishedTime?: string;
}

interface OpenGraphProfile extends OpenGraphCommon  {
  type: 'profile';
  username?: string;
}

interface OpenGraphWebsite extends OpenGraphCommon  {
  type: 'website'
}

interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  type?: string;
  alt?: string;
}

interface OpenGraphVideo {
  url: string;
  width?: number;
  height?: number;
  type?: string;
  alt?: string;
}

const config: Config = {
  empty: {
    title: "Empty",
  },
  title_long: {
    title: `Title/Long: ${text(200, 1)}`
  },
  text: {
    type: 'article',
    title: 'Text',
    description: text(200, 2),
  },
  text_long: {
    type: 'article',
    title: 'Text/Long',
    description: text(1000, 3),
  },
  image_square: {
    type: 'website',
    title: 'Image/Square',
    description: text(200, 4),
    image: {
      url: asset('assets/calibration-square.png'),
      width: 600,
      height: 600,
      type: 'image/png',
      alt: 'A square calibration image'
    }
  },
  image_tall: {
    type: "website",
    title: 'Image/Tall',
    description: text(200, 5),
    image: {
      url: asset('assets/calibration-tall.png'),
      width: 400,
      height: 800,
      type: 'image/png',
      alt: 'A tall calibration image'
    }
  },
  image_wide: {
    type: 'website',
    title: 'Image/Wide',
    description: text(200, 6),
    image: {
      url: asset('assets/calibration-wide.png'),
      width: 800,
      height: 400,
      type: 'image/png',
      alt: 'A wide calibration image'
    }
  },
  image_multiple: {
    type: 'website',
    title: 'Image/Multiple',
    description: text(200, 7),
    images: [
      {
        url: asset('assets/kirby.png'),
        type: 'image/png',
        alt: 'Kirby'
      },
      {
        url: asset('assets/calibration-wide.png'),
        width: 800,
        height: 400,
        type: 'image/png',
        alt: 'A wide calibration image'
      }
    ]
  },
  image_gif: {
    type: 'website',
    title: 'Image/Gif',
    description: text(200, 8),
    images: [
      {
        url: asset('assets/firehose.gif'),
        type: 'image/png',
        alt: 'Kirby'
      }
    ]
  },
  video_square: {
    type: 'website',
    title: 'Video/Square',
    description: text(200, 8),
    video: {
      url: asset('assets/dog.mp4'),
      width: 480,
      height: 480,
      alt: 'haha funny dog video',
    }
  },
  url_different: {
    type: 'website',
    url: 'https://google.com',
    title: 'Url/Different',
    description: text(200, 8),
  },
  url_same: {
    type: 'website',
    url: 'https://ogtests.github.io/ogtests/dist/url_same.html',
    title: 'Url/Same',
    description: text(200, 8),
  },
};

export default config;
