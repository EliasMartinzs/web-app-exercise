import Image from "next/image";
import Input from "./Input";
import Button from "./Button";

export default function GetStarted() {
  return (
    <div className="w-full h-screen flex-center flex-col">
      <Image
        src="/logo.png"
        width={413}
        height={353}
        className="object-cover"
        alt="logo"
      />
      <form className="flex-center flex-col gap-y-2">
        <Input placeholder="First Name" />
        <Input placeholder="Last Name" />
        <div className="mt-3">
          <Button name="Submit" color="#FEE715" />
        </div>
      </form>
    </div>
  );
}
