import { useState } from "react";
import { InputComponent } from "./project/InputComponent";
import { TitleComponent } from "./project/TitleComponent";

export const ProjectForm = () => {

    const [show, setShow] = useState<boolean>(false)

    // clear all local storage
    const clearLocalStorage = () => {
        localStorage.clear()
    }

    return (
        <form className="flex flex-col gap-4 z-0">

            <div className="w-full xl:w-3/4 mx-auto">

                <TitleComponent />

                <InputComponent num={"1st"} />
                <InputComponent num={"2nd"} />
                <InputComponent num={"3rd"} />
                <InputComponent num={"4th"} />
                <InputComponent num={"5th"} />

                {show ?
                    <></>
                    :
                    <div className="flex flex-row justify-around mt-12 text-center">
                        <div
                            className="my-5 w-full px-6 py-2.5 bg-gray-100 dark:bg-gray-700 dark:to-gray-800 cursor-default select-none text-center text-black dark:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => setShow(!show)}>
                            <div>
                                Load More
                                <i className="fa-solid fa-angle-down"></i>
                            </div>
                        </div>
                    </div>
                }

                {
                    show && (
                        <div>
                            <InputComponent num={"6th"} />
                            <InputComponent num={"7th"} />
                            <InputComponent num={"8th"} />
                            <InputComponent num={"9th"} />
                            <InputComponent num={"10th"} />
                        </div>
                    )
                }

                {show ?
                    <div className="flex flex-row justify-around mt-12 text-center">
                        <div
                            className="my-5 w-full px-6 py-2.5 bg-gray-100 dark:bg-gray-700 dark:to-gray-800 cursor-default select-none text-center text-black dark:text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-200 dark:hover:bg-gray-600 hover:shadow-lg focus:bg-gray-200 focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                            onClick={() => setShow(!show)}>
                            <div>
                                Hide
                                <i className="fa-solid fa-angle-up"></i>
                            </div>
                        </div>
                    </div>
                    :
                    <></>

                }



                <div className="flex flex-row justify-around mt-12">
                    <button
                        className="my-5 inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={clearLocalStorage}>
                        Clear
                        <i className="fa-solid fa-refresh"></i>
                    </button>
                </div>

            </div >
        </form>
    )
}