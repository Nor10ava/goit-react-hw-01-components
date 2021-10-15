import { FriendListItem } from "./FriendListItem";
import s from "./Friends.module.css";
import PropTypes from "prop-types";

export function FriendList({ friends }) {
  return (
    <ul className={s.friendList}>
      {friends.map((friend) => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          active={friend.isOnline}
        />
      ))}
    </ul>
  );
}
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
