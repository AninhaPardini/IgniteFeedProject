import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://scontent.faru1-1.fna.fbcdn.net/v/t39.30808-6/358139121_1424118098409512_4860840166927885071_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HHXD4E4mz6AAX8XItoj&_nc_ht=scontent.faru1-1.fna&oh=00_AfBt6Q3MKUct3PxmtAN2u1oAF31dxMqoB2769kd4vVhCNw&oe=64C08566',
      name: 'Heleninha',
      description: 'Desenvolvedora de bagunça',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀' },
      {type: 'link', content: 'heleninha.design/doctorcar'},
    ],
    publishedAt: new Date('2023-07-21 11:16:30')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://pbs.twimg.com/profile_images/1431712333206798351/cqJsrAKI_400x400.jpg',
      name: 'Yan Aguiar',
      description: 'Desenvolvedor front end',
    },
    content: [
      { type: 'paragraph', content: 'Fala pessoal 👋' },
      { type: 'paragraph', content: 'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 <' },
      {type: 'link', content: 'yanzinho.design'},
    ],
    publishedAt: new Date('2023-07-22 08:16:30')
  },
  
];

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="Ignite Feed" />
      
      <div className={styles.wrapper}>
        <Sidebar
        userName='Ana Luiza Simoni'
        description='Programadora Fullstack'
        coverImage='https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=40'
        userImage='https://avatars.githubusercontent.com/u/108814319?v=4'
        />
        <main>
          {posts.map(post => (
            <Post 
            key={post.id}
            author={post.author} 
            publishedAt={post.publishedAt} 
            content={post.content}/>
          ))}
        </main>
      </div>
    </div>
  );
};

export default App;