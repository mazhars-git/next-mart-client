import { useState } from "react";
import { Input } from "../../input";

const MNImageUploader = () => {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    setImageFiles((prev) => [...prev, file]);
  };
  return (
    <div>
      <Input
        onChange={handleImageChange}
        type="file"
        multiple
        accept="image/*"
        className="hidden"
        id="image-uploader"
      />
      <label
        className="w-full md:size-36 items-center justify-center border-2 border-dashed border-gray-300 rounded-md cursor-pointer text-center text-sm text-gray-500 hover:bg-"
        htmlFor="image-uploader"
      >
        Upload Logo
      </label>
    </div>
  );
};

export default MNImageUploader;
