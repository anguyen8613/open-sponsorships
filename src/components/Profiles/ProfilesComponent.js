import Image from "next/image";
import React from "react";
import styles from "./ProfilesComponent.module.scss";

function ProfilesComponent({ profiles }) {
  return (
    <div>
      <div className={styles.profilesName}>
        {profiles.map((profile) => (
          <a key={profile.id} href={`/profiles/${profile.id}`}>
            <div key={profile.name}>
              {profile.name}
              <div>
                <Image
                  alt="profile image"
                  src={profile.imgUrl}
                  width="200"
                  height="200"
                  className={styles.profileImg}
                />
              </div>
              <br></br>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ProfilesComponent;