import React from "react";
import styled from "styled-components";

const FooterBox = styled.footer`
  background-color: hsl(210, 8%, 15%);
`;

const Wrap = styled.div`
  max-width: 1264px;
  display: flex;
  margin: 0 auto;
  flex-flow: row wrap;
  width: 100%;
  padding: 32px 12px 12px 12px;
`;

const FooterLogo = styled.div`
  flex: 0 0 64px;
  margin: -12px 0 32px 0;
`;

export default function Header() {
  return (
    <FooterBox>
      <Wrap>
        <FooterLogo>
          <a href="https://stackoverflow.com" aria-label="Stack Overflow">
            <svg
              aria-hidden="true"
              class="native svg-icon iconLogoGlyphMd"
              width="32"
              height="37"
              viewBox="0 0 32 37"
            >
              <path d="M26 33v-9h4v13H0V24h4v9h22Z" fill="#BCBBBB"></path>
              <path
                d="m21.5 0-2.7 2 9.9 13.3 2.7-2L21.5 0ZM26 18.4 13.3 7.8l2.1-2.5 12.7 10.6-2.1 2.5ZM9.1 15.2l15 7 1.4-3-15-7-1.4 3Zm14 10.79.68-2.95-16.1-3.35L7 23l16.1 2.99ZM23 30H7v-3h16v3Z"
                fill="#F48024"
              ></path>
            </svg>
          </a>
        </FooterLogo>
        <nav class="site-footer--nav">
          <div class="site-footer--col">
            <h5 class="-title">
              <a
                href="https://stackoverflow.com"
                class="js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 15})"
              >
                Stack Overflow
              </a>
            </h5>
            <ul class="-list js-primary-footer-links">
              <li>
                <a
                  href="/questions"
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 16})"
                >
                  Questions
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 3 })"
                >
                  Help
                </a>
              </li>
            </ul>
          </div>
          <div class="site-footer--col">
            <h5 class="-title">
              <a
                href="https://stackoverflow.co/"
                class="js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 19 })"
              >
                Products
              </a>
            </h5>
            <ul class="-list">
              <li>
                <a
                  href="https://stackoverflow.co/teams"
                  class="js-gps-track -link"
                  data-ga='["teams traffic","footer - site nav","stackoverflow.com/teams",null,{"dimension4":"teams"}]'
                  data-gps-track="footer.click({ location: 3, link: 29 })"
                >
                  Teams
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/advertising"
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 21 })"
                >
                  Advertising
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/collectives"
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 40 })"
                >
                  Collectives
                </a>
              </li>
              <li>
                <a
                  href="https://stackoverflow.co/talent"
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 20 })"
                >
                  Talent
                </a>
              </li>
            </ul>
          </div>
          <div class="site-footer--col">
            <h5 class="-title">
              <a
                class="js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 1 })"
                href="https://stackoverflow.co/"
              >
                Company
              </a>
            </h5>
            <ul class="-list">
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 1 })"
                  href="https://stackoverflow.co/"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 27 })"
                  href="https://stackoverflow.co/company/press"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 9 })"
                  href="https://stackoverflow.co/company/work-here"
                >
                  Work Here
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 7 })"
                  href="https://stackoverflow.com/legal"
                >
                  Legal
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 8 })"
                  href="https://stackoverflow.com/legal/privacy-policy"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 37 })"
                  href="https://stackoverflow.com/legal/terms-of-service"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 13 })"
                  href="https://stackoverflow.co/company/contact"
                >
                  Contact Us
                </a>
              </li>
              <li class="" id="consent-footer-link">
                <a
                  class="js-gps-track -link js-cookie-settings"
                  data-gps-track="footer.click({ location: 3, link: 38 })"
                  href="#"
                  data-consent-popup-loader="footer"
                >
                  Cookie Settings
                </a>
              </li>
              <li>
                <a
                  class="js-gps-track -link"
                  data-gps-track="footer.click({ location: 3, link: 39 })"
                  href="https://stackoverflow.com/legal/cookie-policy"
                >
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>
          <div class="site-footer--col site-footer--categories-nav">
            <div>
              <h5 class="-title">
                <a
                  href="https://stackexchange.com"
                  data-gps-track="footer.click({ location: 3, link: 30 })"
                >
                  Stack Exchange Network
                </a>
              </h5>
              <ul class="-list">
                <li>
                  <a
                    href="https://stackexchange.com/sites#technology"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Technology
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#culturerecreation"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Culture &amp; recreation
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#lifearts"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Life &amp; arts
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#science"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Science
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#professional"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Professional
                  </a>
                </li>
                <li>
                  <a
                    href="https://stackexchange.com/sites#business"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Business
                  </a>
                </li>

                <li class="mt16 md:mt0">
                  <a
                    href="https://api.stackexchange.com/"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    API
                  </a>
                </li>

                <li>
                  <a
                    href="https://data.stackexchange.com/"
                    class="-link js-gps-track"
                    data-gps-track="footer.click({ location: 3, link: 24 })"
                  >
                    Data
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="site-footer--copyright fs-fine md:mt24">
          <ul class="-list -social md:mb8">
            <li>
              <a
                class="js-gps-track -link"
                data-gps-track="footer.click({ location: 3, link:4 })"
                href="https://stackoverflow.blog?blb=1"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/officialstackoverflow/"
                class="-link js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 31 })"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/stackoverflow"
                class="-link js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 32 })"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/company/stack-overflow"
                class="-link js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 33 })"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thestackoverflow"
                class="-link js-gps-track"
                data-gps-track="footer.click({ location: 3, link: 36 })"
              >
                Instagram
              </a>
            </li>
          </ul>

          <p class="md:mb0">
            Site design / logo © 2022 Stack Exchange Inc; user contributions
            licensed under{" "}
            <span class="td-underline">
              <a href="https://stackoverflow.com/help/licensing">CC BY-SA</a>
            </span>
            . <span id="svnrev">rev&nbsp;2022.12.21.43127</span>
          </p>
        </div>
      </Wrap>
    </FooterBox>
  );
}
