import { CenteredFlexBox, FlexBox } from '@/components/styled';
import { styled } from '@mui/material/styles';

const IconContainer = styled(CenteredFlexBox)({
  borderRadius: '50%',
  background: '#fff',
  width: '40px',
  height: '40px',
  zIndex: '1',
  cursor: 'pointer',
});

const Icon = styled('img')({
  width: '20px',
  height: '20px',
});

const Container = styled(FlexBox)({
  position: 'relative',
  margin: '0 0 24px',
});

const Input = styled('input')<{ isOpen: boolean }>(({ isOpen }) => ({
  position: 'absolute',
  height: '100%',
  zIndex: '0',
  border: 'none',
  background: '#E3E3E3',
  borderRadius: '40px 30px 30px 40px',
  outline: 'none',
  left: '10px',
  width: isOpen ? 'calc(100% - 10px)' : '0',
  padding: isOpen ? '0 calc(30px + 20px)' : '0',
  transition: 'all 0.4s linear',
}));

export { Icon, IconContainer, Container, Input };
