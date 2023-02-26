import './DefaultMessage.scss';
interface MainMessageInterface {
  initialEmoji: string;
  initialHeader: string;
  initialMessage: string;
}

const DefaultMessage = (props: MainMessageInterface) => {
  const { initialEmoji, initialHeader, initialMessage } = props;

  return (
    <section className='defaultMessage'>
      <h2 className='defaultMessage__emoji'>{initialEmoji}</h2>
      <p className='defaultMessage__header'>{initialHeader}</p>
      <p className='defaultMessage__message'>{initialMessage}</p>
    </section>
  );
};

export default DefaultMessage;
