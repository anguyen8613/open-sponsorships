import { getProfile } from "../../api/profiles/[id]";
import styles from "../../../../styles/styles.module.scss";
import Image from 'next/image';

export const ProfileDetailsPage = ({ profile }) => {
  return (
    <div>
      <div className={styles.profileBox}>
        <div className={styles.profileName}>{profile.name}</div> 
        <div className={styles.bodyContainer}>        
            <div>
            <div className={styles.profileInfo}>From: {profile.location}</div>
            <div className={styles.profileInfo}>Gender: {profile.gender}</div>
            <div className={styles.profileInfo}>Age: {profile.age}</div>
            <div className={styles.profileInfo}>Height: {profile.height}</div>
            <div className={styles.profileInfo}>Weight: {profile.weight}</div>
            <div className={styles.profileInfo}>
            Sports:{" "}
            {profile.sports.map((sport, index) => {
                return (
                <span key={sport}>
                    {index === profile.sports.length - 1 ? sport : sport + ",  "}
                </span>
                );
            })}
            </div>
            <div className={styles.profileInfo}>Team: {profile.team}</div>
            <div className={styles.profileInfo}>
            Interest:{" "}
            {profile.interests.map((interest, index) => {
                return (
                <span key={interest}>
                    {index === profile.interests.length - 1
                    ? interest
                    : interest + ", "}
                </span>
                );
            })}
            </div>
            
            </div>
            <div className={styles.imgContainer}>
                <Image alt="profile image" width="400" height="200" src={profile.imgUrl}/>
            </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async (context) => {
  const { params } = context;

  const { id } = params;

  console.log("id", id);

  const profile = await getProfile(id);
  console.log("profile", profile);
  const profile2 = {
    ...profile,
    _id: profile._id.toString(),
    dob: profile.dob ? profile.dob.toString() : null,
  };

  //make api call to get the profile based on id
  const name = "Alvin Nguyen";

  return {
    props: {
      profile: profile2,
    },
  };
};

export default ProfileDetailsPage;