import React, { useState } from 'react'
import { writeUserData } from '../../utils/firebase'

const Form = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [gender, setGender] = useState("")
    console.log(name)
    console.log(phone)
    console.log(gender)

    const handleSubmit = (e) => {
        e.preventDefault();
        writeUserData(name, phone, gender)
        console.log(name, phone, gender)
    }

    return (
        <div className='flex flex-col'>
            <div className="">ADD CONTACT</div>
            <div className="block p-6 rounded-lg shadow-lg  max-w-md">
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-6">
                        <input type="text" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-600
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="name" value={name} placeholder="Name"
                            onChange={(e) => { setName(e.target.value) }} />
                    </div>
                    <div className="form-group mb-6">
                        <input type="phone" className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid  border-gray-600
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="phone" value={phone} placeholder="Phone Number"
                            onChange={(e) => { setPhone(e.target.value) }} />
                    </div>
                    <div className="flex justify-center">
                        <div className="mb-3 xl:w-96">
                            <select className="form-select form-select-lg mb-3
      appearance-none
      block
      w-full
      px-4
      py-2
      text-xl
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label=".form-select-lg example" onChange={(e) => { setGender(e.target.value) }}>
                                <option defaultValue="Gender">Gender</option>
                                <option value="Female">Female</option>
                                <option value="Male">Male</option>
                                <option value="Other">Other</option>
                            </select>

                        </div>
                    </div>


                    <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out"
                    >Add</button>
                </form>
                <Table />
            </div>

        </div>
    )
}

export default Form