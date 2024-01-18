import { Container, Row, Col } from "react-bootstrap";
import citiesImg1 from "../assets/img/lahoreImg.png";
import citiesImg2 from "../assets/img/islamabadImg.png";
import citiesImg3 from "../assets/img/karachiImg.png";

export const FavouriteCities = () => {

  const cities = [
    {
      title: "Lahore",
      description: " Lahore the 2nd largest city of Pakistan and is capital of province Punjab. Lahore is referred to as cultural heart of Pakistan as it hosts most of the arts, cuisine, festivals, music and film-making of the country ",
      imgUrl: citiesImg1,
    },
    {
      title: "Islamabad",
      description: " Islamabad has a reputation of being a thriving, business-minded capital that lies in the centre of Pakistan's growing urbanized scene. ",
      imgUrl: citiesImg2,
    },
    {
      title: "Karachi",
      description: " ALTAF BHAI ALTAF BHAI ALTAF BHAI !! ",
      imgUrl: citiesImg3,
    }
  ];

  return (
    <section className="cities">
      <div className="video-container">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/M9zNGtrtr7Q?si=uxKyQ7CCZc3FzV0n&autoplay=1&controls=0&loop=1&mute=1&start=41" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
      </div>
      <Container>
        <Row>
          <Col size={12}>

            <div >
              <h2>Favourite Cities</h2>
              <p> These are my favourite cities.  </p>
              <p> <b>" Move a cursor over the picture to read the details " </b></p>
              <Row>
                {
                  cities.map((cities, index) => {
                    return (
                      <Col size={12} sm={6} md={4}>
                        <div className="cities-imgbx">
                          <img src={cities.imgUrl} alt="cities" />
                          <div className="cities-txtx">
                            <h4>{cities.title}</h4>
                            <div className="description">{cities.description}</div>
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
