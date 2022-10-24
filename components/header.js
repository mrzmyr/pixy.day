import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex flex-row items-center">
      <div className="mr-14">
        <Link href="/" passHref>
          <a className="flex flex-row items-center">
            <Image alt={"Pixy"} width={44} height={44} src="/images/icon.png" />
            <div className="text-2xl font-bold ml-2">Pixy</div>
          </a>
        </Link>
      </div>
      {/* <Link href="/" passHref><a className='mr-4 lg:mr-12 font-medium'>Home</a></Link> */}
      {/* {/* <Link href="/" passHref><a className='mr-4 lg:mr-12 font-medium'>Feature Ideas</a></Link> */}
      <a
        href="https://pixy.hellonext.co"
        target={"_blank"}
        rel="noreferrer"
        className="mr-4 lg:mr-12 font-medium cursor-pointer"
      >
        Submit Feature
      </a>
    </header>
  );
};
