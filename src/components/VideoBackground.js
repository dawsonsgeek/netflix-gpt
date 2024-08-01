import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  
  useMovieTrailer();
  
    return (
    <div>
      <iframe
      src={"https://www.youtube.com/embed/"+trailerVideo?.key} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
      </iframe>
      </div>
    );
    };

  export default VideoBackground;