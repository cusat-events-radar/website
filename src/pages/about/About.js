import React from "react";
import {
  Link,
} from "react-router-dom";

import styled from 'styled-components'


export default function About() {
  return (
    <StyledPage>
      <h2>About</h2>
      <Link to="/">Home</Link>
    </StyledPage>
  
  );
}

let StyledPage = styled.div`


`




