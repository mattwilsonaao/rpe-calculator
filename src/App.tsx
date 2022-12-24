import React, { useState } from 'react';
import { Box, Button, Heading, VStack } from '@chakra-ui/react';
import ListItems from './components/ListItems';

export const App = () => {
  const [showMenu, setShowMenu] = useState(false);

  const movements = [
    {
      lift: 'Squat',
      weight: '140kg',
      sets: '4',
      reps: '5',
      rpe: '6'
    }
  ];
  return (
    <Box
      bg='twitter.300'
      minH='100vh'
    >
      <VStack>
        <Heading>Rate of Perceived Exertion Calculator</Heading>
        <Button onClick={() => setShowMenu(!showMenu)}>
          List of Movements
        </Button>
        {showMenu && (
          <VStack
            justifyContent='space-between'
            bg='gray.400'
            borderRadius='xl'
            padding={6}
          >
            <ListItems movements={movements} />
          </VStack>
        )}
      </VStack>
    </Box>
  );
};
