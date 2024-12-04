import Card from "./components/Card";
import btaPosterImg from "./assets/bta.jpg";
import btbPosterImg from "./assets/btb.jpg";
import btcPosterImg from "./assets/btc.jpg";
import btdPosterImg from "./assets/btd.jpg";

export default function App() {
  return (
    <>
      <Card
        title="Pôster: Batman Forever (1995)"
        poster={btaPosterImg}
        description="Com o término da dobradinha entre Tim Burton e Michael Keaton, mudanças drásticas foram feitas neste filme de 1995. Para a direção, assumiu Joel Schumacher e o papel de Batman ficou para Val Kilmer, conhecido por sua participação em Top Gun. 

O destaque deste longa é a inserção e explicação da origem de Dick Grayson, o Robin. Também são apresentados os vilões Charada e Duas-Caras, para o público mais jovem e afastado dos quadrinhos."
      />
      <Card
        title="Pôster: Batman & Robin (1997)"
        poster={btbPosterImg}
        description="Nova substituição de protagonista, agora, com a entrada de George Cloney no papel de Batman. A direção continuou com Joel Schumacher, após o lançamento e as duras críticas, o projeto foi engavetado pela Warner Bros. 

Na história, além de Batman e Robin, contamos com a entrada de Batgirl. O trio se une para enfrentar Senhor Frio (Mr.Freeze), Hera Venenosa e Bane. A participação de Arnold Schwarzenegger como vilão não ajudou, neste que é considerado o pior filme do Batman na era clássica."
      />
      <Card
        title="Pôster: Batman Begins (2005)"
        poster={btcPosterImg}
        description="Agora, Com direção de Christopher Nolan e a interpretação do herói com Christian Bale, a série é aclamada pela crítica e fãs. 

Como um recomeço, a trama volta a infância do herói, a morte dos seus pais e o treinamento que recebeu para entrar na Liga das Sombras, controlada por seu futuro inimigo Ra’s al Ghul.

O vilão a ser batido no filme de 2005 é o Espantalho, que utiliza um gás psicótico, gerando alucinações assombrosas em suas vítimas. O vilão tem uma abordagem mais política, indo além do clichê de dominação mundial."
      />
      <Card
        title="Pôster: Batman O Cavaleiro das Trevas (2008)"
        poster={btdPosterImg}
        description="Dando continuidade ao trabalho da dupla Christopher Nolan e Christian Bale, somos apresentados a esse que é considerado o melhor filme do Homem-Morcego em todos os tempos. 

O adversário é o Coringa, interpretado por Heath Ledger, que inclusive ganhou um Oscar póstumo pela sua interpretação. Além do sádico e violento “chefe” do crime de Gotham, temos a apresentação e transformação do promotor Harvey Dent, que ao fim da trama vira o Duas-Caras."
      />
    </>
  );
}
