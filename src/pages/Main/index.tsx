import SearchInput from './SearchInput';
import VideoApi from '@/api/videos';
import VideoCard from './VideoCard';
import debounce from '@/utils/debounce';
import { VideoCardsContainer } from './styled';
import { useCallback, useEffect, useState } from 'react';
import { VideoData } from '@/api/videos/types';

function Main() {
  const [searchValue, setSearchValue] = useState('');
  const [videos, setVideos] = useState<VideoData[]>([]);

  const onSearch = debounce(async (value: string) => {
    setSearchValue(value);
  }, 700);

  const fetchVideos = useCallback(async () => {
    const videoApi = new VideoApi();

    const videosResponse = await videoApi.getVideos(searchValue);

    setVideos(videosResponse);
  }, [searchValue]);

  useEffect(() => {
    fetchVideos();
  }, [fetchVideos]);

  return (
    <div>
      <SearchInput onInput={onSearch} />
      <VideoCardsContainer>
        {videos?.map((item) => {
          return (
            <VideoCard
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
            />
          );
        })}
      </VideoCardsContainer>
    </div>
  );
}

export default Main;
