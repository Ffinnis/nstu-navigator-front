import { VideoData } from '@/api/videos/types';
import Card from '@mui/material/Card';
import ReactPlayer from 'react-player/youtube';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function VideoCard(props: VideoData) {
  const { url, title } = props;

  return (
    <Card>
      <CardContent>
        <ReactPlayer width="100%" height="200px" url={url} />
        <Typography marginTop={3} variant="h5">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
