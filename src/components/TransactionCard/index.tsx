import {
  Container,
  Title,
  Amount,
  Footer,
  Icon,
  Category,
  CategoryName,
  Date,
} from './styles';

export default function TransactionCard() {
  return (
    <Container>
      <Title>Desenvolvimento de site</Title>
      <Amount>R$ 12.000,00</Amount>
      <Footer>
        <Category>
          <Icon name='dollar-sign'/>
          <CategoryName>Vendas</CategoryName>
        </Category>
        <Date>18/12/2023</Date>
      </Footer>
    </Container>
  );
}
