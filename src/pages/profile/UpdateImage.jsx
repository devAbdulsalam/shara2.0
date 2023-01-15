import React, {useState} from 'react'
import { useContext } from 'react';
import axios from 'axios';
import { LoadingContext } from '../../context/LoadingContext';
import Img from '../../assets/userImage.png'

const UpdateImage = ({user, token, setEdit, setProfile}) => {
const {setLoading} = useContext(LoadingContext)     
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState('');
  const [iserror, setError] = useState(null);
  const handleSubmit = (e) =>{	
      e.preventDefault()
      setLoading(true)
      
    if(!image){
        console.log("image is not true")
        // multipart form
        //     const formData = new FormData();
        //         formData.append('image', image);
        //         formData.append('data', JSON.stringify(data));        
        //    axios.post('http://localhost:4000/user/profile', formData,
    }
        axios.post('http://localhost:4000/user/updateImage', image,
         {
           headers : {"Content-Type" : "multipart/form-data",
                     'Authorization' : `Bearer ${token}`,
                 }
           
         }).then(res =>   res.data)
         .then(data => {
           console.log(data.user._id)
           if (user._id === data.user._id) {
               user = data.user;
               user.wallet = data.wallet;
               }   
           localStorage.setItem("sharauser", JSON.stringify(user));
            setEdit(false)
           setProfile(true)
           setLoading(false)
         })
         .catch(err => {
             console.log(err)
             setLoading(false)
             if(err.response?.status || err.response?.data.error === "404"){
             setError(err.response?.data.error || err.message)
           }
       })
    
  }

    const handleImage = (e) =>{
    setImage(e.target.files[0])
    setImageName(e.target.files[0].name)
  }
  return (    
        <form onSubmit={handleSubmit} className="w-full flex flex-col justify-center">
           <div className='flex pt-2 w-full flex-col place-items-center'>
                <label htmlFor='image' className="w-full mx-auto rounded-full">
                <img className='w-32 cursor-pointer h-32 mx-auto' src={Img} alt="my-pic" />
                <p className='cursor-pointer text-center p-2 text-lg'>{imageName || "Choose a file"}</p>
                </label>
                <input  className="absolute -z-10 top-14 self-center invisible" type="file" id="image" name='image' accept="image/jpeg, image/png, image/svg+xml, application/pdf" onChange={handleImage}/>
            </div> 
            <div className="py-2 px-4 w-full flex justify-center">
                <button type='submit' className='p-2 w-full md:max-w-xl px-6 justify-center rounded-md text-xl bg-green-500 hover:bg-green-600 text-white'>Update Profile</button>
            </div>
            <div className="px-4 w-full">
                {iserror && <div className="error duration-500 p-2 bg-red-300 text-red-800 text-center text-lg border-red-700 border-2 rounded-md">{iserror}</div>}
            </div>
    </form >
  )
}

export default UpdateImage