import Navber from '../../components/navber/Navber'
import Footer from '../../components/footer/Footer'
import React, { useContext, useEffect, useState } from 'react'

import {
    useMutation,
    QueryClient,
} from '@tanstack/react-query'
import { AiOutlineEdit } from "react-icons/ai"
import { addCourseRequest, fetchingSingleCourses } from '../../requestmethods/courseRequest'
import { AuthContext } from '../../Context/Context'
import axios from 'axios'
import AddModules from '../../components/courseForm/AddModules'
import { useParams } from 'react-router-dom'
import { MdDeleteSweep } from 'react-icons/md'


const EditPage = () => {
    const { id } = useParams()
    const { currentUser } = useContext(AuthContext)
    const [addModule, setAddModule] = useState(false)
    const [module, setModule] = useState([])
    const [price, setPrice] = useState(false)
    const [inputs, setinputs] = useState({})
    const [image, setImage] = useState("")
    const queryClient = new QueryClient()

    // const data = JSON.parse(localStorage.getItem("courseForm")) 

    useEffect(() => {
        fetchingSingleCourses(id).then((data) => {
            setinputs(data)
        })
    }, [id])


    const handleChange = (e) => {
        setinputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleImage = async (e) => {
        const file = e.target.files[0];

        if (file) {
            try {
                const formData = new FormData();
                formData.append('file', file);
                formData.append('upload_preset', "b2cnfeko");
                const response = await axios.post(
                    'https://api.cloudinary.com/v1_1/ddsepnnsm/image/upload',
                    formData
                );
                const imageUrl = response.data.secure_url;
                setImage(imageUrl);

            } catch (err) {
                console.log(err)
            }

        }
    }

    const mutation = useMutation({
        mutationFn: addCourseRequest,
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['course'] })
        },
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        mutation.mutate({ userId: currentUser._id, thumbNail: image, modules: module, ...inputs })
        localStorage.setItem("courseForm", JSON.stringify(inputs))
    }


    return (

        <>
            <Navber />
            <main>

                <main className='course-form'>
                    <h2 style={{ fontSize: "30px", marginBottom: "2rem" }}>Edit Form</h2>

                    <form action="" onSubmit={handleSubmit}>

                        <h3>Course Info</h3>
                        <div className="course-infromation">

                            <div className="inputs">
                                <label htmlFor="">Course Title</label>
                                <input type="text" placeholder='New Course' name='title' value={inputs.title} onChange={handleChange} />
                            </div>

                            <div className="inputs">
                                <label htmlFor="">Short Description</label>
                                <input type="text" placeholder='please enter the short description' name='shortDesc' value={inputs.shortDesc} onChange={handleChange} />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">About Couse</label>
                                <textarea rows={5} cols={50} placeholder='' name='aboutCourse' value={inputs.aboutCourse} onChange={handleChange} />
                            </div>
                            <div className="course-setting">
                                <h3>Course Setting</h3>
                                <div className="course-settting-list">
                                    <div className="inputs">
                                        <label htmlFor="">Maximum Students</label>
                                        <input type="number" defaultValue={0} name='maxStudents' value={inputs.maxStudents} onChange={handleChange} />
                                    </div>
                                    <p>Number of students that can enrol in this course. Set 0 for no limits.</p>
                                </div>
                                <div className="course-settting-list">
                                    <div className="inputs">
                                        <label htmlFor="">Difficulty level</label>
                                        <select id="" name='level' onChange={handleChange} value={inputs.level}>
                                            <option value="">Select</option>
                                            <option value="All">All</option>
                                            <option value="Beginner">Beginners</option>
                                            <option value="Intermediate">Intermediate</option>
                                            <option value="Expert">Expert</option>

                                        </select>
                                    </div>
                                    <p>Course difficulty level</p>
                                </div>
                                <div className="course-settting-list">
                                    <div className="radio">
                                        <label htmlFor="">Public Course</label>
                                        <input type="checkbox" />
                                    </div>
                                    <p>Course difficulty level</p>
                                </div>
                            </div>

                            <div className="inputs">
                                <label htmlFor="">Choose a category</label>
                                <select id="" name='category' onChange={handleChange} value={inputs.category}>
                                    <option value="">Select</option>
                                    <option value="Itandsoftware">IT & Software</option>
                                    <option value="datascience">Data Science</option>
                                    <option value="aiml">AI & Machine Learninf</option>
                                    <option value="businessanalytics">Business Analytics</option>
                                    <option value="digitalmarketing">Digital Marketing</option>
                                    <option value="cloudcomputing">Cloud Computing</option>
                                    <option value="managment">Managment</option>

                                </select>
                            </div>
                            <div className="course-price">
                                <h3>Course Price</h3>
                                <div className="radio-buttons">
                                    <div className="radio">
                                        <label htmlFor="">Free</label>
                                        <input type="radio" name='price' onChange={() => setPrice(false)} placeholder='New Course' value={inputs.price} />
                                    </div>
                                    <div className="radio">
                                        <label htmlFor="">Price</label>
                                        <input type="radio" name='price' value={price}
                                            onChange={() => setPrice(true)}
                                            placeholder='New Course' />
                                    </div>
                                </div>
                                {price &&
                                    <div>
                                        <div className="inputs">
                                            <label htmlFor="">Regular Price</label>
                                            <input type="number" placeholder='Regular price' name='regularPrice' onChange={handleChange} value={inputs.regularPrice} />
                                        </div>
                                        <div className="inputs">
                                            <label htmlFor="">Discounted Price</label>
                                            <input type="number" placeholder='Discounted price' name='discountedPrice' onChange={handleChange} value={inputs.discountedPrice} />
                                        </div>
                                    </div>
                                }
                            </div>


                            <div className="module">
                                {inputs.modules?.map((m) => {
                                    return (
                                        <div className="module-list">
                                            <div className="module-top">
                                                <h3>{m.module}</h3>
                                                <div className="edit">
                                                    <AiOutlineEdit />
                                                </div>
                                            </div>
                                            <div className="lessons">
                                                {m?.lessons?.map((l) => {
                                                    return (
                                                        <div>

                                                            <input type="text" name='lesson' value={l.lesson} onChange={handleChange} />
                                                            <input type="text" name='duration' value={l.duration} onChange={handleChange} />
                                                            <span>
                                                                <AiOutlineEdit />
                                                            </span>
                                                            <span>
                                                                <MdDeleteSweep />
                                                            </span>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    )
                                })}
                                <button type='button' onClick={() => setAddModule(true)}>Add Module</button>
                            </div>

                            <div className="inputs">
                                <label htmlFor="">Course Thumnail</label>
                                <input type="file" placeholder='New Course' onChange={handleImage} />
                            </div>
                        </div>
                        <div className="inputs">
                            <label htmlFor="">Video</label>
                            <input type="text" placeholder='Youtube video Url' name='videoUrl' onChange={handleChange} value={inputs.videoUrl} />
                        </div>

                        <div className="inputs">
                            <label htmlFor="">Instructor</label>
                            <input type="text" placeholder='Course By' name='instructor' onChange={handleChange} value={inputs.instructor} />
                        </div>

                        <div className="additional-data">
                            <h3>Additional Data</h3>
                            <div className="inputs">
                                <label htmlFor="">What will i Learn?</label>
                                <textarea type="text" placeholder='Benifits of Course (One Per line)' name='whatILearn' onChange={handleChange} value={inputs.whatILearn} />
                            </div>

                            <div className="inputs">
                                <label htmlFor="">Material Included</label>
                                <textarea type="text" placeholder='A list of assets you will be provided for students (One Per line)' name='materialIncluded' onChange={handleChange} value={inputs.materialIncluded} />
                            </div>
                            <h3>Total Course Duration</h3>
                            <div className="duration">
                                <div className="inputs">
                                    <input type="text" placeholder='Hours' name='duration' onChange={handleChange} value={inputs.duration} />
                                    <label htmlFor="">Hours</label>
                                </div>

                            </div>

                            <div className="inputs">
                                <label htmlFor="">Requirements / Instructions</label>
                                <input type="text" placeholder='ex: No Coding experiance required or Basic Understanding of Java' name='requirements' onChange={handleChange} value={inputs.requirements} />
                            </div>
                        </div>
                        <div className="btns">
                            <button type='submit' className='submit-btn'>Update Course</button>
                        </div>
                    </form>
                    {addModule && <AddModules setModule={setModule} setAddModule={setAddModule} />}
                </main>

            </main>
            <Footer />
        </>
    )
}

export default EditPage