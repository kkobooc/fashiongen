import { Container, Grid, Text } from "@nextui-org/react";

const Bottom = () => {
  return (
      <Grid.Container gap={2} justify='center' style={{borderTop: '1px solid'}}>
        <Grid xs={12} justify='center'>
          <Text>bottom</Text>
        </Grid>
      </Grid.Container>
  );
}

export default Bottom;
