import React from 'react';

export const Template = ({ template }) => {
    return <option value={ template.color }>{ template.color }</option>
};