import { styled } from '@mui/material/styles';

const MobileNavContainer = styled('div')({
  position: 'fixed',
  width: '80%',
  background: '#fff',
  left: '50%',
  top: 'calc(100dvh - 30px)',
  transform: 'translate(-50%, -100%)',
  padding: '12px 24px',
  borderRadius: '40px',
  boxShadow:
    'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
});

const Icon = styled('img')({
  width: '20px',
  height: '20px',
});

export { MobileNavContainer, Icon };
