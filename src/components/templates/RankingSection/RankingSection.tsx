import { useState, useEffect } from 'react';
import { RankingSectionHeader, Wrapper } from './RankingSection.styles';
import { useCars } from 'hooks/useCars';
import { useRepairs } from 'hooks/useRepairs';
import { Car } from 'helpers/interfaces/Car';
import { Client } from 'helpers/interfaces/Client';
import { Category } from 'helpers/interfaces/Category';
import { Mechanic } from 'helpers/interfaces/Mechanic';
import RankingWrapper from 'components/molecules/RankingWrapper/RankingWrapper';
import trophy from 'assets/icons/trophy.png';
import volkswagen from 'assets/icons/volkswagen.png';
import audi from 'assets/icons/audi.png';
import bmw from 'assets/icons/bmw.png';

export const RankingSection = () => {
  const { getTheMostFrequentlyRepairedBrand } = useCars();
  const { getTheMostFrequentlyRepairedCar, getTheMostFrequentlyUsedCategory, getFavouriteClient, getTheBestMechanic } = useRepairs();
  const [brand, setBrand] = useState([]);
  const [car, setCar] = useState<Car>();
  const [client, setClient] = useState<Client>();
  const [category, setCategory] = useState<Category>();
  const [mechanic, setMechanic] = useState<Mechanic>();
  const [error, setError] = useState('');
  useEffect(() => {
    (async () => {
      let theMostFrequentlyBrand = await getTheMostFrequentlyRepairedBrand();
      theMostFrequentlyBrand = theMostFrequentlyBrand.split(',');
      const car = await getTheMostFrequentlyRepairedCar();
      const client = await getFavouriteClient();
      const category = await getTheMostFrequentlyUsedCategory();
      const mechanic = await getTheBestMechanic();
      setBrand(theMostFrequentlyBrand);
      setCar(car);
      setClient(client);
      setCategory(category);
      setMechanic(mechanic);
    })();
  }, [getTheMostFrequentlyRepairedBrand, getTheMostFrequentlyRepairedCar, getFavouriteClient, getTheMostFrequentlyUsedCategory, getTheBestMechanic]);

  function getBrandLogo(brand: string): string {
    if (brand === 'Volkswagen') {
      return volkswagen;
    } else if (brand === 'BMW') {
      return bmw;
    } else {
      return audi;
    }
  }
  return (
    <Wrapper>
      <RankingSectionHeader>
        <img src={trophy} alt="trophy" /> <h2>Ranking</h2> <img src={trophy} alt="trophy" />
      </RankingSectionHeader>
      {car && client && category && mechanic ? (
        <>
          <RankingWrapper title="The most frequently repaired brand:" image={getBrandLogo(brand[0])} />
          <RankingWrapper title="The most frequently repaired car:" firstItem={car.brand} secondItem={car.model} image={getBrandLogo(car.brand)} />
          <RankingWrapper title="Favourite client:" firstItem={client.firstName} secondItem={client.lastName} />
          <RankingWrapper title="The most frequently used category:" firstItem={category.name} />
          <RankingWrapper title="The best mechanic:" firstItem={mechanic.firstName} secondItem={mechanic.lastName} />
        </>
      ) : (
        <RankingSectionHeader>
          <h2>{error ? error : 'Loading...'}</h2>
        </RankingSectionHeader>
      )}
    </Wrapper>
  );
};

export default RankingSection;
