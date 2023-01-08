import { useFormData } from '../../context';

const ImageInput = () => {
    const { setFormValues } = useFormData();
    
    // File uploader
    const handleUploadInput = async (e) => {
    const files = [...e.target.files];
    const formData = new FormData();

    for (let file of files) {
      formData.append("file", file);
    }

    formData.append("upload_preset", "ei3pxz2g");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/dfh9nloka/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await res.json();
    setFormValues({imgUrl: data.url?.toString()});
  };
    return(
        <>
            <label>Profile Picture</label>
            <input name="image" type="file" onChange={handleUploadInput}  multiple accept="image/*"   />
        </>
    )
}

export default ImageInput;