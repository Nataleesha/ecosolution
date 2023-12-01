import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import About from "src/components/About/About";
import Electricity from "./Electricity/Electricity";
import Cases from "./Cases/Cases";

import { Container } from "./App.styled";

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
    </Container>
  );
};

export default App;
