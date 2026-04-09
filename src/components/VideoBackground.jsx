import { useEffect, useRef } from 'react';
import Hls from 'hls.js';


export function VideoBackground({ src, poster, isDesaturated = false, overlayTop = true, overlayBottom = true, bottomFadeHeight = '200px' }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current || !src) return;

    if (src.endsWith('.m3u8')) {
      if (Hls.isSupported()) {
        const hls = new Hls({
          capLevelToPlayerSize: true,
          maxBufferLength: 30,
        });
        hls.loadSource(src);
        hls.attachMedia(videoRef.current);
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          videoRef.current.play().catch(() => {});
        });
        
        return () => hls.destroy();
      } else if (videoRef.current.canPlayType('application/vnd.apple.mpegurl')) {
        // Fallback for native HLS support (Safari)
        videoRef.current.src = src;
        videoRef.current.addEventListener('loadedmetadata', () => {
          videoRef.current.play().catch(() => {});
        });
      }
    }
  }, [src]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover ${isDesaturated ? 'saturate-0' : ''}`}
        autoPlay
        loop
        muted
        playsInline
        poster={poster}
        src={src.endsWith('.mp4') ? src : undefined}
      />
      {overlayTop && (
        <div className="absolute top-0 left-0 right-0 h-[200px] bg-gradient-to-b from-black to-transparent pointer-events-none" />
      )}
      {overlayBottom && (
        <div 
          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pointer-events-none" 
          style={{ height: bottomFadeHeight }}
        />
      )}
    </div>
  );
}
