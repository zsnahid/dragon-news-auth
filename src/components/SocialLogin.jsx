import { Button } from "@material-tailwind/react";
import { FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <div className="mb-10">
      <Button
        size="sm"
        variant="outlined"
        color="blue-gray"
        fullWidth
        className="flex justify-center items-center gap-3 mb-3"
      >
        <img
          src="https://docs.material-tailwind.com/icons/google.svg"
          alt="metamask"
          className="h-4 w-4"
        />
        Log In with Google
      </Button>
      <Button
        size="sm"
        variant="outlined"
        color="blue-gray"
        fullWidth
        className="flex justify-center items-center gap-3"
      >
        <FaGithub className="text-black text-lg" />
        Log In with GitHub
      </Button>
    </div>
  );
}
