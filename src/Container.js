import Top from './Top';
import Content from './Content';
import Bottom from './Bottom';

export default function Container() {
  return (
    <div className="container">
      <Top />
      <Content />
      <Bottom />
    </div>
  );
}
