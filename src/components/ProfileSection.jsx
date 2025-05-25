import React from "react";
import PropTypes from "prop-types";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
} from "react-icons/fa";
import "./ProfileSection.css";

export default function ProfileSection({ profile }) {
  return (
    <div className="profile-section">
      <img
        src={profile.avatar}
        alt={profile.artisticName}
        className="profile-avatar"
      />
      <h3 className="profile-artistic">{profile.artisticName}</h3>
      <p className="profile-realname">{profile.name}</p>
      <div className="profile-social">
        {profile.social.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
}

ProfileSection.propTypes = {
  profile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    artisticName: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    social: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        icon: PropTypes.element.isRequired,
      })
    ).isRequired,
  }).isRequired,
};