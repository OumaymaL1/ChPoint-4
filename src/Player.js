import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardBody, CardSubtitle, CardTitle, CardText } from "reactstrap";
import "./PlayersList.css";

function Cardplayer({ el }) {
  return (
    <Card
      body
      color="dark"
      outline
      style={{
        width: "18rem",
      }}
    >
      <CardBody>
        <CardTitle className="element1" tag="h5">
          {el.name}
        </CardTitle>
        <img alt="Sample" src={el.image.url} />
        <CardSubtitle className="mb-2 text-muted elem" tag="h6">
          Nationalité : {el.nationality}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted elem" tag="h6">
          Age : {el.age}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted elem" tag="h6">
          Team : {el.team}
        </CardSubtitle>
        <CardSubtitle className="mb-2 text-muted elem" tag="h6">
          N° Trophés : {el.trophies}
        </CardSubtitle>
        {/* <CardText> N° Trophés : {el.trophies}</CardText> */}
      </CardBody>
    </Card>
  );
}

export default Cardplayer;
