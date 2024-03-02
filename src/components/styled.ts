import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const SpaceBetweenCenteredFlexBox = styled(CenteredFlexBox)({
  justifyContent: 'space-between',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)({
  width: '100%',
  height: '100%',
});

const PageContainer = styled(Box)({
  minHeight: '100dvh',
  maxWidth: '80%',
  margin: '0 auto',
  padding: '30px 0',
});

const StyledLink = styled(Link)({
  display: 'flex',
});

const Root = styled('div')({
  background: '#f4f4f4',
});

export {
  FlexBox,
  CenteredFlexBox,
  FullSizeCenteredFlexBox,
  PageContainer,
  SpaceBetweenCenteredFlexBox,
  StyledLink,
  Root,
};
