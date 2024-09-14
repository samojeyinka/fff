import React from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "@firebase/auth";
import { app } from "../firebase";
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'

export default function OAauth() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('http://localhost:8080/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL,
                }),
            });
            const data = await res.json();
            console.log(data);
            dispatch(signInSuccess(data));
            navigate('/dashboard');
        } catch (error) {
            console.log("Could not login with google", error);
        }
    }


    const handleAppleClick = async () => {
            toast.info("Sign in with Apple isn't available yet, but you can sign in using your Google account or create a new account with us!")
    }
  

    return (
        <div>
            <div className="sm:flex md:pt-8 ">
                <div className="md:ml-3 lg:ml-11">
                    <button
                        type="button"
                        className="mb-2 me-2 inline-flex w-full items-center border border-[#174568] px-1 py-2.5 pl-24 text-center text-sm font-medium text-[#174568] sm:pl-0 md:px-10"
                        onClick={handleGoogleClick}
                    >
                        <svg
                            className="h-3 w-4 md:me-2"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 19"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className="text-xs font-light text-[#174568] lg:text-sm">
                            Sign up with Google
                        </span>
                    </button>
                </div>

                <div className="pt-1 sm:pl-3 sm:pt-0">
                    <button
                        type="button"
                        className="mb-2 me-2 inline-flex w-full items-center border border-[#174568] px-1 py-2.5 pl-24 text-center text-sm font-medium text-[#174568] sm:pl-0 md:px-10"
                     onClick={handleAppleClick}
                    >
                        <svg
                            className="-ms-1 me-2 size-5"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fab"
                            data-icon="apple"
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                        >
                            <path
                                fill="currentColor"
                                d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                            ></path>
                        </svg>
                        <span className="text-xs font-light text-[#174568] lg:text-sm">
                            Sign up with Apple
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}