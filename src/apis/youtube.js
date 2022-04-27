import axios from 'axios';

const KEY = 'here must be you own api key)';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY,
   },
});
