import Image from "next/image";
import bg from "@/public/bg.png";
import Link from "next/link";
export const metadata = {
  title: "The Wild Oasis",
};

export default function Home() {
  return (
    <>
      <main className="mt-24">
        <Image
          src={bg}
          placeholder="blur"
          className="object-cover object-top"
          fill
          quality={80}
          alt="Mountains and forests with two cabins"
        />

        <div className="relative z-10 text-center">
          <h1 className="sm:text-8xl text-5xl text-primary-50 mb-10 tracking-tight font-normal">
            Welcome to paradise.
          </h1>
          <Link
            href="/cabins"
            className="bg-accent-500 px-8 py-6 rounded-lg relative top-5
             text-primary-800 sm:text-lg font-semibold
              hover:bg-accent-600 transition-all"
          >
            Explore luxury cabins
          </Link>
        </div>
      </main>
    </>
  );
}
