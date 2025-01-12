"use client";
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'


const Nav = () => {

    const { data: session } = useSession();
    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {//functional component to fetch the available authentication providers from the next-auth library
        const setUpProviders = async () => {
            const res = await getProviders();//the getProviders function is called and the result is stored in the res variable.
            setProviders(res);
            // The setProviders function is then called with the res variable to update the providers state variable.
        }
        setUpProviders();
    }, []);


    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link
                href="/"
                className="flex gap-2 flex-center">

                <Image
                    src="/assets/images/logo.svg"
                    width={30}
                    height={30}
                    className="object-contain"
                />

                <p className="logo_text">Promptopia</p>

            </Link>
            {/*desktop navigation*/}
            <div className="sm:flex hidden">
                {session?.user ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link
                            href="/create-prompt"
                            className="black_btn"
                        >
                            Create Post
                        </Link>
                        <button
                            type="button"
                            onClick={signOut}
                            className="outline_btn">
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                width={37}
                                height={37}
                                className="rounded-full"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button
                                    type='button'
                                    key={provider.name}
                                    onClick={() => {
                                        signIn(provider.id);
                                    }}
                                    className='black_btn'
                                >
                                    Sign In
                                </button>
                            ))}
                    </>
                )}
            </div>
            {/*mobile navigation*/}
            <div className="sm:hidden flex relative">
                {session?.user ? (
                    <div className="flex">
                        <Image
                            src={session?.}
                            width={30}
                            height={30}
                            className="object-contain cursor-pointer"
                            alt="profile"
                            onClick={() => setToggleDropdown(!toggleDropdown)}//prev is a reference to the previous value of the toggleDropdown state variable.!prev expression is used to toggle the value of prev. If prev is true, !prev will be false, and vice versa.
                        />
                        {toggleDropdown && (
                            <div className="dropdown">
                                <Link
                                    href='/profile'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    My Profile
                                </Link>
                                <Link
                                    href='/create-prompt'
                                    className='dropdown_link'
                                    onClick={() => setToggleDropdown(false)}
                                >
                                    Create Post
                                </Link>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setToggleDropdown(false);
                                        signOut();
                                    }}
                                    className="mt-5 w-full black_btn"
                                >
                                    Sign Out
                                </button>
                            </div>
                        )}
                    </div>
                )
                    :
                    (
                        <>
                            {providers &&
                                Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        key={provider.name}
                                        onClick={() => {
                                            signIn(provider.id);
                                        }}
                                        className='black_btn'
                                    >
                                        Sign in
                                    </button>
                                ))}
                        </>
                    )}
            </div>
        </nav>
    )
}

export default Nav
