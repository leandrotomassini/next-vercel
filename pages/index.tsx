import { NextPage, GetStaticProps } from 'next';
import { Grid } from '@nextui-org/react';

import { Layout } from '../components/layouts';
import { PokemonCard } from '../components/pokemon';
import { pokeApi } from '../api';

import { PokemonListResponse, SmallPokemon } from '../interfaces';

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({ pokemons }) => {

  return (
    <Layout title='Listado de Pokemons'>
      <Grid.Container gap={2} jusfy='flex-start'>
        {
          pokemons.map((pokemon) => (
            <PokemonCard pokemon={pokemon} />
          ))
        }
      </Grid.Container>
    </Layout>
  );


}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');

  const pokemons: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));


  return {
    props: {
      pokemons
    }
  }
}




export default HomePage;



