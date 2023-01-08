import { useRouter } from 'next/router';
import { useFormData } from "../context";

const FormCompleted = () => {
  const { data } = useFormData();
  const router = useRouter();

  console.log(data)
  const {name, age, gender, location, height, weight, sports, team, interests} = data;

  const handleSubmit = async()=>{
    try{
      const response = await fetch('/api/profiles', {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data) 
      });
      const profile=  await response.json();
      const id = profile.data.id;
      console.log("profile", profile);
      router.push(`/profiles/${id}`)
    }catch(e){

    }
  }
  return (
    <div>
        <p>name: {name}</p>
        <p>age: {age}</p>
        <p>gender: {gender}</p>
        <p>location: {location}</p>
        <p>height: {height}</p>
        <p>weight: {weight}</p>
        <p>team: {team}</p>
        <p>sports:</p>
        {sports.map((sport) => (
          <span key={sport}>{sport + " "}</span>
        ))}

        <p>interests:</p>
        {interests.map((interest) => (
          <span key={interest}>{interest + " "}</span>
        ))}

        <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default FormCompleted;