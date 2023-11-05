import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './shell.css';
import { useState } from 'react';

const Shell = (props) => {
    const { children  } = props;

    return (
        <div className='shell'>
            <div className="shell-content">
                {children}
            </div>
        </div>
    );
};

Shell.propTypes = {
    children: PropTypes.node.isRequired,
    setNewUser: PropTypes.func.isRequired,
    setUser: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
    return state;
};

export default connect(
  mapStateToProps,
)(Shell);