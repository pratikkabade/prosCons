import { TextInput } from "flowbite-react"
import { useState } from "react"


export const TitleComponent = () => {

    const thisTitle = localStorage.getItem("thisTitle")
    const thisDate = localStorage.getItem("thisDate")

    const [title, setTitle] = useState<string>(thisTitle === "null" ? "" : thisTitle)
    const [thedate, setDate] = useState<string>(thisDate === "null" ? "" : thisDate)

    // save value pro and con to local storage
    const saveToLocalStorage = () => {
        localStorage.setItem("thisTitle", title)
        localStorage.setItem("thisDate", thedate)
    }

    saveToLocalStorage()

    return (
        <div className="flex flex-row flex-wrap w-full justify-center mb-20">
            <input type={"text"} placeholder="Set a title"
                className="w-full mx-2 my-4 mt-12 text-center text-2xl form-control block px-3 py-1.5 font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border border-solid border-gray-100 dark:border-gray-700 rounded-lg transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:bg-gray-100 dark:focus:bg-gray-600 focus:border-gray-500 focus:outline-none dark:bg-gray-700 bg-gray-50"
                onChange={(e) => { setTitle(e.target.value) }}
                value={title} />

            <TextInput type={"datetime-local"} placeholder="Date" className="w-full text-center" onChange={(e) => (setDate(e.target.value))} value={thedate} />
        </div>
    )
}