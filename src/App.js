import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMoon,
    faAngry
} from "@fortawesome/free-regular-svg-icons";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d6b36;
  flex-direction: column;
  padding: 50px;
  border-radius: 10%;

  &::placeholder {
    font-size : 3px;
    
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
`;

const Input = styled.input`
    width : 100%;
    border-radius : 6px;
    margin-top : 5px;
    padding : 3px;

`;


function App() {
  return (
      <MainContainer>
          <Container>
              <div style={{'color': 'white'}}>
                  <FontAwesomeIcon icon={faMoon} size="6x" />
              </div>
              <form>
                  <Input
                  type={"text"}
                  placeholder={"dfsfs"}
                  />
                  <Input
                      type={"password"}
                      placeholder={"dfsfs"}
                  />
                  <Input
                      type={"submit"}
                      placeholder={"dfsfs"}
                  />
              </form>
          </Container>
      </MainContainer>
  );
}

export default App;
