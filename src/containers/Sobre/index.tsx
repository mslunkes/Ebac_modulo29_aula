import Titulo from "../../components/Titulo"
import Paragrafo from "../../components/Paragrafo"
import { GithubSecao } from "./styles"


const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="secundario">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam nihil velit incidunt suscipit temporibus dolore. Dolores veritatis molestiae atque culpa? Placeat cum sunt optio praesentium? Dolore voluptatem dolor iusto cum!
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=mslunkes&show_icons=true&theme=dracula&count_private=true" alt="" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=mslunkes&hide_progress=donut" alt="" />
    </GithubSecao>
  </section>
)
 export default Sobre
