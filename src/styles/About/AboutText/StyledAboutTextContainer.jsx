import styled from 'styled-components';
import { motion } from 'framer-motion';

// About text
export const StyledAboutTextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  width: 100%;
  height: 100%;
  /* grid-column: 2 / -1; */
  position: relative;
  max-width: 50rem;
  /* margin-right: 75rem; */
  padding-right: 5rem;
  z-index: 100000;
`;
