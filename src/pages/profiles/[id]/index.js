import { getProfile } from '../../api/profiles/[id]';


export const ProfileDetailsPage= ({profile}) => {
 
    return(
        <div>
            {profile.name}
            {profile.gender}
            {profile.location}
        </div>
    ) 
}

export const getServerSideProps = async(context)=>{
    const {params} = context;

    const {id} = params;

    console.log("id", id);

    const profile = await getProfile(id);
    console.log("profile", profile);
    const profile2= {...profile, _id: profile._id.toString(), dob: profile.dob? profile.dob.toString(): null};

    //make api call to get the profile based on id
    const name = "Alvin Nguyen";

    return{
        props:{
            profile: profile2
        }
    }
}

export default ProfileDetailsPage;