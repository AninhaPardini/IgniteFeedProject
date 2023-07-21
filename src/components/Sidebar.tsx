import React from 'react';
import styles from './Sidebar.module.css';
import { AiOutlineEdit } from 'react-icons/ai';
import Avatar from './Avatar';

interface SidebarProps {
  userName: string,
  userImage: string,
  description: string,
  coverImage: string,
}

const Sidebar: React.FC<SidebarProps> = ({ userName, userImage, description, coverImage  }) => {
  return (
    <div className={styles.sidebar}>
        <img className={styles.cover} src={coverImage} />
        <div className={styles.profile}>
            <Avatar hasBorder authorImage={userImage}/>
            <h2>{userName}</h2>
            <p>{description}</p>
        </div>

      <footer>
        <a href="#"><AiOutlineEdit size={20}/>Editar seu Perfil</a>
      </footer>
    </div>
  );
};

export default Sidebar;