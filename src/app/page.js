import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="app">
      <div className=" w-full flex flex-col items-center mx-auto">
        <div className="logo w-[186px] mt-16 my-8">
          <Image
            className="w-full h-full"
            src={"/images/p1.png"}
            width={725}
            height={255}
          />
        </div>
        <div className="text-sm text-[#3a3a3a]">
          Integrity in school assessments...
        </div>

        <div className="form mt-16 w-[85%] mx-auto ">
          <div className="input-grp mb-8">
            {/* <label className='font-bold' htmlFor="">Email Address</label> */}
            <input
              placeholder="Email Address"
              type="email"
              className="w-full border border-[#3a3a3a] px-5 py-4 rounded"
            />
          </div>
          <div className="input-grp">
            {/* <label className='font-bold' htmlFor="">Password</label> */}
            <input
              placeholder="Password"
              type="password"
              className="w-full border border-[#3a3a3a] px-5 py-4 rounded"
            />
            <button className="w-full mt-8 font-semibold bg-[#115baa] text-white p-4 text-lg text-center rounded">
              Login
            </button>
            {/* <button className="w-full border-[#3a3a3a] border mt-4 bg-[transparent] font-semibold text-[#3a3a3a] p-4 text-lg text-center rounded flex items-center justify-center">
              <span className="bg-transparent mr-4">
                <Image
                  className="w-[26px]"
                  src={"/images/g3.png"}
                  width={52}
                  height={52}
                />
              </span>
              Sign in with Google
            </button> */}
          </div>

        </div>
        <div className="w-full text-center text-[#3a3a3a] mt-16"><Link href="/register">Don't have an account yet? <span className="text-[#115baa]">Register</span></Link></div>
      </div>
    </main>
  );
}
