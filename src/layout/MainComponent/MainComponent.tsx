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
  const { word, phonetic } = props.fetchedWord;
  return (
    <section className='main'>
      <h1 className='main_header'>{word}</h1>
      <p className='main_phonetic'>{phonetic}</p>
    </section>
  );
};

export default MainComponent;
