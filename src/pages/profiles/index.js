import { getProfiles } from '../api/profiles';

const Profiles = ({profiles})=>{
    return <div>{profiles.map((profile) => (
        <div key={profile.name}>
            {profile.name}
        </div>
    ))}</div>
}

export const getServerSideProps = async() => {
    const response = await getProfiles();
    console.log("response", response)
    const covertId = response.map((r) => {
        return {...r, _id: r._id.toString(), dob: r.dob? r.dob.toString(): null}
    })
    

    return {
        props:{
           profiles: covertId
        }
    }
}

export default Profiles;