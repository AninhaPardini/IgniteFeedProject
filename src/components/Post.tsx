import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import styles from './Post.module.css';
import Comment from './Comment';
import Avatar from './Avatar';

interface PostProps {
  author: {
    avatarUrl: string,
    name: string,
    description: string,
  },
  content: Array<{
    type: string,
    content: string,
  }>,
  publishedAt: Date,
}

const Post: React.FC<PostProps> = ({ author, content, publishedAt }) => {
  const publishedDateFormatted = format(publishedAt, "d 'de 'MMM 'às' HH:mm" );

  const publisedDateRelativeToNow = formatDistanceToNow(publishedAt, { addSuffix: true, locale: ptBR },);

  const authorName = author.name;
  console.log(authorName)

  const contentFormat = content.map(item => {
    if (item.type === 'paragraph') {
      return <p key={item.content}>{item.content}</p>
    }
    if (item.type === 'link') {
      return <p key={item.content}><a href="#">{item.content}</a></p>
    }
  })

  const [comments, setComment] = React.useState([
    'Ficou muito bom! Parabéns! 👏👏👏',
  ]);

  const [newCommentText, setNewCommentText] = React.useState('');

  function handleCreateComment() {
    event.preventDefault();

    setComment([...comments, newCommentText]);
    setNewCommentText('');    
  }

  function handleNewCommentChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder authorImage={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <h2>{author.name}</h2>
            <p>{author.description}</p>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt?.toISOString()}>{publisedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {contentFormat}
      </div>
      <hr className={styles.line} />
      <form onSubmit={handleCreateComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea 
        name='comment' 
        className={styles.commentInput} 
        placeholder='Escreva um comentário...'
        onChange={handleNewCommentChange}
        value={newCommentText}
        />
        <footer>
          <button className={styles.commentButton} type='submit'>Publicar</button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map(comment => (
          <Comment key={comment} content={comment} authorImage='https://avatars.githubusercontent.com/u/108814319?v=4' author='Ana Luiza Simoni (você)' publishedAt='há 1 minuto'/>
        ))}
        
        {/* <Comment 
        authorImage='https://avatars.githubusercontent.com/u/108814319?v=4'
        author='Ana Luiza Simoni (você)'
        time='há 1 minuto'
        content={comments}
        />
        <Comment 
        authorImage='https://scontent.faru1-1.fna.fbcdn.net/v/t39.30808-6/358139121_1424118098409512_4860840166927885071_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HHXD4E4mz6AAX8XItoj&_nc_ht=scontent.faru1-1.fna&oh=00_AfBt6Q3MKUct3PxmtAN2u1oAF31dxMqoB2769kd4vVhCNw&oe=64C08566'
        author='Heleninha'
        time='há 10 minutos'
        content={comments[1]}
        />
        <Comment 
        authorImage='https://pbs.twimg.com/profile_images/1431712333206798351/cqJsrAKI_400x400.jpg'
        author='Yan Aguiar'
        time='há 5 minutos'
        content={comments[2]}
        />  */}
      </div>
    </article>
  );
};

export default Post;