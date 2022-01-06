import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={`flex justify-center items-center h-screen ${isDark && "dark"} `}>
            <Head>
                <title>Tailwind Css</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="transition-all flex flex-col items-center justify-center h-screen w-screen bg-white dark:bg-gray-800">
                <h1 className=" text-gray-900 dark:text-gray-200">DARK MODE</h1>
                <button
                    className=" bg-blue-600 px-4 py-2 rounded-full dark:text-gray-200"
                    onClick={() => setIsDark(!isDark)}
                >
                    TOGGLE
                </button>
            </div>
        </div>
    );
}
