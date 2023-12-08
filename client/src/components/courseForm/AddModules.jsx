import React, { useState } from 'react'

const AddModules = ({ setAddModule, setModule }) => {
    const [inputs, setInputs] = useState({})
    const [addLessons, setAddLessons] = useState(false)
    const [lessons, setLessons] = useState([])

    const handleAddLesson = () => {
        let lesson = {
            lesson: inputs.lesson,
            videoUrl: inputs.videoUrl,
            duration: inputs.duration
        }


        setLessons((prev) => [...prev, lesson])
        setAddLessons(false)
    }

    const handleModule = () => {
        let data = {
            module: inputs.title,
            lessons: lessons
        }
        console.log(data)
        setModule((prev) => [...prev, data])
        setAddModule(false)
    }

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    return (
        <div className='form-outline'>
            <h2>Modules </h2>
            <div className="ouline-container">
                <div className="cancel" onClick={()=> setAddModule(false)}> x </div>
                <form action="" onSubmit={handleModule}>

                    <div className="inputs">
                        <label htmlFor="">Module Title</label>
                        <input type="text" placeholder='Module Title' name='title' required onChange={handleChange} style={{ border: "none", borderBottom: "1px solid gray" }} />
                    </div>
                    {!addLessons &&
                        <button type='button' onClick={() => setAddLessons(true)}>Add Lessons</button>
                    }

                    <h3>Lessons </h3>
                    {lessons?.map((l) => {
                        return (
                            <div className="lessons">
                                <ul>
                                    <li>{l.lesson}</li>
                                    <li>{l.duration}</li>
                                </ul>
                            </div>
                        )
                    })}

                    {addLessons &&
                        <>
                            <div className="inputs">
                                <label htmlFor="">lesson</label>
                                <input type="text" placeholder='lesson Title' name='lesson' required onChange={handleChange} />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Video Url</label>
                                <input type="text" placeholder='video url' name='videoUrl' required onChange={handleChange} />
                            </div>
                            <div className="inputs">
                                <label htmlFor="">Video duration</label>
                                <input type="text" placeholder='duration' name='duration' required onChange={handleChange} />
                            </div>
                            <div className="btns">

                            <button type='button' onClick={handleAddLesson}>Add</button>
                            <button type='button' onClick={()=> setAddLessons(false)}>Cancel</button>
                            </div>
                        </>
                    }


                    <button type='submit' style={{ width: "100%" }}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddModules