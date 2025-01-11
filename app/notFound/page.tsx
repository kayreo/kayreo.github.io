import Link from "next/link";

export default function NotFoundPage() {
  let openSide: boolean = true;
  return (
    <div>

        <p className="p-10 justify-center"><Link href={"/"} className="accessLink">Page not found! Click here to go back!</Link></p>
    </div>
  );
}