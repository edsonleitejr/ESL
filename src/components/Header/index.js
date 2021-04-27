import React from 'react';
import logoImg from '../../assets/logo.png';

import { Container } from './styles';

export default function Header() {
  return (
    <Container>
    <img src = {logoImg} alt="ESL" />
    <h1>ESL Pintura industrial</h1>
    <a aria-current="page" class="active" href="/Texto">Home</a>
    <a aria-current="page" class="active" href="/Servico">Serviço</a>
    <a aria-current="page" class="active" href="/dashboard">Galaria</a>
    </Container>
  );
}
