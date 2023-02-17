import { IProduct } from "../../utils/interfaces";
import { Cover, Card, Subtitle, Title, More } from "./ProductCard.styled";

interface IProductCard {
  productsArray: IProduct[];
}

export const ProductCard = ({ productsArray }: IProductCard) => {
  return (
    <>
      {productsArray.map((product) => (
        <Card key={product.id}>
          <Cover>
            <img
              src={`${product.images.map((imageUrl) => imageUrl.asset.url)}`}
              alt={`${product.images.map((imageUrl) => imageUrl.alt)}`}
            />
          </Cover>
          <Title>
            {product.name}
          </Title>
          {/* <Subtitle>
            {product.shortDescription}
          </Subtitle> */}
          <More>
            Veja mais detalhes +
          </More>
        </Card>
      ))}
    </>
  )
}
