import React from 'react';
import { Waveform } from '@uiball/loaders';

function Loader(props) {
  return (
    <Waveform lineWeight={3.5} {...props} />
  )
}

export default Loader