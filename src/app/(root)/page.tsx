import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
  return (
   <>
       <div className={'flex justify-center items-center'}>
           <h1 className={'w-fit bg-red-800 text-white'}>Welcome to our modern ProStore</h1>
       </div>
       <Button className={'bg-ruby'}>Click me!</Button>
   </>
  );
}
