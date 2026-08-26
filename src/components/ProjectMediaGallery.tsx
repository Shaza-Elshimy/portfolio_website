import { useEffect, useState } from "react";

interface ProjectMediaGalleryProps {
  title: string;
  imageAlt: string;
  fallbackImage?: string;
  images?: string[];
  videoUrl?: string;
}

export function ProjectMediaGallery({ title, imageAlt, fallbackImage, images = [], videoUrl }: ProjectMediaGalleryProps) {
  const mediaImages = images.length ? images : fallbackImage ? [fallbackImage] : [];
  const [currentImage, setCurrentImage] = useState(0);
  const hasGallery = mediaImages.length > 1;

  useEffect(() => setCurrentImage(0), [images, fallbackImage]);

  const showPrevious = () => setCurrentImage((index) => (index - 1 + mediaImages.length) % mediaImages.length);
  const showNext = () => setCurrentImage((index) => (index + 1) % mediaImages.length);
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!hasGallery) return;
    if (event.key === "ArrowLeft") { event.preventDefault(); showPrevious(); }
    if (event.key === "ArrowRight") { event.preventDefault(); showNext(); }
  };

  if (!videoUrl && !mediaImages.length) {
    return <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-white/30 bg-white/5 px-6 text-center text-gray-300">Media will be added for this project.</div>;
  }

  return (
    <div className="space-y-4" onKeyDown={handleKeyDown} tabIndex={hasGallery ? 0 : undefined} aria-label={hasGallery ? `${title} screenshot gallery` : undefined}>
      {videoUrl && <video controls preload="metadata" poster={fallbackImage} className="h-[32vh] w-full rounded-lg border border-white/20 bg-black object-contain sm:h-[42vh]"><source src={videoUrl} />Your browser does not support video playback.</video>}
      {mediaImages.length > 0 && <div>
        {videoUrl && <h3 className="mb-3 text-lg font-semibold">Screenshots</h3>}
        <div className="flex h-[32vh] w-full items-center justify-center rounded-lg border border-white/20 bg-black sm:h-[42vh]">
          <img src={mediaImages[currentImage]} alt={mediaImages.length === 1 ? imageAlt : `${title} screenshot ${currentImage + 1} of ${mediaImages.length}`} className="max-h-full max-w-full object-contain" width="1920" height="936" loading="eager" decoding="async" />
        </div>
        {hasGallery && <div className="mt-3 flex items-center justify-center gap-4">
          <button type="button" onClick={showPrevious} className="min-h-11 rounded-md border border-white/25 px-4 transition hover:bg-white/10" aria-label="Previous screenshot">←</button>
          <span className="text-sm text-gray-300" aria-live="polite">{currentImage + 1} / {mediaImages.length}</span>
          <button type="button" onClick={showNext} className="min-h-11 rounded-md border border-white/25 px-4 transition hover:bg-white/10" aria-label="Next screenshot">→</button>
        </div>}
      </div>}
    </div>
  );
}
