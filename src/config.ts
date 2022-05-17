import { generateNonsense } from "./utils";

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
    title: `Title/Long: ${generateNonsense(200)}`
  },
  text: {
    type: 'article',
    title: 'Text',
    description: generateNonsense(200),
  },
  text_long: {
    type: 'article',
    title: 'Text/Long',
    description: generateNonsense(1000),
  },
  image_square: {
    type: 'website',
    title: 'Image/Square',
    description: generateNonsense(200),
    image: {
      url: 'assets/calibration-square.png',
      width: 600,
      height: 600,
      type: 'image/png',
      alt: 'A square calibration image'
    }
  },
  image_tall: {
    type: "website",
    title: 'Image/Wide',
    description: generateNonsense(200),
    image: {
      url: 'assets/calibration-tall.png',
      width: 400,
      height: 800,
      type: 'image/png',
      alt: 'A tall calibration image'
    }
  },
  image_wide: {
    type: 'website',
    title: 'Image/Wide',
    description: generateNonsense(200),
    image: {
      url: 'assets/calibration-wide.png',
      width: 800,
      height: 400,
      type: 'image/png',
      alt: 'A wide calibration image'
    }
  },
  image_multiple: {
    type: 'website',
    title: 'Image/Wide',
    description: generateNonsense(200),
    image: {
      url: 'assets/calibration-wide.png',
      width: 800,
      height: 400,
      type: 'image/png',
      alt: 'A wide calibration image'
    }
  }
};

export default config;
