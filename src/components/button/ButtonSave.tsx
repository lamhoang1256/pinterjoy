import Button from "./Button";

interface ButtonSaveProps {
  save: any;
}

const ButtonSave = ({ save }: ButtonSaveProps) => {
  return (
    <Button
      className=" text-white bg-linearRed h-8 px-5 rounded-2xl"
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      {save ? `${save?.length} Save` : "0 Save"}
    </Button>
  );
};

export default ButtonSave;
