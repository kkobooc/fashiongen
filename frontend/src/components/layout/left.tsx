import { IMenuData, MENU_DATA } from '@/common/constant/menu.constant';
import { Grid, styled, Text } from '@nextui-org/react';
import Link from 'next/link';
import DarkmodeButton from '../darkmode/darkmode-button';

const LiStyled = styled('li', {
  
});

const Left = () => {

  const ParentMenuList = ({menuData}: {menuData: IMenuData}) => {
    return (
      <LiStyled key={menuData.key}>
        <Link href={menuData?.link ?? '#'}>
          <Text b>{menuData.text}</Text>
        </Link>
        {
          menuData?.children
          ?
          <ChildrenMenuList menuData={menuData?.children} />
          :
          null
        }
      </LiStyled>
    )
  }

  const ChildrenMenuList = ({menuData}: {menuData: IMenuData[]}) => {
    return (
      <ul>
        {
          menuData.map((md) => {
            return (
              <LiStyled key={md.key}>
                <Link href={md?.link ?? '#'}>
                  <Text css={{'&:hover': { opacity: 0.8 }}}>{md.text}</Text>
                </Link>
              </LiStyled>
            )
          })
        }

      </ul>
    )
  }

  return (
    <Grid.Container direction='column' justify='space-between'>
      <Grid>
        <ul>
        {
          MENU_DATA.map((nm) => {
            return (
              <ParentMenuList key={nm.key} menuData={nm} />
            )
          })
        }
        </ul>
      </Grid>
      <Grid justify='center' css={{ display: 'flex', padding: 10 }}>
        <DarkmodeButton />
      </Grid>
    </Grid.Container>
  )
}

export default Left;