import { createWriteStream } from "fs";
import { renderToPipeableStream } from "react-dom/server";

import config from "./config";
import generatePage from "./generate";

async function main() {
  for (const configKey of Object.keys(config)) {
    const configEntry = config[configKey];
    if (configEntry == null) {
      continue;
    }

    const page = generatePage(configEntry);

    const renderStream = renderToPipeableStream(page);
    const writeStream = createWriteStream(`./dist/${configKey}.html`, {
      encoding: "utf-8",
    });

    const finished = new Promise((resolve, reject) => {
      writeStream.on("close", () => {
        resolve(undefined);
      });

      writeStream.on("error", (error) => {
        reject(error);
      });
    });

    renderStream.pipe(writeStream);

    await finished;
  }
}

main();
