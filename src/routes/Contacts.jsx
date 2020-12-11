import { faCreditCard, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import { Card, Row, Col, InputGroup, FormControl, Button } from "react-bootstrap";
import Loader from "../components/Loader";

export default class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      contacts: [],
    };
  }

  render() {
    const { loading, contacts } = this.state;

    return (
      <div className="contacts">
        <h1>Kontaktbuch</h1>
        <Row>
          <Col xs={12} md={12} lg={6} xl={4}>
            {loading ? (
              <Card className="border-top shadow-md p-4">
                <Loader />
              </Card>
            ) : (
              <Card className="border-top shadow-md">
                <Card.Header className="bg-white border-bottom-0 pb-0">
                  <Card.Title className="text font-weight-bold mb-0">Kontakte</Card.Title>
                  <InputGroup className="mb-3">
                    <FormControl type="text" placeholder="Kontakt suchen" disabled />
                    <InputGroup.Append>
                      <Button
                        variant="primary"
                        className="px-3"
                        onClick={() => {
                          console.log("show modal");
                        }}
                      >
                        Eintragen
                      </Button>
                    </InputGroup.Append>
                  </InputGroup>
                </Card.Header>
                <Card.Body className="pb-0 pt-0">
                  {contacts.map((contact) => {
                    return (
                      <div className="bg-light mb-3 rounded p-2">
                        <Row>
                          <Col xs={12} md={12} lg={12} xl={12}>
                            <p className="text text-center font-weight-bold">
                              <img
                                className="rounded-circle mr-2"
                                src={contact.avatarUrl}
                                alt="avatar"
                                style={{ width: "2.1rem", height: "auto" }}
                              />
                              {contact.playerName}
                            </p>
                          </Col>
                          <Col xs={12} md={12} lg={6} xl={6} className="border-right-2">
                            <p className="text text-center font-weight-bold mb-0 mb-2">
                              <FontAwesomeIcon icon={faPhone} className="icon mr-2" />
                              {contact.telNo}
                            </p>
                          </Col>
                          <Col xs={12} md={12} lg={6} xl={6}>
                            <p className="text text-center font-weight-bold mb-0">
                              <FontAwesomeIcon icon={faCreditCard} className="icon mr-2" />
                              Nicht verfügbar
                            </p>
                          </Col>
                        </Row>
                      </div>
                    );
                  })}
                </Card.Body>
              </Card>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}
