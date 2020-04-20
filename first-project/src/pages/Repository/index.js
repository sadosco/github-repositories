import React from 'react';

// import { Container } from './styles';

export default function Repository({ match }) {
  return <h1>Respository: {decodeURIComponent(match.params.repository)}</h1>;
}
