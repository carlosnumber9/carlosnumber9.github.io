import { StyledSkill } from './StyledSkill';
import { skills } from './skillsList';

export const Skills = () =>
  skills.map((skill) => (
    <a href={skill.anchor} key={skill.id} target='_blank'>
      <StyledSkill >{skill.name}</StyledSkill>
    </a>
  ));
