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
  const { partOfSpeech, definitions, synonyms } = props;
  const { meaningsHeader, synonymsHeader } =
    data.mainContent.mainContentElements.wordFound;

  const areSynonymsAvailable = synonyms && synonyms?.length > 0;
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
              <p>{definition.definition}</p>
              {definition.example && (
                <p className='meaning_body--li_example'>{`"${definition.example}"`}</p>
              )}
            </li>
          ))}
        </ul>
        {areSynonymsAvailable && (
          <div className='meaning_body--synonymContainer'>
            <p className='meaning_body--synonymHeader'>{synonymsHeader}</p>
            <div>
              {synonyms?.map((synonym) => (
                <p className='meaning_body--synonymItem'>{synonym}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};

export default Meaning;
