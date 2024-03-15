import { StyledSkill } from './StyledSkill';
import { skills } from './skillsList';
import { Tooltip } from '@mui/material';

export const Skills = () =>
  skills.map((skill) => (
    <Tooltip placement="top" title={skill.name} key={skill.id}>
      <a href={skill.anchor} target="_blank">
        <StyledSkill>
          <img src={skill.icon} alt={skill.name} className="icon" />
        </StyledSkill>
      </a>
    </Tooltip>
  ));
