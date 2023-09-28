import { useState } from "react"

type InputProps = {
    num: string
}

export const InputComponent = (props: InputProps) => {

    const thisValue = props.num + "value"
    const localValue = localStorage.getItem(thisValue)

    const thisPro = props.num + "pro"
    const localPro = localStorage.getItem(thisPro)

    const thisCon = props.num + "con"
    const localCon = localStorage.getItem(thisCon)

    const [value, setValue] = useState<string>(localStorage.getItem(localValue === "null" ? "" : thisValue))
    const [pro, setPro] = useState<string>(localStorage.getItem(localPro === "null" ? "" : thisPro))
    const [con, setCon] = useState<string>(localStorage.getItem(localCon === "null" ? "" : thisCon))

    // save value pro and con to local storage
    const saveToLocalStorage = () => {
        localStorage.setItem(thisValue, value)
        localStorage.setItem(thisPro, pro)
        localStorage.setItem(thisCon, con)
    }

    saveToLocalStorage()

    return (
        <div className="mt-8">
            <h3 className="flex flex-row items-center mt-5 font-mono">
                {props.num + " Issue"}
                <i className="fa-solid fa-circle-question"></i>
            </h3>
            <div className="flex flex-row flex-wrap w-full justify-center">
                <input type={"text"} placeholder="Description"
                    className="w-full mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border border-solid border-gray-100 dark:border-gray-700 rounded-lg transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:bg-gray-100 dark:focus:bg-gray-600 focus:border-gray-500 focus:outline-none dark:bg-gray-700 bg-gray-50"
                    onChange={(e) => { setValue(e.target.value) }}
                    value={value} />

                <div className="flex flex-row flex-wrap w-full justify-center mt-3">
                    <input type={"text"} placeholder="Pros"
                        className="w-5/12 mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border border-solid border-gray-100 dark:border-gray-700 rounded-lg transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:bg-green-100 dark:focus:bg-green-800 focus:border-green-600 focus:outline-none dark:bg-green-900 bg-green-50"
                        onChange={(e) => { setPro(e.target.value) }}
                        value={pro} />

                    <input type={"text"} placeholder="Cons"
                        className="w-5/12 mx-2 form-control block px-3 py-1.5 text-base font-normal text-gray-900 dark:text-gray-200 bg-clip-padding border border-solid border-gray-100 dark:border-gray-700 rounded-lg transition ease-in-out m-0 focus:text-gray-900 dark:focus:text-gray-200 focus:bg-red-100 dark:focus:bg-red-800 focus:border-red-600 focus:outline-none dark:bg-red-900 bg-red-50"
                        onChange={(e) => { setCon(e.target.value) }}
                        value={con} />
                </div>
            </div>
        </div>
    )
}