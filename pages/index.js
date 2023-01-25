import React from 'react'
import Head from 'next/head'

import NavigationLinks2 from '../components/navigation-links2'
import CtaBtn from '../components/cta-btn'
import NavigationLinks from '../components/navigation-links'

const Smashnet = (props) => {
  return (
    <>
      <div className="smashnet-container">
        <Head>
          <title>Smashnet - Good Sport</title>
          <meta property="og:title" content="Smashnet - Good Sport" />
        </Head>
        <div data-role="Header" className="smashnet-navbar-container">
          <header data-role="Header" className="smashnet-header">
            <div className="smashnet-container01">
              <img
                alt="logo"
                src="/playground_assets/goodsport-logo-yellow-large-01-1500h.png"
                className="smashnet-image"
              />
              <div className="smashnet-nav">
                <NavigationLinks2 rootClassName="rootClassName12"></NavigationLinks2>
              </div>
            </div>
            <div className="smashnet-btn-group">
              <button className="button">Buy now</button>
            </div>
            <div data-role="BurgerMenu" className="smashnet-burger-menu">
              <svg viewBox="0 0 1024 1024" className="smashnet-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-role="MobileMenu" className="smashnet-mobile-menu">
              <nav className="smashnet-nav1">
                <div className="smashnet-container02">
                  <img
                    alt="image"
                    src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                    className="smashnet-image1"
                  />
                  <div
                    data-role="CloseMobileMenu"
                    className="smashnet-close-mobile-menu"
                  >
                    <svg viewBox="0 0 1024 1024" className="smashnet-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                <NavigationLinks2 rootClassName="rootClassName14"></NavigationLinks2>
              </nav>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="smashnet-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="smashnet-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="smashnet-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
        <div className="smashnet-section-separator"></div>
        <div className="smashnet-section-separator1"></div>
        <div className="smashnet-container03">
          <div className="smashnet-hero">
            <div className="smashnet-hero-text-container">
              <h1 className="smashnet-heading">
                MEET YOUR NEW FAVORITE BACKYARD GAME.
              </h1>
              <span className="smashnet-text">
                <span>
                  When&apos;s the last time you tried something new? SmashNet
                  provides endless hours of fun for all ages and skill levels.
                </span>
                <br className="smashnet-text02"></br>
                <br className="Section-Text"></br>
              </span>
              <div className="smashnet-cta-btn-container">
                <CtaBtn></CtaBtn>
              </div>
            </div>
            <video
              src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_24a6c984e03144b38743aa5ebfa3d93c_compressed%20%5B2%5D.mp4"
              loop
              muted
              poster="https://play.teleporthq.io/static/svg/videoposter.svg"
              autoPlay
              controls
              className="smashnet-video"
            ></video>
          </div>
        </div>
        <div className="smashnet-features">
          <div className="smashnet-heading-container">
            <h2 className="smashnet-text04 Section-Heading">Deliverables</h2>
            <span className="smashnet-text05 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="smashnet-cards-container">
            <div className="smashnet-card">
              <div className="smashnet-icon-container">
                <svg
                  viewBox="0 0 1170.2857142857142 1024"
                  className="smashnet-icon10"
                >
                  <path d="M1170.286 877.714v73.143h-1170.286v-877.714h73.143v804.571h1097.143zM1097.143 164.571v248.571c0 16-19.429 24.571-31.429 12.571l-69.143-69.143-361.714 361.714c-7.429 7.429-18.857 7.429-26.286 0l-133.143-133.143-237.714 237.714-109.714-109.714 334.286-334.286c7.429-7.429 18.857-7.429 26.286 0l133.143 133.143 265.143-265.143-69.143-69.143c-12-12-3.429-31.429 12.571-31.429h248.571c10.286 0 18.286 8 18.286 18.286z"></path>
                </svg>
              </div>
              <div className="smashnet-content-container">
                <span className="smashnet-heading1 Card-Heading">Diagrams</span>
                <span className="smashnet-text06 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="smashnet-card1">
              <div className="smashnet-icon-container1">
                <svg viewBox="0 0 1024 1024" className="smashnet-icon12">
                  <path d="M810 128q34 0 60 26t26 60v256h-214l44-172-172 44v-214h256zM726 726l-44-172h214v256q0 34-26 60t-60 26h-256v-214zM342 554l-44 172 172-44v214h-256q-34 0-60-26t-26-60v-256h214zM128 214q0-34 26-60t60-26h256v214l-172-44 44 172h-214v-256z"></path>
                </svg>
              </div>
              <div className="smashnet-content-container1">
                <span className="smashnet-heading2 Card-Heading">
                  Wireframes
                </span>
                <span className="smashnet-text07 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="smashnet-card2">
              <div className="smashnet-icon-container2">
                <svg
                  viewBox="0 0 865.7188571428571 1024"
                  className="smashnet-icon14"
                >
                  <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
                </svg>
              </div>
              <div className="smashnet-content-container2">
                <span className="smashnet-heading3 Card-Heading">Design</span>
                <span className="smashnet-text08 Card-Text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer nec odio. Praesent libero. Sed cursus ante dapibus
                  diam.c Sed nisi. Nulla quis sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="smashnet-about">
          <div className="smashnet-max-content-width-container">
            <div className="smashnet-heading-container1">
              <h1 className="Section-Heading smashnet-text09">
                Professional experience
              </h1>
            </div>
            <div className="smashnet-content-container3">
              <div className="smashnet-about-1">
                <div className="smashnet-container04">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon16">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text10 Card-Text">
                    Lorem ipsum dolor sit amet aulla quis sem at nibh elementum
                    imperdiet.
                  </span>
                </div>
                <div className="smashnet-container05">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon18">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text11 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="smashnet-container06">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon20">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text12 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
              <div className="smashnet-about-11">
                <div className="smashnet-container07">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon22">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text13 Card-Text">
                    <span>
                      Lorem ipsum dolor sit amet aulla quis sem at nibh
                      elementum
                    </span>
                    <br></br>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
                <div className="smashnet-container08">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon24">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text17 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
                <div className="smashnet-container09">
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon26">
                    <path d="M170 512q0-140 101-241t241-101 241 101 101 241-101 241-241 101-241-101-101-241z"></path>
                  </svg>
                  <span className="smashnet-text18 Card-Text">
                    Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                  </span>
                </div>
              </div>
            </div>
            <button className="smashnet-button1 Anchor button">
              CHECK MY WORK
            </button>
          </div>
        </div>
        <div className="smashnet-section-separator2"></div>
        <div className="smashnet-clients">
          <div className="smashnet-heading-container2">
            <h1 className="smashnet-text19 Section-Heading">Clients</h1>
            <span className="smashnet-text20 Section-Text">
              Here we will put your clients&apos; or partners&apos; logos
            </span>
          </div>
          <div className="smashnet-logo-container">
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="smashnet-logo"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="smashnet-logo1"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="smashnet-logo2"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="smashnet-logo3"
            />
            <img
              alt="image"
              src="/playground_assets/default-img.svg"
              className="smashnet-logo4"
            />
          </div>
        </div>
        <div className="smashnet-pricing">
          <div className="smashnet-heading-container3">
            <h1 className="smashnet-text21 Section-Heading">Ask for a quote</h1>
            <span className="smashnet-text22 Section-Text">
              Lorme ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </span>
          </div>
          <div className="smashnet-pricing-card-container">
            <div className="smashnet-card3">
              <div className="smashnet-card-heading">
                <span className="smashnet-type Anchor">Minimal</span>
                <span className="Section-Heading">Basic</span>
              </div>
              <div className="smashnet-card-content">
                <div className="smashnet-feature">
                  <span className="Card-Text">Feature one</span>
                  <span className="smashnet-limit Card-Text">TBD</span>
                </div>
                <div className="smashnet-feature1">
                  <span className="Card-Text">Feature two</span>
                  <span className="smashnet-limit1 Card-Text">TBD</span>
                </div>
                <div className="smashnet-feature2">
                  <span className="Card-Text">Feature three</span>
                  <span className="smashnet-limit2 Card-Text">UNLIMITED</span>
                </div>
                <div className="smashnet-feature3">
                  <span className="Card-Text">Feature four</span>
                  <span className="smashnet-limit3 Card-Text">UNLIMITED</span>
                </div>
                <button className="smashnet-choose button Anchor">
                  CHOOSE
                </button>
              </div>
            </div>
            <div className="smashnet-card4">
              <div className="smashnet-card-heading1">
                <span className="smashnet-type1 Anchor">medium</span>
                <span className="Section-Heading">Complex</span>
              </div>
              <div className="smashnet-card-content1">
                <div className="smashnet-container10">
                  <span className="Card-Text">Feature one</span>
                  <span className="smashnet-text24 Card-Text">TBD</span>
                </div>
                <div className="smashnet-container11">
                  <span className="Card-Text">Feature two</span>
                  <span className="smashnet-text26 Card-Text">TBD</span>
                </div>
                <div className="smashnet-container12">
                  <span className="Card-Text">Feature three</span>
                  <span className="smashnet-text28 Card-Text">UNLIMITED</span>
                </div>
                <div className="smashnet-container13">
                  <span className="Card-Text">Feature four</span>
                  <span className="smashnet-text30 Card-Text">UNLIMITED</span>
                </div>
                <button className="smashnet-button2 Anchor button">
                  CHOOSE
                </button>
              </div>
            </div>
            <div className="smashnet-card5">
              <div className="smashnet-card-heading2">
                <span className="smashnet-type2 Anchor">Premium</span>
                <span className="Section-Heading">Professional</span>
              </div>
              <div className="smashnet-card-content2">
                <div className="smashnet-container14">
                  <span className="Card-Text">Feature one</span>
                  <span className="smashnet-text32 Card-Text">TBD</span>
                </div>
                <div className="smashnet-container15">
                  <span className="Card-Text">Feature two</span>
                  <span className="smashnet-text34 Card-Text">TBD</span>
                </div>
                <div className="smashnet-container16">
                  <span className="Card-Text">Feature three</span>
                  <span className="smashnet-text36 Card-Text">UNLIMITED</span>
                </div>
                <div className="smashnet-container17">
                  <span className="Card-Text">Feature four</span>
                  <span className="smashnet-text38 Card-Text">UNLIMITED</span>
                </div>
                <button className="smashnet-button3 Anchor button">
                  CHOOSE
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="smashnet-section-separator3"></div>
        <div className="smashnet-section-separator4"></div>
        <div className="smashnet-faqs">
          <h2 className="smashnet-text39 Section-Heading">
            Check the most common questions
          </h2>
          <div className="smashnet-content-container4">
            <div className="smashnet-faq">
              <div className="smashnet-question-container">
                <span className="smashnet-question">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="smashnet-answer-container">
                <span className="smashnet-answer Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet. Here you would give the
                  answer. Lorem ipsum dolor sit amet, consectetur adipiscing
                  elit. Integer nec odio. Praesent libero. Sed cursus ante
                  dapibus diam.c Sed nisi. Nulla quis sem at nibh elementum
                  imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
            <div className="smashnet-faq1">
              <div className="smashnet-question-container1">
                <span className="smashnet-question1">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="smashnet-answer-container1">
                <span className="smashnet-answer2 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero.
                </span>
              </div>
            </div>
            <div className="smashnet-faq2">
              <div className="smashnet-question-container2">
                <span className="smashnet-question2">
                  Here you would write a frequently asked question?
                </span>
              </div>
              <div className="smashnet-answer-container2">
                <span className="smashnet-answer4 Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
                <span className="Card-Text">
                  Here you would give the answer. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Integer nec odio. Praesent
                  libero. Sed cursus ante dapibus diam.c Sed nisi. Nulla quis
                  sem at nibh elementum imperdiet.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="smashnet-section-separator5"></div>
        <div className="smashnet-reason">
          <img
            alt="image"
            src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_f2b1e8ceeaca44cfa089f2dd59e131db-1500w.webp"
            className="smashnet-image2"
          />
          <div className="smashnet-container18">
            <div className="smashnet-heading-container4">
              <h1 className="smashnet-text40 Section-Heading">
                <span className="Section-Heading smashnet-text41">
                  1. FUN FOR ALL AGES &amp; SKILL LEVELS
                </span>
                <br className="Section-Heading smashnet-text42"></br>
              </h1>
              <span className="smashnet-text43">
                It&apos;s so easy to get the hang of. Everyone from young kids,
                to teenagers, to grandparents will want in on the action.
                Whether it&apos;s a backyard BBQ, a birthday party, or quick
                trip to the beach, SmashNet gets everyone off friends off their
                phones and creating fun new memories together.
              </span>
            </div>
          </div>
        </div>
        <div className="smashnet-reason1">
          <img
            alt="image"
            src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_f2b1e8ceeaca44cfa089f2dd59e131db-1500w.webp"
            className="smashnet-image3"
          />
          <div className="smashnet-container19">
            <div className="smashnet-heading-container5">
              <h1 className="smashnet-text44 Section-Heading">
                <span className="Section-Heading smashnet-text45">
                  2. FUN FOR ALL AGES &amp; SKILL LEVELS
                </span>
                <br className="Section-Heading smashnet-text46"></br>
              </h1>
              <span className="smashnet-text47">
                It&apos;s so easy to get the hang of. Everyone from young kids,
                to teenagers, to grandparents will want in on the action.
                Whether it&apos;s a backyard BBQ, a birthday party, or quick
                trip to the beach, SmashNet gets everyone off friends off their
                phones and creating fun new memories together.
              </span>
            </div>
          </div>
        </div>
        <div className="smashnet-reason2">
          <img
            alt="image"
            src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_f2b1e8ceeaca44cfa089f2dd59e131db-1500w.webp"
            className="smashnet-image4"
          />
          <div className="smashnet-container20">
            <div className="smashnet-heading-container6">
              <h1 className="smashnet-text48 Section-Heading">
                <span className="Section-Heading smashnet-text49">
                  2. TAKE IT WITH YOU ANYWHERE
                </span>
                <br className="Section-Heading smashnet-text50"></br>
              </h1>
              <span className="smashnet-text51">
                <span>
                  No more heavy, cheap or bulky games that take up way too much
                  space in your garage or car. SmashNet is durable, lightweight
                  and comes with a free convenient carry bag. It&apos;s also
                  completely weather resistant so you can play rain or shine.
                  Perfect for on the go and can be set up in less than 3
                  minutes.
                </span>
                <br className="smashnet-text53"></br>
              </span>
            </div>
          </div>
        </div>
        <div className="smashnet-reason3">
          <img
            alt="image"
            src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_f2b1e8ceeaca44cfa089f2dd59e131db-1500w.webp"
            className="smashnet-image5"
          />
          <div className="smashnet-container21">
            <div className="smashnet-heading-container7">
              <h1 className="smashnet-text54 Section-Heading">
                <span className="Section-Heading smashnet-text55">
                  1. FUN FOR ALL AGES &amp; SKILL LEVELS
                </span>
                <br className="Section-Heading smashnet-text56"></br>
              </h1>
              <span className="smashnet-text57">
                It&apos;s so easy to get the hang of. Everyone from young kids,
                to teenagers, to grandparents will want in on the action.
                Whether it&apos;s a backyard BBQ, a birthday party, or quick
                trip to the beach, SmashNet gets everyone off friends off their
                phones and creating fun new memories together.
              </span>
            </div>
          </div>
        </div>
        <div className="smashnet-reason4">
          <img
            alt="image"
            src="/playground_assets/assets_1272919049fa4cc3a24247fc656ee810_f2b1e8ceeaca44cfa089f2dd59e131db-1500w.webp"
            className="smashnet-image6"
          />
          <div className="smashnet-container22">
            <div className="smashnet-heading-container8">
              <h1 className="smashnet-text58 Section-Heading">
                <span className="Section-Heading smashnet-text59">
                  1. FUN FOR ALL AGES &amp; SKILL LEVELS
                </span>
                <br className="Section-Heading smashnet-text60"></br>
              </h1>
              <span className="smashnet-text61">
                It&apos;s so easy to get the hang of. Everyone from young kids,
                to teenagers, to grandparents will want in on the action.
                Whether it&apos;s a backyard BBQ, a birthday party, or quick
                trip to the beach, SmashNet gets everyone off friends off their
                phones and creating fun new memories together.
              </span>
            </div>
          </div>
        </div>
        <div className="smashnet-section-separator6"></div>
        <div className="smashnet-footer-container">
          <div className="smashnet-footer">
            <div className="smashnet-social-links">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="smashnet-icon28"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="smashnet-icon30"
              >
                <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="smashnet-icon32"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </div>
            <div className="smashnet-copyright-container">
              <svg viewBox="0 0 1024 1024" className="smashnet-icon34">
                <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
              </svg>
              <span className="Anchor">Copyright, 2021</span>
            </div>
          </div>
        </div>
        <header data-role="Header" className="smashnet-header1">
          <div className="smashnet-container23">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="smashnet-image7"
            />
            <div className="smashnet-nav2">
              <NavigationLinks rootClassName="rootClassName12"></NavigationLinks>
            </div>
          </div>
          <div className="smashnet-btn-group1">
            <button className="button">Buy now</button>
          </div>
          <div data-role="BurgerMenu" className="smashnet-burger-menu1">
            <svg viewBox="0 0 1024 1024" className="smashnet-icon36">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="smashnet-mobile-menu1">
            <nav className="smashnet-nav3">
              <div className="smashnet-container24">
                <img
                  alt="image"
                  src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
                  className="smashnet-image8"
                />
                <div
                  data-role="CloseMobileMenu"
                  className="smashnet-close-mobile-menu1"
                >
                  <svg viewBox="0 0 1024 1024" className="smashnet-icon38">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName14"></NavigationLinks>
            </nav>
            <div>
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="smashnet-icon40"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="smashnet-icon42"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="smashnet-icon44"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </header>
      </div>
      <style jsx>
        {`
          .smashnet-container {
            width: 100%;
            height: auto;
            display: flex;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
          }
          .smashnet-navbar-container {
            width: 100%;
            display: flex;
            z-index: 100;
            position: fixed;
            box-shadow: 5px 5px 10px 0px #d4d4d4;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
            background-color: #003a70;
          }
          .smashnet-header {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-self: center;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
            background-color: #003a70;
          }
          .smashnet-container01 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .smashnet-image {
            height: 2rem;
          }
          .smashnet-nav {
            display: flex;
            align-items: center;
            padding-left: 32px;
            flex-direction: row;
          }
          .smashnet-btn-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .smashnet-burger-menu {
            display: none;
          }
          .smashnet-icon {
            width: 16px;
            height: 16px;
            display: none;
          }
          .smashnet-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .smashnet-nav1 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .smashnet-container02 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .smashnet-image1 {
            height: 2rem;
          }
          .smashnet-close-mobile-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .smashnet-icon02 {
            width: 16px;
            height: 16px;
          }
          .smashnet-icon04 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .smashnet-icon06 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .smashnet-icon08 {
            width: 16px;
            height: 16px;
          }
          .smashnet-section-separator {
            width: 100%;
            height: 1px;
            display: flex;
            margin-top: var(--dl-space-space-tenunits);
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-section-separator1 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-container03 {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #f1f1f1;
          }
          .smashnet-hero {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: space-between;
            background-color: #f1f1f1;
          }
          .smashnet-hero-text-container {
            width: 45%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .smashnet-heading {
            color: rgb(4, 4, 4);
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-text {
            color: var(--dl-color-gray-black);
            margin-bottom: var(--dl-space-space-fiveunits);
          }
          .smashnet-text02 {
            color: var(--dl-color-gray-black);
          }
          .smashnet-cta-btn-container {
            border: 2px dashed rgba(120, 120, 120, 0.4);
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-video {
            width: 570px;
            height: 494px;
            border-color: var(--dl-color-gray-black);
            border-width: 1px;
          }
          .smashnet-features {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .smashnet-heading-container {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text04 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-text05 {
            text-align: center;
          }
          .smashnet-cards-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .smashnet-card {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .smashnet-icon-container {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .smashnet-icon10 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .smashnet-content-container {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .smashnet-heading1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-text06 {
            text-align: center;
          }
          .smashnet-card1 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .smashnet-icon-container1 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .smashnet-icon12 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .smashnet-content-container1 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .smashnet-heading2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-text07 {
            text-align: center;
          }
          .smashnet-card2 {
            width: 30%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-doubleunit);
            margin-bottom: var(--dl-space-space-fourunits);
            padding-right: var(--dl-space-space-doubleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-doubleunit);
          }
          .smashnet-icon-container2 {
            display: flex;
            padding: var(--dl-space-space-unit);
            align-items: center;
            border-radius: var(--dl-radius-radius-round);
            margin-bottom: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .smashnet-icon14 {
            fill: var(--dl-color-gray-900);
            width: 100px;
            height: 100px;
            min-width: 100px;
            min-height: 100px;
          }
          .smashnet-content-container2 {
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .smashnet-heading3 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-text08 {
            text-align: center;
          }
          .smashnet-about {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fourunits);
            justify-content: center;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-max-content-width-container {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .smashnet-heading-container1 {
            width: 45%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-content-container3 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-about-1 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-container04 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon16 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text10 {
            text-align: left;
          }
          .smashnet-container05 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon18 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text11 {
            text-align: left;
          }
          .smashnet-container06 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon20 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text12 {
            text-align: left;
          }
          .smashnet-about-11 {
            width: 30%;
            display: flex;
            padding: var(--dl-space-space-fourunits);
            align-self: stretch;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            justify-content: space-between;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-container07 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon22 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text13 {
            text-align: left;
          }
          .smashnet-container08 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon24 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text17 {
            text-align: left;
          }
          .smashnet-container09 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-doubleunit);
            flex-direction: row;
            justify-content: center;
          }
          .smashnet-icon26 {
            width: 24px;
            height: 24px;
            min-width: 24px;
            min-height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-text18 {
            text-align: left;
          }
          .smashnet-button1 {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .smashnet-section-separator2 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-clients {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .smashnet-heading-container2 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .smashnet-text19 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-text20 {
            text-align: center;
          }
          .smashnet-logo-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .smashnet-logo {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-logo1 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-logo2 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-logo3 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-logo4 {
            width: 150px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-pricing {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
          }
          .smashnet-heading-container3 {
            width: 45%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
          }
          .smashnet-text21 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-text22 {
            text-align: center;
          }
          .smashnet-pricing-card-container {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            flex-direction: row;
            justify-content: space-between;
          }
          .smashnet-card3 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .smashnet-card-heading {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-type {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-card-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-feature {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-limit {
            color: var(--dl-color-gray-700);
          }
          .smashnet-feature1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-limit1 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-feature2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-limit2 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-feature3 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .smashnet-limit3 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-choose {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .smashnet-card4 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .smashnet-card-heading1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-type1 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-card-content1 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-container10 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text24 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container11 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text26 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container12 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text28 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container13 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .smashnet-text30 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-button2 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .smashnet-card5 {
            width: 30%;
            display: flex;
            min-width: 350px;
            align-items: center;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
          }
          .smashnet-card-heading2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-type2 {
            margin-bottom: var(--dl-space-space-tripleunit);
          }
          .smashnet-card-content2 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-container14 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text32 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container15 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text34 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container16 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .smashnet-text36 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-container17 {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-doubleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-doubleunit);
            justify-content: space-between;
          }
          .smashnet-text38 {
            color: var(--dl-color-gray-700);
          }
          .smashnet-button3 {
            color: var(--dl-color-gray-white);
            margin-top: var(--dl-space-space-fourunits);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-black);
          }
          .smashnet-section-separator3 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-section-separator4 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-faqs {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            margin-top: var(--dl-space-space-fiveunits);
            align-items: center;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tripleunit);
            margin-bottom: var(--dl-space-space-fiveunits);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: flex-start;
          }
          .smashnet-text39 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-content-container4 {
            width: 100%;
            display: flex;
            align-self: stretch;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .smashnet-faq {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .smashnet-question-container {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-question {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .smashnet-answer-container {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-answer {
            margin-bottom: var(--dl-space-space-unit);
          }
          .smashnet-faq1 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .smashnet-question-container1 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-question1 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .smashnet-answer-container1 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-answer2 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .smashnet-faq2 {
            width: 85%;
            display: flex;
            align-items: flex-start;
            border-color: var(--dl-color-gray-900);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-radius8);
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .smashnet-question-container2 {
            width: 100%;
            align-self: center;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            padding-top: var(--dl-space-space-doubleunit);
            padding-left: var(--dl-space-space-fourunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-fourunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: var(--dl-color-gray-900);
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-question2 {
            font-size: 18px;
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
          }
          .smashnet-answer-container2 {
            display: flex;
            padding: var(--dl-space-space-fourunits);
            font-style: normal;
            font-family: Open Sans;
            font-weight: 700;
            border-radius: var(--dl-radius-radius-radius8);
            flex-direction: column;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
          .smashnet-answer4 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .smashnet-section-separator5 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-reason {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-image2 {
            width: 50%;
            object-fit: cover;
          }
          .smashnet-container18 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-heading-container4 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text40 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-reason1 {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-image3 {
            width: 50%;
            object-fit: cover;
          }
          .smashnet-container19 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-heading-container5 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text44 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-reason2 {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-image4 {
            width: 50%;
            object-fit: cover;
          }
          .smashnet-container20 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-heading-container6 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text48 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-reason3 {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-image5 {
            width: 50%;
            object-fit: cover;
          }
          .smashnet-container21 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-heading-container7 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text54 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-reason4 {
            width: 90%;
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: flex-start;
          }
          .smashnet-image6 {
            width: 50%;
            object-fit: cover;
          }
          .smashnet-container22 {
            width: 50%;
            display: flex;
            align-self: stretch;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fiveunits);
            padding-left: var(--dl-space-space-tenunits);
            padding-right: var(--dl-space-space-tenunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-fiveunits);
            justify-content: center;
          }
          .smashnet-heading-container8 {
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .smashnet-text58 {
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .smashnet-section-separator6 {
            width: 100%;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: var(--dl-color-gray-900);
          }
          .smashnet-footer-container {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-gray-white);
          }
          .smashnet-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxcontent);
            align-items: center;
            padding-top: var(--dl-space-space-tripleunit);
            padding-left: var(--dl-space-space-tripleunit);
            padding-right: var(--dl-space-space-tripleunit);
            flex-direction: row;
            padding-bottom: var(--dl-space-space-tripleunit);
            justify-content: space-between;
          }
          .smashnet-social-links {
            display: flex;
            align-items: flex-start;
            flex-direction: row;
          }
          .smashnet-icon28 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-icon30 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-icon32 {
            width: 24px;
            height: 24px;
          }
          .smashnet-copyright-container {
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .smashnet-icon34 {
            width: 24px;
            height: 24px;
            margin-right: var(--dl-space-space-doubleunit);
          }
          .smashnet-header1 {
            width: 100%;
            display: flex;
            max-width: 1400px;
            align-items: center;
            padding-top: 32px;
            padding-left: 48px;
            padding-right: 48px;
            padding-bottom: 32px;
            justify-content: space-between;
          }
          .smashnet-container23 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .smashnet-image7 {
            height: 2rem;
          }
          .smashnet-nav2 {
            display: flex;
            align-items: center;
            padding-left: 32px;
            flex-direction: row;
          }
          .smashnet-btn-group1 {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .smashnet-burger-menu1 {
            display: none;
          }
          .smashnet-icon36 {
            width: 16px;
            height: 16px;
            display: none;
          }
          .smashnet-mobile-menu1 {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: 32px;
            z-index: 100;
            position: absolute;
            flex-direction: column;
            justify-content: space-between;
            background-color: #fff;
          }
          .smashnet-nav3 {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .smashnet-container24 {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 48px;
            justify-content: space-between;
          }
          .smashnet-image8 {
            height: 2rem;
          }
          .smashnet-close-mobile-menu1 {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .smashnet-icon38 {
            width: 16px;
            height: 16px;
          }
          .smashnet-icon40 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .smashnet-icon42 {
            width: 16px;
            height: 16px;
            margin-right: 32px;
          }
          .smashnet-icon44 {
            width: 16px;
            height: 16px;
          }
          @media (max-width: 1600px) {
            .smashnet-navbar-container {
              background-color: #003a70;
            }
            .smashnet-header {
              max-width: var(--dl-size-size-maxcontent);
              align-self: center;
            }
          }
          @media (max-width: 991px) {
            .smashnet-icon {
              display: flex;
            }
            .smashnet-hero {
              align-items: center;
              flex-direction: column;
              justify-content: center;
            }
            .smashnet-hero-text-container {
              width: 80%;
              align-items: center;
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .smashnet-heading {
              text-align: center;
            }
            .smashnet-text {
              text-align: center;
            }
            .smashnet-text04 {
              text-align: center;
            }
            .smashnet-pricing-card-container {
              justify-content: center;
            }
            .smashnet-card3 {
              margin-right: var(--dl-space-space-fourunits);
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .smashnet-card4 {
              margin-bottom: var(--dl-space-space-fourunits);
            }
            .smashnet-icon36 {
              display: flex;
            }
          }
          @media (max-width: 767px) {
            .smashnet-header {
              padding-left: 32px;
              padding-right: 32px;
            }
            .smashnet-nav {
              display: none;
            }
            .smashnet-btn-group {
              display: none;
            }
            .smashnet-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .smashnet-heading-container {
              width: 100%;
            }
            .smashnet-cards-container {
              align-items: center;
              flex-direction: column;
            }
            .smashnet-card {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .smashnet-card1 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .smashnet-card2 {
              width: 70%;
              margin-bottom: var(--dl-space-space-tripleunit);
            }
            .smashnet-heading-container1 {
              width: 100%;
            }
            .smashnet-text09 {
              text-align: center;
            }
            .smashnet-content-container3 {
              flex-wrap: wrap;
              align-items: flex-start;
              justify-content: center;
            }
            .smashnet-about-1 {
              width: 65%;
            }
            .smashnet-about-11 {
              width: 65%;
            }
            .smashnet-heading-container2 {
              width: 100%;
            }
            .smashnet-heading-container3 {
              width: 100%;
            }
            .smashnet-card3 {
              margin-right: 0px;
            }
            .smashnet-content-container4 {
              width: 100%;
              flex-direction: column;
            }
            .smashnet-faq {
              width: 100%;
            }
            .smashnet-faq1 {
              width: 100%;
            }
            .smashnet-faq2 {
              width: 100%;
            }
            .smashnet-reason {
              flex-direction: column;
            }
            .smashnet-image2 {
              width: 70%;
            }
            .smashnet-container18 {
              width: 100%;
              align-items: center;
            }
            .smashnet-heading-container4 {
              width: 100%;
            }
            .smashnet-text40 {
              text-align: center;
            }
            .smashnet-text41 {
              text-align: center;
            }
            .smashnet-text42 {
              text-align: center;
            }
            .smashnet-text43 {
              text-align: center;
            }
            .smashnet-reason1 {
              flex-direction: column;
            }
            .smashnet-image3 {
              width: 70%;
            }
            .smashnet-container19 {
              width: 100%;
              align-items: center;
            }
            .smashnet-heading-container5 {
              width: 100%;
            }
            .smashnet-text44 {
              text-align: center;
            }
            .smashnet-text45 {
              text-align: center;
            }
            .smashnet-text46 {
              text-align: center;
            }
            .smashnet-text47 {
              text-align: center;
            }
            .smashnet-reason2 {
              flex-direction: column;
            }
            .smashnet-image4 {
              width: 70%;
            }
            .smashnet-container20 {
              width: 100%;
              align-items: center;
            }
            .smashnet-heading-container6 {
              width: 100%;
            }
            .smashnet-text48 {
              text-align: center;
            }
            .smashnet-text49 {
              text-align: center;
            }
            .smashnet-text50 {
              text-align: center;
            }
            .smashnet-text51 {
              text-align: center;
            }
            .smashnet-text53 {
              text-align: center;
            }
            .smashnet-reason3 {
              flex-direction: column;
            }
            .smashnet-image5 {
              width: 70%;
            }
            .smashnet-container21 {
              width: 100%;
              align-items: center;
            }
            .smashnet-heading-container7 {
              width: 100%;
            }
            .smashnet-text54 {
              text-align: center;
            }
            .smashnet-text55 {
              text-align: center;
            }
            .smashnet-text56 {
              text-align: center;
            }
            .smashnet-text57 {
              text-align: center;
            }
            .smashnet-reason4 {
              flex-direction: column;
            }
            .smashnet-image6 {
              width: 70%;
            }
            .smashnet-container22 {
              width: 100%;
              align-items: center;
            }
            .smashnet-heading-container8 {
              width: 100%;
            }
            .smashnet-text58 {
              text-align: center;
            }
            .smashnet-text59 {
              text-align: center;
            }
            .smashnet-text60 {
              text-align: center;
            }
            .smashnet-text61 {
              text-align: center;
            }
            .smashnet-header1 {
              padding-left: 32px;
              padding-right: 32px;
            }
            .smashnet-nav2 {
              display: none;
            }
            .smashnet-btn-group1 {
              display: none;
            }
            .smashnet-burger-menu1 {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .smashnet-header {
              padding: var(--dl-space-space-unit);
            }
            .smashnet-mobile-menu {
              padding: 16px;
            }
            .smashnet-hero-text-container {
              width: 100%;
            }
            .smashnet-video {
              width: 478px;
              height: 371px;
            }
            .smashnet-card {
              width: 100%;
            }
            .smashnet-card1 {
              width: 100%;
            }
            .smashnet-card2 {
              width: 100%;
            }
            .smashnet-about-1 {
              width: 100%;
            }
            .smashnet-about-11 {
              width: 100%;
            }
            .smashnet-text19 {
              text-align: center;
            }
            .smashnet-text21 {
              text-align: center;
            }
            .smashnet-content-container4 {
              padding-left: 0px;
            }
            .smashnet-reason {
              width: 100%;
            }
            .smashnet-image2 {
              width: 100%;
            }
            .smashnet-container18 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .smashnet-reason1 {
              width: 100%;
            }
            .smashnet-image3 {
              width: 100%;
            }
            .smashnet-container19 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .smashnet-reason2 {
              width: 100%;
            }
            .smashnet-image4 {
              width: 100%;
            }
            .smashnet-container20 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .smashnet-reason3 {
              width: 100%;
            }
            .smashnet-image5 {
              width: 100%;
            }
            .smashnet-container21 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .smashnet-reason4 {
              width: 100%;
            }
            .smashnet-image6 {
              width: 100%;
            }
            .smashnet-container22 {
              padding-left: var(--dl-space-space-tripleunit);
              padding-right: var(--dl-space-space-tripleunit);
            }
            .smashnet-header1 {
              padding: var(--dl-space-space-unit);
            }
            .smashnet-mobile-menu1 {
              padding: 16px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Smashnet
