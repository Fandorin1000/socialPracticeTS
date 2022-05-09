import classes from "./ProfileInfo.module.css";
import React from "react";
import Preloader from "../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
const ProfileInfo = (props) => {
  let profileInfo;
  if (!props.profile) {
    profileInfo = <Preloader />;
  } else {
    let profile = props.profile;
    let contactAdded = [];
    for (let c in profile.contacts) {
      if (profile.contacts[c]) {
        contactAdded.push({
          link: profile.contacts[c],
          socialName: c,
        });
      }
    }
    let contacts = contactAdded.map((c) => {
      return (
        <li>
          <a href={c.link}>{c.socialName}</a>
        </li>
      );
    });
    profileInfo = (
      <div className={classes.profileInfo}>
        <div className={classes.avatarBox}>
          <img alt="second logo" src={profile.photos.large} />
        </div>
        <div>
          <h4>{profile.fullName}</h4>
          <ProfileStatus
            userId={props.userId}
            status={props.status}
            updateStatus={props.updateStatus}
          />
          <div className={classes.contactsBox}>
            My contacts
            <ul>{contacts}</ul>
          </div>
          <div>
            {profile.lookingForAJob ? (
              <div className={classes.jobBox}>
                <p>I am looking for a job</p>
                <p>{profile.lookingForAJobDescription}</p>
              </div>
            ) : (
              <p>I am not looking for a job</p>
            )}
          </div>
        </div>
      </div>
    );
  }
  return <>{profileInfo}</>;
};

export default ProfileInfo;
