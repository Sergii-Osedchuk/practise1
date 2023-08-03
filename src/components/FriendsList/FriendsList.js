import FriendsListItem from '../FriendsListItem/FriendsListItem'
import s from './FriendsList.module.css'

function FriendsList({friends}) {
    return (
        <ul className={s.friendsList}>
            {friends.map(friend => 
            <li key={friend.id}>
                <FriendsListItem 
                  avatar={friend.avatar} 
                  name={friend.name}
                  isOnline={friend.isOnline}
                />
            </li>
            )}
        </ul>
    )
}

export default FriendsList;