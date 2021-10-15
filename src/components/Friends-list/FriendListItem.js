import s from "./Friends.module.css";
import PropTypes from "prop-types";
export function FriendListItem({ avatar, name, active }) {
  return (
    <li className={s.item}>
      {active ? (
        <span className={s.statusOnline}></span>
      ) : (
        <span className={s.statusOffline}></span>
      )}
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
