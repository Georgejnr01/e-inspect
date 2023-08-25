"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import {db} from '../Firebase'
import { setDoc, collection, addDoc } from "firebase/firestore";


export default function Register() {
  const {user, signup } = useAuth()
  const [caretUp, setCaretUp] =useState(false)
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  const [data, setData] = useState({
    title: '',
    displayName:'',
    email: '',
    password: '',
    roles: ['course-adviser', 'exam-invigilator'],
    roleChosen: '',
    phoneNumber: '',
  })
  const router = useRouter();

  // const CreateUser = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //   .then(() => {
  //     router.push("/");
  //   })
  //   .catch((e) => {
  //     console.log(e.message);
  //   })
  // }

  const handleSignup = async (e) => {
    e.preventDefault()
    try {
      await signup(data.email, data.password)
      // const colRef = collection(db, "users");
      await addDoc(collection(db, "users"), {
        email: data.email,
        displayName: data.displayName,
        title: data.title,
        phoneNumber: data.phoneNumber,
        roleChosen: data.roleChosen,
      })
      console.log(`${data.displayName} user has been added`)
      router.push("/course-adviser")
      // console.log("Document written with ID:", docRef.id)
      // console.log(result)
    } catch (err) {
      console.log(err)
    }
    
  }


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
              placeholder="Title(Mr, Mrs, Prof,...)"
              type="text"
              value={data.title}
              onChange={(e) => setData ({
                ...data,
                title: e.target.value,
              })}
              className="w-full px-5 py-4 rounded bg-transparent border border-[#3a3a3a]"
            />
          </div>
          <div className="input-grp mb-8">
            {/* <label className='font-bold' htmlFor="">Email Address</label> */}
            <input
              placeholder="Full Name"
              value={data.displayName}
              onChange={(e) => setData({
                ...data,
                displayName: e.target.value,
              })}
              type="text"
              className="w-full px-5 py-4 rounded bg-transparent border border-[#3a3a3a]"
            />
          </div>
          <div className="input-grp mb-8 text-[#3a3a3a] flex items-center rounded border border-[#3a3a3a]">
            <select
              onClick={() => setCaretUp(!caretUp)}
              onChange={(e) => {
                setData({
                ...data,
                roleChosen: e.target.value,
              })
              console.log(data.roleChosen)
              }}
              name="role"
              id="role"
              className=" rounded p-4 appearance-none w-[90%] "
            >
              <option value={data.roles[0]}>Course Adviser</option>
              <option value={data.roles[1]}>Exam Invigilator</option>
            </select>
            <span className="w-[10%] pr-9">
              {
                caretUp 
                ?
              (<AiFillCaretUp size={24} />)
              :
              (<AiFillCaretDown size={24} />)
            }
            </span>
          </div>

          <div className="input-grp mb-8">
            {/* <label className='font-bold' htmlFor="">Email Address</label> */}
            <input
              placeholder="Email Address"
              type="email"
              value={data.email}
              onChange={(e) => setData({
                ...data,
                email: e.target.value
              })}
              className="w-full px-5 py-4 rounded bg-transparent border border-[#3a3a3a]"
            />
          </div>
          <div className="input-grp mb-8">
            {/* <label className='font-bold' htmlFor="">Email Address</label> */}
            <input
              value={data.phoneNumber}
              onChange={(e) => setData({
                ...data,
                phoneNumber: e.target.value
              })}
              placeholder="Phone Number"
              type="text"
              className="w-full px-5 py-4 rounded bg-transparent border border-[#3a3a3a]"
            />
          </div>
          <div className="input-grp">
            {/* <label className='font-bold' htmlFor="">Password</label> */}
            <input
              placeholder="Password"
              type="password"
              value={data.password}
              onChange={(e) => setData({
                ...data,
                password:e.target.value
                })}
              className="w-full px-5 py-4 rounded bg-transparent border border-[#3a3a3a]"
            />
            <button
              onClick={handleSignup}
              className="w-full mt-8 font-semibold bg-[#115baa] text-white p-4 text-lg text-center rounded"
            >
              Register
            </button>
          </div>
        </div>
        <div className="w-full text-center text-[#3a3a3a] mt-16">
          <Link href="/">
            Already have an account?{" "}
            <span className="text-[#115baa]">Login</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
