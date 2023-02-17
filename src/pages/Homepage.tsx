import { useMemo, useState } from 'react';

import { Box } from '@mui/material';

import { Header } from '../components/Heading';
import { Menu } from '../components/Menu';
import { ProductCard } from '../components/ProductCard/ProductCard';

import { handleFilter, handleSearch } from '../utils/functions';
import products from '../json/products.json';

export const Homepage = () => {
  const [searchText, setSearchText] = useState<string>('');
  const [filterText, setFilterText] = useState<string[]>([]);

  const handleInput = (text: string) => {
    setSearchText(text)
  }

  const onChangeFilter = (text: string) => {
    if (filterText.includes(text)) {
      setFilterText(filterText.filter((filterProperty) => filterProperty !== text));
    } else {
      setFilterText([...filterText, text]);
    }
  }

  const filteredProducts = useMemo(() => {
    const productsArray = products.data.nodes.filter((product) => handleSearch(product, searchText)).filter((product) => handleFilter(product, filterText))

    return { productsArray, productsLength: productsArray.length }
  }, [filterText, searchText])

  return (
    <Menu
      searchInput={handleInput}
      onChangeFilter={onChangeFilter}
    >
      <Header
        title='Higiene Pessoal'
        subtitle={`${filteredProducts.productsLength} itens encontrados`}
      />
      <Box sx={{
        width: "100%", display: "flex", flexDirection: "row", justifyContent: "center", flexWrap: "wrap", gap: "28px", marginBottom: "60px"
      }}>
        <ProductCard
          productsArray={filteredProducts.productsArray}
        />
      </Box>
    </Menu >
  )
}
