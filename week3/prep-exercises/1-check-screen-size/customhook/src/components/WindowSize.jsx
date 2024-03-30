
import useScreenSize from '../hooks/useWindowSize';

function WindowSize() {
  const screenSize = useScreenSize();

  return (
    <div>
       <h1>Current Screen Size: {screenSize.size}</h1>
      <p>Width: {screenSize.width}px</p>
      <p>Height: {screenSize.height}px</p>
    </div>
  );
}

export default WindowSize;