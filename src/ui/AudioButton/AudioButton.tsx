import { useState } from 'react';
import iconPlay from '../../assets/images/icon-play.svg';

import './AudioButton.scss';

interface AudioButtonInterface {
  audioURL: string;
}

const AudioButton = (props: AudioButtonInterface) => {
  const audio = new Audio(props.audioURL);

  const reproduceAudioHandler = () => audio.play();

  return (
    <button onClick={reproduceAudioHandler} className='audio_button'>
      {<img src={iconPlay} alt='play phonetic' />}
    </button>
  );
};

export default AudioButton;
