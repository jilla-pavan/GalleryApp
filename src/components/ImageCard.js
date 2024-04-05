import React from "react";

function ImageCard({ imageinfo }) {
  return (
    <div className="grid grid-cols-5 ml-6">
      {imageinfo.map((image, index) => {
        return (
          <div className="" key={index}>
            <img
              className="w-[200px] h-[200px] object-cover rounded-lg shadow-lg m-4"
              src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}_m.jpg`}
             />
          </div>
        );
      })}
    </div>
  );
}

export default ImageCard;
