import { Container, Row, Col } from "react-bootstrap";
import spotImg1 from "../assets/img/northernareasImg.png";
import spotImg2 from "../assets/img/parisImg.png";
import spotImg3 from "../assets/img/cappadociaImg.png";

export const FavouriteSpots = () => {

  const spots = [
    {
      title: "Northern Areas",
      description: " The Northern Areas are the most spectacular and fascinating region of Pakistan. The three world's famous mountain ranges meet here — the Himalayas, the Karakorams and the Hindukush. ",
      imgUrl: spotImg1,
    },
    {
      title: "Paris",
      description: " The City of Love <3 ",
      imgUrl: spotImg2,
    },
    {
      title: "Cappadocia",
      description: " Cappadocia is a land famous for its distinctive rock formation, historical heritage, and scenic hot air balloon trips. ",
      imgUrl: spotImg3,
    }
  ];

  return (
    <section className="spot">
      <div className="video-container">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/XHeDps0fX6c?si=Oewo43oXvYYbfZ9k&autoplay=1&controls=0&loop=1&mute=1&start=105" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      </div>
      <Container>
        <Row>
          <Col size={12}>

            <div >
             <h2>Favourite Spots</h2> 
              <p>These are few of my favourite spots.</p>
              <p> <b>" Move a cursor over the picture to read the details " </b></p>

              <Row>
                {
                  spots.map((projects, index) => {
                    return (
                      <Col size={12} sm={6} md={4}>
                        <div className="spot-imgbx">
                          <img src={projects.imgUrl} alt="spot" />
                          <div className="spot-txtx">
                            <h4>{projects.title}</h4>
                            <div className="description">{projects.description}</div>
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
