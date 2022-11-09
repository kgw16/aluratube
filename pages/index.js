import config from "../config.json"
import styled from "styled-components"
import {CSSReset} from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"

function HomePage() {
    const estilosDaHomePage = { 
        // backgroundColor: "red"
    }

    

    return (
        <>
            <CSSReset />
            <div style={estilosDaHomePage}>
                <Menu />
                <Header/>
                <Timeline playlists = {config.playlists}>
                    conteudo
                </Timeline>
                
            </div>
        </>
    );
  }
  
export default HomePage



// function Menu(){
//     return(
//         <div>
//             Menu
//         </div>
//     )
// }

const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap:16px;
    }
`;
function Header(){
    return(
        <StyledHeader>
            {/* <img src=""/> */}
            <section className="user-info">
                <img src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>  
                </div>
            </section>     
        </StyledHeader>
    )
}

function Timeline(propriedades){

    // console.log("de dentro do conteudo",propriedades)
    const playlistNames = Object.keys(propriedades.playlists)
    //statement
    //retorno por expressão

    return(
        <StyledTimeline>
           {playlistNames.map((playlistName)=>{
            const videos = propriedades.playlists[playlistName];
            console.log(videos);
            return <section>
                <h2>{playlistName}</h2>
                <StyledTimeline>
                    {videos.map((video)=>{
                    return(
                        <a href={video.url}>
                            <img src={video.thumb}/>
                            <span>
                                {video.title}
                            </span>
                        </a>  
                    )
                
                    })}
        </StyledTimeline>
            </section>
           })}
        </StyledTimeline>
    )
}