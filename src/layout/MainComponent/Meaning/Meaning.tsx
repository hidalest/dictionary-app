import './Meaning.scss';
import data from '../../../data.json';

interface MeaningInterface {
  partOfSpeech: string;
  definitions: [
    {
      definition: string;
      example?: string;
    }
  ];
  synonyms?: string[];
}

const Meaning = (props: MeaningInterface) => {
  const { partOfSpeech, definitions } = props;
  const { meaningsHeader, synonymsHeader } =
    data.mainContent.mainContentElements.wordFound;
  return (
    <article className='meaning'>
      <div className='meaning_header'>
        <p className='meaning_header--partOfSpeech'>{partOfSpeech}</p>
        <hr className='meaning_header--division' />
      </div>

      <div className='meaning_body'>
        <h2 className='meaning_body--meaningHeader'>{meaningsHeader}</h2>
        <ul className='meaning_body--ul'>
          {definitions.map((definition, index) => (
            <li className='meaning_body--li' key={`meaning--element-${index}`}>
              {definition.definition}
            </li>
          ))}
        </ul>
        {/* <p className='meaning_body--example'>{definition.example}</p> */}
      </div>
    </article>
  );
};

export default Meaning;
