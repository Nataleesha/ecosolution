import PropTypes from "prop-types";

import Socials from "src/components/Socials/Socials";

import {
  Overlay,
  OuterContainer,
  MenuContainer,
  FlexContainer,
  NavMenu,
  CloseButton,
  MenuList,
  MenuItem,
  Link,
  SocialHolder,
} from "./Menu.styled";

import Arrow from "src/assets/icons/arrow-menu.svg?react";

const Menu = ({ toggleMenu }) => {
  return (
    <Overlay>
      <OuterContainer>
        <MenuContainer>
          <NavMenu>
            <FlexContainer>
              <CloseButton type="button" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    d="M5.8335 5.83331L14.1668 14.1666M5.8335 14.1666L14.1668 5.83331"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
                close
              </CloseButton>
              <MenuList>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top: document.getElementById("main").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    Main <Arrow />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top: document.getElementById("about").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    About <Arrow />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top: document.getElementById("service").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    Service <Arrow />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top: document.getElementById("cases").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    Cases <Arrow />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top:
                          document.getElementById("questions").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    FAQ <Arrow />
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    onClick={() => {
                      window.scroll({
                        top: document.getElementById("contact").offsetTop - 120,
                        behavior: "smooth",
                      });
                      toggleMenu();
                    }}
                  >
                    Contact Us <Arrow />
                  </Link>
                </MenuItem>
              </MenuList>
            </FlexContainer>
            <SocialHolder>
              <Socials />
            </SocialHolder>
          </NavMenu>
        </MenuContainer>
      </OuterContainer>
    </Overlay>
  );
};

export default Menu;

Menu.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
};
