import { HStack, Text } from '@chakra-ui/react';

type Props = {
  movements: any;
};

const ListItems = ({ movements }: Props) => {
  return (
    <>
      {movements.map((movement: any) => {
        return (
          <HStack
            bg='twitter.100'
            p={4}
            borderRadius='lg'
            flex={1}
            width='xs'
            justifyContent='space-between'
          >
            <Text fontWeight={400}>{movement.lift}</Text>
            <Text fontWeight={400}>{movement.weight}</Text>
            <Text fontWeight={400}>{movement.sets} sets</Text>
            <Text fontWeight={400}>{movement.reps} reps</Text>
            <Text fontWeight={400}>@ RPE {movement.rpe}</Text>
          </HStack>
        );
      })}
    </>
  );
};

export default ListItems;
