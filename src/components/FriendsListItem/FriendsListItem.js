import s from './FriendsListItem.module.css';

function FrindsListItem({avatar, name, isOnline}) {
    return (
        <li className={s.item}>
            <span className={isOnline ? s.green : s.red}>.</span>
            <img className={s.avatar} src={avatar} alt='user avatar' width='48' />
            <p className={s.name}>{name}</p>
        </li>
    )
}

export default FrindsListItem;
