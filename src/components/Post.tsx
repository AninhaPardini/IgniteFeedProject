import React from 'react';
import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';

interface PostProps {
  authorImage: string,
  author: string,
  description: string,
  content: React.ReactNode, // quando é uma propriedade que recebe um componente, é necessário usar React.ReactNode
}

const Post: React.FC<PostProps> = ({ authorImage, author, content, description }) => {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder authorImage={authorImage}/>
          <div className={styles.authorInfo}>
            <h2>{author}</h2>
            <p>{description}</p>
          </div>
        </div>
        <time title="21 de julho às 11:16" dateTime='2022-05-11 11:16:30'>Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        {content}
      </div>
      <hr className={styles.line} />
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea className={styles.commentInput} placeholder='Escreva um comentário...'/>
        <footer>
          <button className={styles.commentButton} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        <Comment 
        authorImage='https://avatars.githubusercontent.com/u/108814319?v=4'
        author='Ana Luiza Simoni (você)'
        time='há 1 minuto'
        content="Ficou muito bom! Parabéns! 👏👏👏"
        />
        <Comment 
        authorImage='https://scontent.faru1-1.fna.fbcdn.net/v/t39.30808-6/358139121_1424118098409512_4860840166927885071_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HHXD4E4mz6AAX8XItoj&_nc_ht=scontent.faru1-1.fna&oh=00_AfBt6Q3MKUct3PxmtAN2u1oAF31dxMqoB2769kd4vVhCNw&oe=64C08566'
        author='Heleninha'
        time='há 10 minutos'
        content="Dango dango dada ada!"
        />
        <Comment 
        authorImage='https://pbs.twimg.com/profile_images/1431712333206798351/cqJsrAKI_400x400.jpg'
        author='Yan Aguiar'
        time='há 5 minutos'
        content="💖💖💖"
        />
      </div>
    </article>
  );
};

export default Post;