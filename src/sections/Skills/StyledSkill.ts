import styled from 'styled-components';
import { motion } from 'framer-motion';

export const StyledSkillsList = styled(motion.div)`
  position: relative;
  z-index: 901;

  .skill-link {
    position: relative;
    z-index: 1;
  }
`;

export const StyledSkill = styled.span`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 100px;
  border: 1px solid lightgray;
  color: black;
  width: 100px;
  height: 100px;
  &:hover {
    background-color: lightgray;
    color: white;
    transition: all 0.5s ease-in-out;
    cursor: pointer;
  }

  .icon {
    position: relative;
    z-index: 1001;
    width: 100px;
    height: 100px;
  }
`;
