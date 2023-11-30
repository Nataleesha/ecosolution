import { useState, useEffect } from "react";

import { Section, Title, Line, Counter } from "./Electricity.styled";

const Electricity = () => {
  const [counter, setCounter] = useState(1134147814);
  const [formatted, setFormatted] = useState("1.134.147.814");

  useEffect(() => {
    const counterInterval = setInterval(() => {
      setCounter((count) => count + 1);
    }, 1000);
    return () => clearInterval(counterInterval);
  }, []);

  useEffect(() => {
    formatNum(counter);
  }, [counter]);

  function formatNum(num) {
    let str = num.toLocaleString("en-US");
    str = str.replaceAll(",", ".");
    setFormatted(str);
  }

  return (
    <Section>
      <Title>Electricity we produced for all time</Title>
      <Line></Line>
      <Counter>
        <h3>{formatted}</h3>
        <p>kWh</p>
      </Counter>
    </Section>
  );
};

export default Electricity;
