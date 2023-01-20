import ListGroup from "./components/ListGroup";
import { MDBContainer } from "mdb-react-ui-kit";

function App() {
  return (
    <div className="text-center py-5">
      <div className="fs-1 mb-4 text-uppercase">Things to do</div>
      <MDBContainer breakpoint="md" style={{ maxWidth: "50rem" }}>
        <ListGroup />
      </MDBContainer>
    </div>
  );
}

export default App;
