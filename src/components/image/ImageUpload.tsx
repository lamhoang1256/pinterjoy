import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { client } from "utils/client";

interface ImageUploadProps {
  setImage: React.Dispatch<any>;
}

const ImageUpload = ({ setImage }: ImageUploadProps) => {
  const [urlPreview, setUrlPreview] = useState("");
  const [wrongImageType, setWrongImageType] = useState(false);

  const handleUploadImage = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    if (
      file.type === "image/png" ||
      file.type === "image/svg" ||
      file.type === "image/jpeg" ||
      file.type === "image/gif" ||
      file.type === "image/tiff"
    ) {
      setWrongImageType(false);
      client.assets
        .upload("image", file, { contentType: file.type, filename: file.name })
        .then((document) => {
          setImage(document);
          setUrlPreview(file.preview);
        })
        .catch((error) => {
          toast.error("Upload failed:", error.message);
        });
    } else {
      setWrongImageType(true);
    }
  };
  useEffect(() => {
    return () => {
      if (urlPreview) URL.revokeObjectURL(urlPreview);
    };
  }, [urlPreview]);

  return (
    <div className="w-full h-[260px] md:w-[330px] lg:w-[400px] relative">
      <input
        type="file"
        className="absolute inset-0 opacity-0 z-30 cursor-pointer"
        onChange={handleUploadImage}
      />
      <div className="w-[200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src="/images/img-upload.png" alt="upload" className="w-[150px] mx-auto" />
        <h4 className="mt-5 text-center">
          {wrongImageType ? (
            <span className="text-rede7 font-semibold">It is wrong file type.</span>
          ) : (
            <span>Choose image upload</span>
          )}
        </h4>
      </div>
      {urlPreview && (
        <div className="absolute inset-0 z-20  bg-white ">
          <img
            src={urlPreview}
            alt="preview"
            className="w-[250px] h-[250px] lg:h-auto mx-auto object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
