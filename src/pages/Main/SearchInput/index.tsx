import { Container, Icon, IconContainer, Input } from './styled';

import search from './icons/search.svg';
import { useState } from 'react';

import './index.css';

interface Props {
  onInput: (value: string) => void;
}

function SearchInput(props: Props) {
  const [isInputShown, setIsInputShown] = useState(false);

  return (
    <Container>
      <IconContainer onClick={() => setIsInputShown(!isInputShown)}>
        <Icon src={search} />
      </IconContainer>
      <Input
        isOpen={isInputShown}
        onInput={(event) => props.onInput((event.target as HTMLInputElement).value)}
      />
    </Container>
  );
}

export default SearchInput;
