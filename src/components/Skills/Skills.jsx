import { motion } from 'framer-motion';
import styled from 'styled-components';
import { skillData } from '../../data/skillData';
import { StyledSectionHeading } from '../../styles/UI/StyledSectionHeading';
import { parentTechnologyVariants } from '../../utils/animations';
import Skill from './Skill';
import { useReducedMotion } from 'framer-motion';

const StyledSkillsSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: min-content 1fr;
  row-gap: 6rem;
  padding: 12rem 0;
  height: 60rem;
  /* background-image: linear-gradient(to bottom, #d3d9d3, #fff); */
  background-image: linear-gradient(
    to top,
    ${props => props.theme.neutrals.body} 0%,
    rgba(252, 252, 251, 0.9) 90%
  );
  background-image: linear-gradient(
      to top,
      rgb(247, 247, 255, 0.1) 0%,
      rgba(255, 255, 255, 0.1) 10%,
      rgba(255, 255, 255, 0.1) 60%,
      rgba(255, 255, 255, 0.9) 95%
    ),
    url(src/assets/images/illustrations/wisp.svg);
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledSkillsContainer = styled.div`
  max-width: 70rem;
  max-width: 80rem;
  margin: 0 auto;
`;

const StyledSkillsList = styled(motion.ul)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  /* display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: repeat(4, 1fr); */
  gap: 1.6rem;
  width: 95%;
  width: 100%;
`;

const Skills = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <StyledSkillsSection>
      <StyledSectionHeading>
        <h2>technology</h2>
      </StyledSectionHeading>
      <StyledSkillsContainer>
        <StyledSkillsList
          initial={shouldReduceMotion ? 'noMotion' : 'hidden'}
          whileInView='visible'
          variants={parentTechnologyVariants}
        >
          {skillData.map(skill => {
            return <Skill key={skill.id} skill={skill} />;
          })}
        </StyledSkillsList>
      </StyledSkillsContainer>
    </StyledSkillsSection>
  );
};

export default Skills;
