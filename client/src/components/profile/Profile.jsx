import { useContext, useEffect, useRef, useState } from "react"
import "./Profile.css"
import { AuthContext } from "../../Context/Context"
import { AiOutlineEdit } from "react-icons/ai"
import { MdOutlineCancel } from "react-icons/md"
import { api } from "../../requestmethods/courseRequest"
import { updateUserRequest } from "../../requestmethods/userRequest"
import { toast } from "react-toastify"
import axios from "axios"



const Profile = () => {

    const { currentUser } = useContext(AuthContext)
    const [edit, setEdit] = useState(false)
    const [user, setUser] = useState("")
    const [image, setImage] = useState(false)
    const imageRef = useRef()


    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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



    useEffect(() => {
        const fetchingCurrUser = async () => {
            const res = await api.get(`/user/${currentUser._id}`)
            setUser(res.data)
        }
        fetchingCurrUser()
    }, [])


    const handleUpdate = async () => {
        let data = {
            userId: currentUser._id,
            profilePic: image ? image : user.profilePic,
            ...user
        }

        updateUserRequest("user", 'PATCH', data, currentUser.token).then((res) => {
            toast.success(res)
            setEdit(false)
        })
            .catch((err) => {
                console.log(err)
            })

   
    }

    return (
        <div className='profile'>
            <h2 style={{ marginBottom: "1.5rem" }}>Myprofile</h2>
            {edit ? <MdOutlineCancel className="profile-edit" onClick={() => setEdit(false)} /> : <AiOutlineEdit className="profile-edit" onClick={() => setEdit(true)} />}
            <div className="profile-list">
                <div className="profile-items">
                    <h4>Joined on</h4>
                    <span>:-</span>
                    <p>2:30 PM</p>
                </div>
                <div className="profile-items">
                    <h4>profile pic</h4>
                    <span>:-</span>
                    {edit ?
                        <>
                            <input type="file" ref={imageRef} hidden onChange={handleImage} />
                            <img src={image ? image : user.profilePic ? user.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} onClick={() => imageRef.current.click()} alt="" style={{ cursor: "pointer" }} />
                        </>
                        :
                        <img src={image ? image : user.profilePic ? user.profilePic : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="" />
                    }
                </div>

                <div className="profile-items">
                    <h4>First Name</h4>
                    <span>:-</span>
                    {edit ? <input type="text" name="firstname" value={user.firstname} onChange={handleChange} /> : <p>{user.firstname}</p>}
                </div>
                <div className="profile-items">
                    <h4>Last Name</h4>
                    <span>:-</span>
                    {edit ? <input type="text" name="lastname" value={user.lastname} onChange={handleChange} /> : <p>{user.lastname}</p>}
                </div>
                <div className="profile-items">
                    <h4>Email</h4>
                    <span>:-</span>
                    {edit ? <input type="text" name="email" value={user.email} onChange={handleChange} /> : <p>{user.email}</p>}
                </div>
                <div className="profile-items">
                    <h4>Occupation</h4>
                    <span>:-</span>
                    <p>{edit ? <input type="text" name="occupation" value={user.occupation} onChange={handleChange} /> : user.occupation}</p>
                </div>
                <div className="profile-items">
                    <h4>Bio</h4>
                    <span>:-</span>
                    <p>{edit ? <textarea type="text" name="bio" cols={50} rows={5} value={user.bio} onChange={handleChange} /> : user.bio}</p>
                </div>
                {edit &&
                    <button onClick={handleUpdate}>Update</button>
                }
            </div>
        </div>
    )
}

export default Profile