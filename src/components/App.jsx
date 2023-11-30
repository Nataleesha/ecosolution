import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import About from "src/components/About/About";

import { Container } from "./App.styled";

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
    </Container>
  );
};

export default App;
