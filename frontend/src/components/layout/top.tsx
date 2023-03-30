import { Navbar, Text, Dropdown, Avatar, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';
// import Link from 'next/link';
import DarkmodeButton from '../darkmode/darkmode-button';

const Top = () => {
  const { isDark } = useTheme();

  return (
    <Navbar isBordered={isDark} variant="sticky" maxWidth={'fluid'}>
      <Navbar.Toggle showIn="md" />
      <Navbar.Brand
        css={{
          "@md": {
            w: "12%",
          },
        }}
      >
        <Link href='/'>
          <Text b color="inherit" hideIn="xs">
            LOGO
          </Text>
        </Link>
      </Navbar.Brand>
      <Navbar.Content
        enableCursorHighlight
        // activeColor="warning"
        hideIn="md"
        variant="highlight"
      >
        {/* <Navbar.Link href="/app-user">test1</Navbar.Link>
        <Navbar.Link isActive href="#">test2</Navbar.Link>
        <Navbar.Link href="#">test3</Navbar.Link>
        <Navbar.Link href="#">test4</Navbar.Link> */}
      </Navbar.Content>
      <Navbar.Content
        css={{
          "@md": {
            w: "12%",
            jc: "flex-end",
          },
        }}
      >

        <DarkmodeButton />
      </Navbar.Content>
      <Navbar.Collapse>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default Top;
