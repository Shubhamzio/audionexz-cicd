import { useState, useEffect } from "react";

const useImagePreloader = (imageUrls = []) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Check if already loaded in this session
    const hasLoadedBefore = sessionStorage.getItem("imagesPreloaded");

    if (hasLoadedBefore === "true") {
      setImagesLoaded(true);
      setLoadingProgress(100);
      return;
    }

    if (!imageUrls || imageUrls.length === 0) {
      setImagesLoaded(true);
      setLoadingProgress(100);
      return;
    }

    let loadedCount = 0;
    const totalImages = imageUrls.length;
    let timeoutIds = [];

    const updateProgress = () => {
      loadedCount++;
      const progress = Math.round((loadedCount / totalImages) * 100);
      setLoadingProgress(progress);

      if (loadedCount === totalImages) {
        setTimeout(() => {
          setImagesLoaded(true);
          sessionStorage.setItem("imagesPreloaded", "true");
        }, 500);
      }
    };

    imageUrls.forEach((url) => {
      const img = new Image();

      // Set timeout for each image (5 seconds)
      const timeoutId = setTimeout(() => {
        if (!img.complete) {
          console.warn(`Image timeout: ${url}`);
          updateProgress();
        }
      }, 5000);

      timeoutIds.push(timeoutId);

      img.onload = () => {
        clearTimeout(timeoutId);
        updateProgress();
      };

      img.onerror = () => {
        clearTimeout(timeoutId);
        console.warn(`Failed to load: ${url}`);
        updateProgress();
      };

      img.src = url;
    });

    return () => {
      timeoutIds.forEach((id) => clearTimeout(id));
    };
  }, [imageUrls]);

  return { imagesLoaded, loadingProgress };
};

export default useImagePreloader;
