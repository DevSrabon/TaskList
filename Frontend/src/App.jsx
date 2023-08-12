import { useState } from "react";
import { AddListForm, Container, Lists } from "./const";

const App = () => {
  return (
    <Container>
      <AddListForm />
      <Lists />
    </Container>
  );
};

export default App;
