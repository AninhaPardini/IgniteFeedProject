import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';
import Post from './components/Post';
import Sidebar from './components/Sidebar';

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
          <Post 
          authorImage='https://scontent.faru1-1.fna.fbcdn.net/v/t39.30808-6/358139121_1424118098409512_4860840166927885071_n.jpg?_nc_cat=103&cb=99be929b-59f725be&ccb=1-7&_nc_sid=e3f864&_nc_ohc=HHXD4E4mz6AAX8XItoj&_nc_ht=scontent.faru1-1.fna&oh=00_AfBt6Q3MKUct3PxmtAN2u1oAF31dxMqoB2769kd4vVhCNw&oe=64C08566'
          author='Heleninha'
          description='Desenvolvedora de bagunça'
          content={<> {/* <></> é um fragmento */}
            <p>Fala galeraa 👋</p>

            <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

            <p>👉 <a href="#">heleninha.design/doctorcar</a></p>

            <p><a href="#">#novoprojeto</a> <a href="#">#nlw</a> <a href="#">#rocketseat</a></p>
          </>
          }
          />

          <Post
          authorImage='https://pbs.twimg.com/profile_images/1431712333206798351/cqJsrAKI_400x400.jpg'
          author='Yan Aguiar'
          description='Desenvolvedor front end'
          content={<>
            <p>Fala pessoal 👋</p>

            <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>

            <p>Acesse e deixe seu feedback 👉  <a href="#">yanzinho.design</a></p>

            <p><a href="#">#uiux</a> <a href="#">#userexperience</a></p>
          </>
          }
          />
        </main>
      </div>
    </div>
  );
};

export default App;