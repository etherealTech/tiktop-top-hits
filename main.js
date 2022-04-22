import { resolve } from 'path';
import { readFile, writeFile, readJson } from 'fs-extra';
import { getTiktokTopHits } from './internals';

const STUB_DIR = resolve(__dirname, 'stubs');

const init = async () => {
  const config = {
    title: undefined,
    updatedAt: undefined,
    hits: undefined,
  };
  const project = await readJson(resolve(__dirname, 'package.json'));
  const date = new Date();
  
  config.title = project.name;
  config.updatedAt = new Date().toLocaleString('en-US', {
    timeZone: 'Asia/Yangon',
  });
  config.hits = await getTiktokTopHits();
  console.log();
  console.log('-----------------------');
  console.log(config);
};

init();
