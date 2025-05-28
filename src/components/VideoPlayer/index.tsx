import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

export function VideoPlayer({ videoId, platform = null, width = '560', height = '315' }) {
  let src;
  let iframe = false
  if (platform === 'youtube') {
    src = `https://www.youtube.com/embed/${videoId}`;
    iframe = true;
  } else if (platform === 'vimeo') {
    src = `https://player.vimeo.com/video/${videoId}`;
    iframe = true;
  } else {
    src = `${videoId}`;
  }

  if(iframe) {
      return (
        <div className={styles.videoContainer}>
          <iframe
            className={styles.videoContainerIframe}
            width={width}
            height={height}
            src={src}
            title={`${platform} video player`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
  }else{
    return (
        <div className={styles.videoContainer}>
            <video controls 
                width={width} 
                height={height}
                className={styles.videoContainerPlayer}
            >
            <source src={useBaseUrl(src)} type="video/mp4" />
            Il tuo browser non supporta il tag video.
            </video>
        </div>
    )
  }

}

export default VideoPlayer;