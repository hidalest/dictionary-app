import AudioButton from '../../ui/AudioButton/AudioButton';
import './MainComponent.scss';

interface MainComponentInterface {
  fetchedWord: {
    word: string;
    phonetic: string;
    meaning: [{ partOfSpeach: string; definition: string; synonyms: string }];
    phonetics: [{ text: string; audio: string }];
    sourceUrl: string[];
  };
}

const MainComponent = (props: MainComponentInterface) => {
  const { word, phonetic, phonetics } = props.fetchedWord;
  const findAudio = phonetics.find((phonetic) => phonetic.audio !== '');
  const wordAudio = findAudio?.audio;
  return (
    <section className='main'>
      <div className='main_header-container'>
        <div>
          <h1 className='main_header-title'>{word}</h1>
          <p className='main_header-phonetic'>{phonetic}</p>
        </div>
        {wordAudio && (
          <AudioButton
            audioURL={wordAudio}
            className='main_header--pronunciation'
          />
        )}
      </div>
    </section>
  );
};

export default MainComponent;
