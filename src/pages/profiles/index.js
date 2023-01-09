import ProfilesComponent from '../../components/Profiles/ProfilesComponent';
import { getProfiles } from '../api/profiles';

const Profiles = ({profiles})=>{
    return(
        <ProfilesComponent profiles={profiles} />
    )
}

export const getServerSideProps = async() => {
    const response = await getProfiles();
    const covertId = response.map((r) => {
        return {...r, _id: r._id.toString()}
    })
    

    return {
        props:{
           profiles: covertId
        }
    }
}

export default Profiles;