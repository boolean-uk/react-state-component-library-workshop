import { Text } from "@mantine/core";

function Header() {
  return (
    <section>
      <Text
        size="xl"
        fw={900}
        variant="gradient"
        gradient={{ from: "yellow", to: "pink", deg: 90 }}
      >
        My Task App
      </Text>
    </section>
  );
}

export default Header;
