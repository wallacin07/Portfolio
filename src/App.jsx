
import style from './App.module.css'

function App() {
  return (
    <>
      <header>
        <div className={style.Start}>
            <svg width="40" height="23" viewBox="0 0 90 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="35" height="52" fill="#000000"></rect><path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="aliceblue"></path><rect  x="45" y="44" width="29" height="8" fill="#000000"></rect></svg>
            <h3>DevSpot</h3>
        </div>
        <nav className={style.navBar}>
            <div className={style.navItens}>
                <div className={style.guides} >
                       <a href="#home"><h3 id={style.home}>Home</h3></a> 
                </div>
                
                <div className={style.guides}>
                       <a href="#experience"><h3 id={style.experience}> Experience</h3></a> 

                </div>

                <div className={style.guides}>
                       <a href="#myStory"><h3 id={style.story}>My Story</h3></a> 
                </div>

                <div className={style.guides} >  
                        <a href="#contact"><h3 id={style.contact}>Contact me</h3></a>
                </div>

            </div>
        </nav>
    </header>


    <div className={style.mainContent}>
<section id='home'>

  <div className={style.boxAbout}>
      <div className={style.textAbout}>
          <h1>Hello, i&apos;m <span className={style.neonText}>Wallace!</span></h1>
          
          <h2>I&apos;m a developer.</h2>
          
          <div className={style.neon}>
          <h3>

          Minha area principal é no desenvolvimento back-end, mas também com atuação no front-end, o que me proporciona uma visão mais ampla do ciclo de desenvolvimento de aplicações. 
          Ao longo desse tempo, trabalhei em projetos que envolvem a construção de APIs, manipulação de bancos de dados, e implementação de lógica.
          <br/><br/>
          Estou constantemente em busca de aprimorar meus conhecimentos e aplicar soluções criativas nos projetos em que estou envolvida, com o objetivo de me tornar uma desenvolvedor full stack mais completo.
          </h3>

          </div>
      </div>
      <div className={style.hero_graphic}>
          <div className={style.computer_graphic}><img src="../src/assets/imagem.svg" alt="" /></div></div>

  </div>

</section>
<section id='experience'>
  <div className={style.Technologies}>

      <div className={style.textTech}>
          <h1>
              Languages that i learned!
              <h3>
                  My main area of expertise is the back end (server side of the web)
                  <br/><br/>
                  Java, C# and C are my main languages, used in projects that integrate with databases, and because they are more performant in Server Side solutions, but I have experience in other languages, such as Python, Javascript and HTML and CSS
              </h3>
          </h1>
      </div>
  
    <div className={style.images}>    
        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/java-svgrepo-com.svg" alt=""/>
        </div>

        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/Csharp.svg" alt=""/>
        </div>

        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/c.svg" alt=""/>
        </div>

        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/python.svg" alt=""/>
        </div>


        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/icons8-html-480.svg" alt=""/>
        </div>

        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/w3_css-icon.svg" alt=""/>
        </div>

        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/logo-javascript.svg" alt=""/>
        </div>


        <div className={style.boxImage}>
            <img id={style.imageTech} src="../src/assets/microsoft-sql-server-logo.svg" alt=""/>
        </div>
        
        <div className={style.boxImage}>
            <img id={style.imageTech} src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.svg" alt=""/>
        </div>


    </div>


</div>
</section>


</div>




<footer>
<a id="link" target='blank' href="https://github.com/wallacin07"><img  id={style.imageFooter} src="../src/assets/icons8-github-250.svg" alt=""/></a>
<a  id="link" target='blank' href="https://www.linkedin.com/in/wallace-abreu-da-silva-948304244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img  id={style.imageFooter} src="../src/assets/icons8-linkedin-240.svg" alt=""/></a>
</footer>
    </>
  )
}

export default App
