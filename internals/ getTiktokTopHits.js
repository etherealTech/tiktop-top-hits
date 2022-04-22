import axios from 'axios';
import { JSDOM } from 'jsdom';

const TARGET_URL = 'https://tokboard.com';
const HTTP_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_4_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1',
  'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8',
};

export const getTiktokTopHits = async () => {
  const hits = [];
  const { data } = await axios.get(TARGET_URL, {
    responseType: 'text',
    headers: HTTP_HEADERS,
  });
  const { window } = new JSDOM(data);
  const { document } = window;
  
  console.log(data);
  
  return hits;
};
