"use client";
// ImageColorExtractor.tsx
import React, { useState, useEffect } from "react";

interface ImageColorExtractorProps {
  imageUrl: string; // URL of the image fetched from MongoDB
  onColorsExtracted: (colors: string[]) => void;
}

const ImageColorExtractor: React.FC<ImageColorExtractorProps> = ({
  imageUrl,
  onColorsExtracted,
}) => {
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    const loadImage = async () => {
      try {
        const response = await fetch(imageUrl);
        const blob = await response.blob();
        const dataUrl = URL.createObjectURL(blob);
        setImage(dataUrl);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };

    loadImage();
  }, [imageUrl]);

  const extractColors = () => {
    if (image) {
      const img = new Image();
      img.src = image;

      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;

        const context = canvas.getContext("2d");

        if (context) {
          context.drawImage(img, 0, 0, img.width, img.height);

          const imageData = context.getImageData(
            0,
            0,
            img.width,
            img.height
          ).data;

          const colors: string[] = [];

          for (let i = 0; i < imageData.length; i += 4) {
            const rgba = `rgba(${imageData[i]}, ${imageData[i + 1]}, ${
              imageData[i + 2]
            }, ${imageData[i + 3] / 255})`;
            colors.push(rgba);
          }

          onColorsExtracted(colors);
        }
      };
    }
  };

  return (
    <div>
      {image && <button onClick={extractColors}>Extract Colors</button>}
    </div>
  );
};

export default ImageColorExtractor;
