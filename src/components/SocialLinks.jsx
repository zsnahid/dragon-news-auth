import { Button } from "@material-tailwind/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function SocialLinks() {
  return (
    <div>
      <h3 className="font-medium text-lg mb-3">Find Us On</h3>
      <div className="flex flex-col border-2">
        <Button
          variant="text"
          color="blue-gray"
          className="rounded-none flex justify-start items-center gap-3 border-b-2"
        >
          <FaFacebook className="text-blue-700 text-base" />
          Facebook
        </Button>
        <Button
          variant="text"
          color="blue-gray"
          className="rounded-none flex justify-start items-center gap-3 border-b-2"
        >
          <FaTwitter className="text-light-blue-600 text-base" />
          Twitter
        </Button>
        <Button
          variant="text"
          color="blue-gray"
          className="rounded-none flex justify-start items-center gap-3"
        >
          <FaInstagram className="text-yellow-900 text-base" />
          Instagram
        </Button>
      </div>
    </div>
  );
}
