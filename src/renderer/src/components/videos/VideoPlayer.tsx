import YouTube, { YouTubeProps } from 'react-youtube'

interface Props {
  videoId: string
}

export default function VideoPlayer({ videoId }: Props) {
  const opts: YouTubeProps['opts'] = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1
    }
  }

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-gray-950">
      <YouTube
        videoId={videoId}
        opts={opts}
        className="absolute inset-0 w-full h-full"
        iframeClassName="w-full h-full"
      />
    </div>
  )
}
