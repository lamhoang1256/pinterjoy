import { client } from "utils/client";

interface ButtonDeleteProps {
  children: React.ReactNode;
  id: string;
}

const ButtonDelete = ({ id, children, ...props }: ButtonDeleteProps) => {
  const handleDeletePin = async () => {
    await client.delete(id);
    window.location.reload();
  };

  return (
    <button
      type="button"
      className="w-10 h-10 rounded-md bg-linearRed flex items-center justify-center text-white"
      onClick={(e) => {
        e.stopPropagation();
        handleDeletePin();
      }}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonDelete;
