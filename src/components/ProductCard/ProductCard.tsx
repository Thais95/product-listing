import { useState } from "react";

import { Dialog, DialogContent, Grid, Stack } from "@mui/material";

import { IProduct } from "../../utils/interfaces";

import { Cover, Card, Title, More, Subtitle, ModalImage, ModalText, ModalTitle } from "./ProductCard.styled";

interface IProductCard {
  productsArray: IProduct[];
}

export const ProductCard = ({ productsArray }: IProductCard) => {
  const [open, setOpen] = useState<boolean>(false);
  const [modalValue, setModalValue] = useState<IProduct>();

  const handleModal = (obj: any) => {
    setOpen(true);
    setModalValue(obj);
    console.log(modalValue);
  }

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
          <More onClick={() => handleModal(product)}>
            Veja mais detalhes +
          </More>
        </Card>
      ))}

      <Grid xs={12} item>
        <Dialog open={open} onClose={() => setOpen(false)}>
          <DialogContent>
            <Stack
              direction="row"
              sx={{
                width: "400px",
                heigth: "auto",
                padding: "0",
                margin: "0",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <ModalImage
                src={`${modalValue?.images.map((image) => image.asset.url)}`}
                alt={`${modalValue?.images.map((image) => image.alt)}`}
              />
              <ModalText>
                <ModalTitle>
                  {modalValue?.name}
                </ModalTitle>
                <Subtitle>
                  {modalValue?.shortDescription}
                </Subtitle>
              </ModalText>
            </Stack>
          </DialogContent>
        </Dialog>
      </Grid>
    </>
  )
}
