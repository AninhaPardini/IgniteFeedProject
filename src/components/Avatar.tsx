import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  authorImage: string,
  hasBorder: boolean,
}

const Avatar: React.FC<AvatarProps> = ({ authorImage, hasBorder = true }) => {

    return (
        
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} src={authorImage} />
        
    );
}

export default Avatar;