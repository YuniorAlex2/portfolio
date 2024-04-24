import styled from "styled-components";
import SkillsBox from "./SkillsBox";
import { FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress, SiRedux } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

function SkillsItem() {
  const StyledSkillsItem = styled.ul`
    display: flex;
    scroll-behavior: auto;
    flex-wrap: wrap;
    align-items: center;
    width: 50%;
    height: 85%;
    gap: 2.8rem;
  `;

  return (
    <StyledSkillsItem>
      <SkillsBox iconcolor="html">
        <IoLogoHtml5 />
      </SkillsBox>

      <SkillsBox iconcolor="css">
        <IoLogoCss3 />
      </SkillsBox>

      <SkillsBox iconcolor="javaScript">
        <IoLogoJavascript />
      </SkillsBox>

      <SkillsBox iconcolor="react">
        <FaReact />
      </SkillsBox>

      <SkillsBox iconcolor="redux">
        <SiRedux />
      </SkillsBox>

      <SkillsBox iconcolor="node">
        <FaNodeJs />
      </SkillsBox>

      <SkillsBox iconcolor="expressJs">
        <SiExpress />
      </SkillsBox>

      <SkillsBox iconcolor="postgreSql">
        <BiLogoPostgresql />
      </SkillsBox>
    </StyledSkillsItem>
  );
}

export default SkillsItem;
