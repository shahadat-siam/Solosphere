import { useLoaderData, useNavigate } from "react-router-dom"
import DatePicker from "react-datepicker"; 
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import swal from "sweetalert";
import axios from "axios";
import useAxiosSecure from "../hook/useAxiosSecure";

const UpdateJob = () => {
  const axiosSecure = useAxiosSecure()
  const job = useLoaderData()
  const navigate = useNavigate()
 
  const {_id, jobTitle,description, deadline, byers,  max_price, min_price, category} = job || {}
  console.log(job)

  const {user} = useContext(AuthContext)
  const [startDate, setStartDate] = useState(new Date());

  const hundleFormSubmit = async (e) => { 
    e.preventDefault() 
    const form = e.target
    const jobTitle = form.job_title.value
    const min_price =  parseFloat(form.min_price.value)
    const max_price = parseFloat(form.max_price.value)
    const email = form.email.value
    const category = form.category.value 
    const deadline = startDate 
    const description = form.description.value
 
    const jobsData = {
       jobTitle,deadline,  category, min_price, max_price,description, byers: {
        email, 
        name: user?.displayName,
        photo: user?.photoURL
       }
    } 
    try{
      const {data} = await axiosSecure.put(`/jobs/${_id}`, jobsData)
      swal({
        title: "Done",
        text: "successfully updated job data",
        icon: "success",
        dangerMode: true,
      })
      navigate('/my-posted-job')
    }catch(error){
      console.log(error)
      swal({
        title: "Done",
        text: `${error.message}`,
        icon: "warning",
        dangerMode: true,
      })
    }
  }
  
  return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
      <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
        <h2 className='text-lg font-semibold text-gray-700 capitalize '>
          Update a Job
        </h2>

        <form onSubmit={hundleFormSubmit}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='job_title'>
                Job Title
              </label>
              <input
                id='job_title'
                name='job_title'
                type='text'
                defaultValue={jobTitle}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email Address
              </label>
              <input
                id='emailAddress'
                type='email'
                name='email'
                defaultValue={byers.email}
                disabled
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700'>Deadline</label>

              {/* Date picker input field */}
              <DatePicker className="border p-2 rounded-md" selected={startDate} onChange={(date) => setStartDate(date)} />
            </div>

            <div className='flex flex-col gap-2 '>
              <label className='text-gray-700 ' htmlFor='category'>
                Category
              </label>
              <select
                name='category'
                id='category'
                defaultValue={category}
                className='border p-2 rounded-md'
              >
                <option value='Web Development'>Web Development</option>
                <option value='Graphics Design'>Graphics Design</option>
                <option value='Digital Marketing'>Digital Marketing</option>
              </select>
            </div>
            <div>
              <label className='text-gray-700 ' htmlFor='min_price'>
                Minimum Price
              </label>
              <input
                id='min_price'
                name='min_price'
                type='number'
                defaultValue={min_price}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>

            <div>
              <label className='text-gray-700 ' htmlFor='max_price'>
                Maximum Price
              </label>
              <input
                id='max_price'
                name='max_price'
                type='number'
                defaultValue={max_price}
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
          </div>
          <div className='flex flex-col gap-2 mt-4'>
            <label className='text-gray-700 ' htmlFor='description'>
              Description
            </label>
            <textarea
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              name='description'
              id='description'
              defaultValue={description}
              cols='30'
            ></textarea>
          </div>
          <div className='flex justify-end mt-6'>
            <button className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
              Save
            </button>
          </div>
        </form>
      </section>
    </div>
  )
}

export default UpdateJob
