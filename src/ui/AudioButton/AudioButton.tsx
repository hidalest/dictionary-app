import { useState } from 'react';
import iconPlay from '../../assets/images/icon-play.svg';

import './AudioButton.scss';

interface AudioButtonInterface {
  audioURL: string;
  className?: string;
}

const AudioButton = (props: AudioButtonInterface) => {
  const { audioURL, className } = props;
  const audio = new Audio(audioURL);

  const reproduceAudioHandler = () => audio.play();

  return (
    <button
      onClick={reproduceAudioHandler}
      className={`audio_button ${className}`}
    >
      {<img src={iconPlay} alt='play phonetic' />}
    </button>
  );
};

export default AudioButton;
