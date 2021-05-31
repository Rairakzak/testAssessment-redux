import React, { useEffect } from "react";
import { Jumbotron } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../../store/spaces/actions";
import { selectSpaces } from "../../store/spaces/selectors";
import Container from "react-bootstrap/Container";
import Space from "../../components/Space";
const Spaces = () => {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);
  return (
    <>
    <Jumbotron>
      <h1>Spaces</h1>
    </Jumbotron>
    <Container>
      {spaces.map(space => {
        return (
          <Space
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            showLink={true}
          />
        );
      })}
    </Container>
  </>
  );
};

export default Spaces;
