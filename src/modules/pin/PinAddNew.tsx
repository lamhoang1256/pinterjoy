import FormGroup from "components/common/FormGroup";
import Input from "components/input/Input";
import Label from "components/label/Label";
import { useEffect, useState } from "react";
import { categories } from "constants/data";
import Button from "components/button";

const PinAddNew = () => {
  const [urlPreview, setUrlPreview] = useState("");
  const [image, setImage] = useState(null);
  console.log("image: ", image);

  const handleUploadImage = (e: any) => {
    const file = e.target.files[0];
    file.preview = URL.createObjectURL(file);
    setImage(file);
    setUrlPreview(file.preview);
  };

  // const handleAddNewPin = () => {
  // if (title && about && destination && imageAsset?._id && category) {
  //   const doc = {
  //     _type: "pin",
  //     title,
  //     about,
  //     destination,
  //     image: {
  //       _type: "image",
  //       asset: {
  //         _type: "reference",
  //         _ref: imageAsset?._id,
  //       },
  //     },
  //     userId: user._id,
  //     postedBy: {
  //       _type: "postedBy",
  //       _ref: user._id,
  //     },
  //     category,
  //   };
  //   client.create(doc).then(() => {
  //     navigate("/");
  //   });
  // } else {
  //   setFields(true);
  //   setTimeout(() => {
  //     setFields(false);
  //   }, 2000);
  // }
  // };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      urlPreview && URL.revokeObjectURL(urlPreview);
    };
  }, [urlPreview]);
  return (
    <div className="flex gap-5 max-w-[1000px] mx-auto shadow-light p-5 rounded-2xl">
      <div className="w-[400px] h-[400px] relative">
        <input
          type="file"
          className="absolute inset-0 opacity-0 z-30 cursor-pointer"
          onChange={handleUploadImage}
        />
        <div className="w-[200px] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <img src="/images/img-upload.png" alt="upload" className="w-[150px] mx-auto" />
          <h4 className="mt-5 text-center">Choose image upload</h4>
        </div>
        {urlPreview && (
          <img
            src={urlPreview}
            alt="preview"
            className="absolute inset-0 z-20 mx-auto bg-white h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1">
        <form>
          <FormGroup>
            <Label htmlFor="title">Title</Label>
            <Input placeholder="Add your title" name="title" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="desc">Description</Label>
            <Input placeholder="Tell everyone what your Pin is about" name="desc" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="destination">Destination</Label>
            <Input placeholder="Add a destination link" name="destination" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="category">Choose Pin Category</Label>
            <select
              name="category"
              id="category"
              className="border-[1px] p-4 border-gray92 rounded-md"
            >
              {categories?.map(({ name }) => (
                <option value={name} key={name}>
                  {name}
                </option>
              ))}
            </select>
          </FormGroup>
          <Button type="button" className="bg-linearRed text-white w-full rounded-lg">
            Upload Pin
          </Button>
        </form>
      </div>
    </div>
  );
};

export default PinAddNew;
