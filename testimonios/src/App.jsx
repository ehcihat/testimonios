
import Testimonio from './components/Testimonio';
import { ListItem, Grid2} from '@mui/material';

function App() {
  const personas = [{
    id: 0,
    nombre: 'Emily Wattson',
    atribute: 'CEO de Vite',
    imageUrl: '/emily.jpg',
    imageSize: 150,
    description: 'Emily Wattson es la CEO de Vite, un framework de React diseñado para construir aplicaciones web modernas.',
  },
  {
    id: 1,
    nombre: 'Robin Humphrey',
    atribute: 'Manager de Vite',
    imageUrl: '/robin.jpg',
    imageSize: 150,
    description: 'Robin Humphrey es manager oficial de Vite, trabaja codo con codo con Emily Wattson para entregar las mejores actualizaciones.',
  },
  {
    id: 2,
    nombre: 'Matthew Lamb',
    atribute: 'Barrendero de Vite',
    imageUrl: '/matthew.jpg',
    imageSize: 150,
    description: 'Es un grande el Matthew Lamb, un conserje fenomenal.',
  },
  {
    id: 3,
    nombre: 'Marco Antonio',
    atribute: 'Militar y político romano',
    imageUrl: '/marco.jpg',
    imageSize: 150,
    description: 'Marco Antonio fue un militar y político romano de la época final de la República, conocido también como Marco Antonio el Triunviro.​ Jugó un papel fundamental en la transformación de la República romana de una república constitucional al autocrático Imperio romano.',
  }];

  return (
    <Grid2
      container
      display='flex'
      spacing={0}
      alignItems="center"
      justifyContent="center"
      width="100vw"
    >
      <Grid2>
        {personas.map((persona) => (
          <ListItem key={persona.id}>
            <Testimonio persona={persona} />
          </ListItem>
        ))}
      </Grid2>

    </Grid2>
  );
}

export default App;
