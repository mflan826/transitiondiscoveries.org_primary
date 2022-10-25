import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './indicatorslist.css';
import { getIndicatorImage } from '../helper';

const font = {
  'font-size': '1.75rem',
};

function IndicatorList(props) {
  return (
    <div className="row mb-70">
      {props.indicators.map((indicator) => {
        return (
          <div className="col-xs-12 col-sm-6 col-md-4 my-3" key={indicator.id}>
            <NavLink
              to={{
                pathname: '/our-framework/' + indicator.slug,
              }}
            >
              <div className="card">
                <div className="card-body text-center">
                  <div className="indicator-list-icons">
                    <img
                      className="img-fluid "
                      src={getIndicatorImage(indicator.iconImageName)}
                      alt=""
                    />
                  </div>
                  <div style={font} className="card-title">
                    {indicator.title}
                  </div>
                </div>
              </div>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
}

IndicatorList.propTypes = {
  indicators: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

IndicatorList.defaultProps = {
  indicators: [],
};

export default IndicatorList;
