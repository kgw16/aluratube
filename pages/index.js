import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import {StyledTimeline} from "../src/components/Timeline"

function HomePage() {
    
    const [valorDoFiltro,setValorDoFiltro] = React.useState("");
    
    return (
        <>
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}/>
                <Header/>
                <Timeline seachValue={valorDoFiltro} playlists = {config.playlists}>
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
    background-color: ${(theme)=> theme.backgroundLevel1};

    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }

    .user-info{
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap:16px;
    }
`;

const StyledBanner = styled.div`
    background-color:blue;
    height: 230px;
    width: 100%;
    background-image: url(${({bg})=>bg});
    /* background-image: url(${config.bg}); */
`;
function Header(){
    return(
        <StyledHeader>
            <StyledBanner bg={config.bg}/>
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

function Timeline({seachValue, ...propriedades}){

    const playlistNames = Object.keys(propriedades.playlists)
    //statement
    //retorno por expressão

    return(
        <StyledTimeline>
           {playlistNames.map((playlistName)=>{
            const videos = propriedades.playlists[playlistName];
            return (
            <section key={playlistName}>
                <h2>{playlistName}</h2>
                <StyledTimeline>
                    {videos
                    .filter((video)=>{
                        const titleNormalize = video.title.toLowerCase();
                        const seachValueNormalize = seachValue.toLowerCase();

                        return titleNormalize.includes(seachValueNormalize);

                    })
                    .map((video)=>{
                        return(
                            <a key={video.url} href={video.url}>
                                <img src={video.thumb}/>
                                <span>
                                    {video.title}
                                </span>
                            </a>  
                        )
                
                    })}
        </StyledTimeline>
            </section>
            )
           })}
        </StyledTimeline>
    )
}