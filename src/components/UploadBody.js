import React, { useState } from "react";
import {Link} from "react-router-dom";
import UploadImage from "./Upload/UploadImage";

function UploadBody() {

    const [title, setTitle] = useState(localStorage.getItem('title') || '');
    const [description, setDescription] = useState(localStorage.getItem('description') || '');
    const [tags, setTags] = useState(localStorage.getItem('tags') || '');

    function onTitleInput(e) {
        setTitle(e.target.value);
    }

    function onDescriptionInput(e) {
        setDescription(e.target.value);
    }

    function onTagsInput(e) {
        setTags(e.target.value);
    }

    React.useEffect(() => {
        localStorage.setItem('title', title);
        localStorage.setItem('description', description);
        localStorage.setItem('tags', tags);
    }, [title, description, tags])

    return (
        <main className="px-5 sm:px-10 md:px-28 lg:px-52 ">
            <h2 className="text-center mt-10 text-xl font-bold">What are you working on?</h2>
            <h3 className="text-center text-sm mt-2">Upload a picture of your coding result</h3>
            <input className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-16" onChange={onTitleInput} value={title} placeholder="Give me a Title"/>
            <UploadImage/>
            
            <textarea rows="3" className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-6 resize-none" onChange={onDescriptionInput} value={description} placeholder="Write something that describes your project"/>
            <input className="border-solid border-2 border-[#7868E6] rounded-lg py-1 px-3 w-full mt-6" onChange={onTagsInput} value={tags} placeholder="Add Tags..."/>
           <Link to="/uploadcode"><button className="bg-[#7868E6] px-9 py-2 my-10 text-white rounded-2xl float-right" >Continue</button></Link> 
        </main>
    )
}

export default UploadBody;