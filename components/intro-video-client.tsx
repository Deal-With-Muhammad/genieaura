"use client";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button, Card } from "@heroui/react";

export function IntroVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay compliance
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to detect when section is in view
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Section is in view, play video
            video
              .play()
              .then(() => {
                setIsPlaying(true);
              })
              .catch((error) => {
                console.log("Autoplay failed:", error);
                // Fallback: show play button for user interaction
                setIsPlaying(false);
              });
          } else {
            // Section is out of view, pause video
            video.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of section is visible
        rootMargin: "0px 0px -10% 0px", // Adjust trigger point slightly
      }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play().then(() => {
          setIsPlaying(true);
        });
      }
    }
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  // Handle video end
  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  return (
    <div ref={sectionRef}>
      <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-border/50 bg-black">
        {/* Video Element */}
        <video
          ref={videoRef}
          id="intro-video"
          className="w-full aspect-video object-cover"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleVideoEnd}
          muted={isMuted}
          controls
          // Optional: loop the video
          preload="auto" // Changed to auto for better autoplay
          poster="/images/video-thumbnail.jpg"
        >
          <source src="/videos/intro-video.mp4" type="video/mp4" />
          <track kind="captions" srcLang="en" label="English" />
          Your browser does not support the video tag.
        </video>

        {/* Custom Controls Overlay */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="flex gap-2 pointer-events-auto">
            <Button
              size="sm"
              variant="flat"
              onClick={handlePlayPause}
              className="rounded-full w-10 h-10 p-0 bg-black/50 backdrop-blur-sm text-white"
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
              className="rounded-full w-10 h-10 p-0 bg-black/50 backdrop-blur-sm text-white"
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
    </div>
  );
}
