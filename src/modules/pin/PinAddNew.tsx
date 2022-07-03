/* eslint-disable @typescript-eslint/no-unused-vars */
import Button from "components/button";
import FormGroup from "components/common/FormGroup";
import InputFormik from "components/input/InputFormik";
import Label from "components/label/Label";
import Select from "components/select/Select";
import { categories } from "constants/data";
import { LocalStorage } from "constants/localStorage";
import { pinSchema } from "constants/schema";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { client } from "utils/client";

const PinAddNew = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  const [urlPreview, setUrlPreview] = useState("");
  const [wrongImageType, setWrongImageType] = useState(false);
  const [image, setImage] = useState<any>();
  console.log("image: ", image);

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
          console.log("Upload failed:", error.message);
        });
    } else {
      setWrongImageType(true);
    }
  };

  const handleAddNewPin = (values: any) => {
    const { title, description, destination, category } = values;
    if (image?._id) {
      const doc = {
        _type: "pin",
        title,
        about: description,
        destination,
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: image?._id,
          },
        },
        userId: user?.uid,
        postedBy: {
          _type: "postedBy",
          _ref: user?.uid,
        },
        category,
      };
      client.create(doc).then(() => {
        navigate("/");
      });
    }
  };

  useEffect(() => {
    return () => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      urlPreview && URL.revokeObjectURL(urlPreview);
    };
  }, [urlPreview]);
  return (
    <div className="flex flex-col md:flex-row gap-5 max-w-[1000px] mx-auto shadow-light p-5 rounded-2xl">
      <div className="w-full h-[240px] md:w-[330px] md:h-[330px] lg:w-[400px] lg:h-[400px] relative">
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
          <img
            src={urlPreview}
            alt="preview"
            className="absolute inset-0 z-20 mx-auto bg-white h-full object-cover"
          />
        )}
      </div>
      <div className="flex-1">
        <Formik
          initialValues={{
            title: "",
            description: "",
            destination: "",
          }}
          validationSchema={pinSchema}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onSubmit={(values, { setSubmitting, resetForm }) => {
            handleAddNewPin(values);
            setSubmitting(false);
            // resetForm();
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <InputFormik placeholder="Add your title" name="title" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="description">Description</Label>
                <InputFormik
                  placeholder="Tell everyone what your Pin is about"
                  name="description"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="destination">Destination</Label>
                <InputFormik placeholder="Add a destination link" name="destination" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="category">Choose Pin Category</Label>
                <Select categories={categories} name="category" />
              </FormGroup>
              <Button type="submit" className="mt-2 bg-linearRed text-white w-full rounded-lg">
                Upload Pin
              </Button>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default PinAddNew;
