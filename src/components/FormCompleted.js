import Image from 'next/image';
import { useRouter } from 'next/router';
import { useFormData } from "../context";
import styles from './FormCompleted.module.scss';

const FormCompleted = () => {
  const { data } = useFormData();
  const router = useRouter();

  console.log("data",data)
  const {name, age, gender, location, height, weight, sports, team, interests, imgUrl} = data;

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
        <div className={styles.profileContainer}>
        <div className={styles.profileName}>{name}</div> 
        <div className={styles.bodyContainer}>        
            <div>
            <div className={styles.profileInfo}>From: {location}</div>
            <div className={styles.profileInfo}>Gender: {gender}</div>
            <div className={styles.profileInfo}>Age: {age}</div>
            <div className={styles.profileInfo}>Height: {height}</div>
            <div className={styles.profileInfo}>Weight: {weight}</div>
            <div className={styles.profileInfo}>
            Sports:{" "}
            {sports.map((sport, index) => {
                return (
                <span key={sport}>
                    {index === sports.length - 1 ? sport : sport + ",  "}
                </span>
                );
            })}
            </div>
            <div className={styles.profileInfo}>Team: {team}</div>
            <div className={styles.profileInfo}>
            Interest:{" "}
            {interests.map((interest, index) => {
                return (
                <span key={interest}>
                    {index === interests.length - 1
                    ? interest
                    : interest + ", "}
                </span>
                );
            })}
            </div>
            
            </div>
            <div className={styles.imgContainer}>
                <Image alt="profile image" width="200" height="200" src={imgUrl}/>
            </div>
        </div>
      </div>

        <button onClick={handleSubmit}>Submit</button>

    </div>
  );
}

export default FormCompleted;