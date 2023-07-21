import React from 'react';
import styles from './Comment.module.css';
import { BsTrash3 } from 'react-icons/bs';
import { FiThumbsUp } from 'react-icons/fi';
import Avatar from './Avatar';

interface CommentProps {
  authorImage: string,
  author: string,
  time: string,
  content: React.ReactNode, // quando é uma propriedade que recebe um componente, é necessário usar React.ReactNode
}

const Comment: React.FC<CommentProps> = ({ authorImage, author, content, time }) => {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} authorImage={authorImage}/>

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>{author}</strong>
                            <time title="21 de julho às 11:20" dateTime='2022-05-11 11:16:30'>{time}</time>
                        </div>
                        
                        <button title='Deletar comentário'>
                            <BsTrash3 size={20} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer className={styles.reactionArea}>
                    <button>
                        <FiThumbsUp size={16}/>
                            Aplaudir
                            <span>20</span>
                    </button>
                </footer>
            </div>
            
        </div>
    );
};

export default Comment;