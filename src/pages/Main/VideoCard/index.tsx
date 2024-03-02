import { VideoData } from '@/api/videos/types';
import Card from '@mui/material/Card';
import ReactPlayer from 'react-player/youtube';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function VideoCard(props: VideoData) {
  const { url, title, description } = props;

  return (
    <Card>
      <CardContent>
        <ReactPlayer width="100%" height="170px" url={url} />
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}

export default VideoCard;
