import { SpaceBetweenCenteredFlexBox, StyledLink } from '@/components/styled';
import { Pages } from '@/routes/types';
import routes from '@/routes';

import { Icon, MobileNavContainer } from './styled';
import search from './icons/search.svg';
import map from './icons/map.svg';
import user from './icons/user.svg';

interface Navigation {
  link: string;
  icon: string;
}

function MobileNav() {
  const navigation: Navigation[] = [
    {
      link: routes[Pages.Main].path as string,
      icon: search,
    },
    {
      link: routes[Pages.Map].path as string,
      icon: map,
    },
    {
      link: routes[Pages.User].path as string,
      icon: user,
    },
  ];

  return (
    <MobileNavContainer>
      <SpaceBetweenCenteredFlexBox>
        {navigation.map((item) => {
          return (
            <StyledLink key={item.link} to={item.link}>
              <Icon src={item.icon} />
            </StyledLink>
          );
        })}
      </SpaceBetweenCenteredFlexBox>
    </MobileNavContainer>
  );
}

export default MobileNav;
