import { resolve } from 'path';
import { readFile, writeFile, readJson } from 'fs-extra';
import { getTiktokTopHits } from './internals/getTiktokTopHits';

const ROOT_DIR = process.cwd();
const STUB_DIR = resolve(ROOT_DIR, 'stubs');

const init = async () => {
  const config = {
    title: undefined,
    updatedAt: undefined,
    hits: undefined,
  };
  const project = await readJson(resolve(ROOT_DIR, 'package.json'));
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
