import React from 'react'

import PropTypes from 'prop-types'

const CtaBtn = (props) => {
  return (
    <>
      <div className="cta-btn-container">
        <button className="cta-btn-cta-btn Anchor button">
          <span className="cta-btn-text">{props.text}</span>
        </button>
      </div>
      <style jsx>
        {`
          .cta-btn-container {
            display: flex;
            position: relative;
          }
          .cta-btn-cta-btn {
            color: var(--dl-color-gray-white);
            text-align: center;
            padding-top: var(--dl-space-space-doubleunit);
            margin-right: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-tenunits);
            border-radius: var(--dl-radius-radius-radius8);
            padding-right: var(--dl-space-space-tenunits);
            padding-bottom: var(--dl-space-space-doubleunit);
            background-color: #f6dd06;
          }
          .cta-btn-text {
            color: rgb(16, 16, 16);
          }
          @media (max-width: 767px) {
            .cta-btn-cta-btn {
              padding-left: var(--dl-space-space-fourunits);
              padding-right: var(--dl-space-space-fourunits);
            }
          }
        `}
      </style>
    </>
  )
}

CtaBtn.defaultProps = {
  text: 'GET SMASHNET',
}

CtaBtn.propTypes = {
  text: PropTypes.string,
}

export default CtaBtn
