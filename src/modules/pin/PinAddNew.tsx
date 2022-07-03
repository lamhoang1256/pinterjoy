import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { categories } from "constants/data";
import { LocalStorage } from "constants/localStorage";
import { path } from "constants/path";
import { pinSchema } from "constants/schema";
import { client } from "utils/client";
import FormGroup from "components/common/FormGroup";
import Label from "components/label/Label";
import InputFormik from "components/input/InputFormik";
import Select from "components/select/Select";
import Button from "components/button";
import ImageUpload from "components/image/ImageUpload";

const PinAddNew = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem(LocalStorage.user) || "{}");
  const [image, setImage] = useState<any>();
  const handleAddNewPin = async (values: any) => {
    if (!image?._id) {
      toast.error("Please choose image");
      return;
    }
    try {
      const doc = {
        _type: "pin",
        ...values,
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
      };
      await client.create(doc);
      toast.success("Add new pin successfully!");
      navigate(path.home);
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex flex-col md:flex-row gap-5 max-w-[1000px] mx-auto shadow-light p-5 rounded-2xl">
      <ImageUpload setImage={setImage} />
      <div className="flex-1">
        <Formik
          initialValues={{
            title: "",
            about: "",
            destination: "",
            category: "",
          }}
          validationSchema={pinSchema}
          onSubmit={(values) => {
            handleAddNewPin(values);
          }}
        >
          {(formik) => (
            <form onSubmit={formik.handleSubmit}>
              <FormGroup>
                <Label htmlFor="title">Title</Label>
                <InputFormik placeholder="Add your title" name="title" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="about">Description</Label>
                <InputFormik placeholder="Tell everyone what your Pin is about" name="about" />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="destination">Destination</Label>
                <InputFormik
                  placeholder="Ex: https://www.pinterest.com/pin/806566614519139824"
                  name="destination"
                />
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
