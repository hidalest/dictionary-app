import './MainMessage.scss';
interface MainMessageInterface {
  initialEmoji: string;
  initialHeader: string;
  initialMessage: string;
}

const MainMessage = (props: MainMessageInterface) => {
  const { initialEmoji, initialHeader, initialMessage } = props;

  return (
    <section className='mainMessage'>
      <h2>{initialEmoji}</h2>
      <p>{initialHeader}</p>
      <p>{initialMessage}</p>
    </section>
  );
};

export default MainMessage;
