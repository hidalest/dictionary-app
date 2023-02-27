import AudioButton from '../../ui/AudioButton/AudioButton';
import './MainComponent.scss';
import Meaning from './Meaning/Meaning';

interface MainComponentInterface {
  fetchedWord: {
    word: string;
    phonetic: string;
    meanings: [
      {
        partOfSpeech: string;
        definitions: [{ definition: string; example?: string }];
        synonyms: string[];
      }
    ];
    phonetics: [{ text: string; audio: string }];
  };
}

type MeaningsObject = {
  partOfSpeech: string;
  definitions: string[];
  synonyms: string;
};

const MainComponent = (props: MainComponentInterface) => {
  const { word, phonetic, phonetics, meanings } = props.fetchedWord;
  const findAudio = phonetics.find((phonetic) => phonetic.audio !== '');
  const wordAudio = findAudio?.audio;
  return (
    <div className='main'>
      <section className='main_header-container'>
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
      </section>

      <section>
        {meanings &&
          meanings.map((meaning, index) => (
            <Meaning
              key={`meaning--component-${index}`}
              partOfSpeech={meaning.partOfSpeech}
              definitions={meaning.definitions}
              synonyms={meaning.synonyms}
            />
          ))}
      </section>
    </div>
  );
};

export default MainComponent;
