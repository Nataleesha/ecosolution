import Header from "src/components/Header/Header";
import Main from "src/components/Main/Main";
import About from "src/components/About/About";
import Electricity from "./Electricity/Electricity";
import Cases from "src/components/Cases/Cases";
import Questions from "src/components/Questions/Questions";

import { Container } from "./App.styled";

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <About />
      <Electricity />
      <Cases />
      <Questions />
    </Container>
  );
};

export default App;
