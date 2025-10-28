"use client";
import { useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button, Card } from "@heroui/react";

export function IntroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const handlePlayPause = () => {
    const video = document.getElementById(
      "intro-video"
    ) as HTMLVideoElement | null;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    const video = document.getElementById(
      "intro-video"
    ) as HTMLVideoElement | null;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-border/50 bg-black">
      {/* Video Element */}
      <video
        id="intro-video"
        className="w-full aspect-video object-cover"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controls
        preload="metadata"
        poster="/images/video-thumbnail.jpg" // Add a thumbnail image
      >
        <source src="/videos/intro-video.mp4" type="video/mp4" />
        <track
          kind="captions"
          srcLang="en"
          label="English"
          // Add captions file if available
        />
        Your browser does not support the video tag.
      </video>

      {/* Custom Controls Overlay (Optional - native controls are shown) */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="flex gap-2 pointer-events-auto">
          <Button
            size="sm"
            variant="flat"
            onClick={handlePlayPause}
            className="rounded-full w-10 h-10 p-0"
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="h-4 w-4" />
            ) : (
              <Play className="h-4 w-4" />
            )}
          </Button>
          <Button
            size="sm"
            variant="solid"
            onClick={handleMuteToggle}
            className="rounded-full w-10 h-10 p-0"
            aria-label={isMuted ? "Unmute video" : "Mute video"}
          >
            {isMuted ? (
              <VolumeX className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
        </div>
      </div>

      {/* Play Button Overlay (Shows when video is paused) */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <Button
            size="lg"
            onClick={handlePlayPause}
            className="rounded-full w-20 h-20 p-0 bg-primary hover:bg-primary/90 shadow-2xl"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          </Button>
        </div>
      )}
    </Card>
  );
}
