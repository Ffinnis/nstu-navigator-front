import { VideoData } from './types';

class VideoApi {
  async getVideos(title?: string): Promise<VideoData[]> {
    const url = new URL(`http://localhost:3333/api/v1/video?${title ? `title=${title}` : ''}`);

    const req = await fetch(url, {
      method: 'GET',
    });

    return req.json();
  }
}

export default VideoApi;
