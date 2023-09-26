import React from "react";
import styled from "styled-components";

const FooterSection = styled.div`
  background: #151418;
  display : flex;
  text-align: center;
  align-items: center;
  width: 100%;
  height: 200px;

  span {
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container">
        <span>
        ©2023 By{" "}
          <a
            href="https://github.com/Benjtalkshow"
            target="_blank"
            rel="noopener noreferrer"
          >
            @Benjtalkshow
          </a>{" "}
        </span>
      </div>
    </FooterSection>
  );
}

export default Footer;
