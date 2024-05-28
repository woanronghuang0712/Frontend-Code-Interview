import {useState,useCallback,useEffect} from 'react';


const IsScrolling = ({ children, timeout = 150 }) => {
  const [isScrolling, setIsScrolling] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleScroll = useCallback(() => {
    if (!isScrolling) {
      setIsScrolling(true);
    }
    clearTimeout(timer);
    setTimer(setTimeout(() => {
      setIsScrolling(false);
    }, timeout));
  }, [isScrolling, timer, timeout]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, [handleScroll, timer]);

  return children({ isScrolling });
};


export function JediTitle(){
  return(
    <IsScrolling>
  {({ isScrolling }) => (
    <div
      className={`fixed top-0 right-0 m-6 w-max transition-transform duration-300 ease-in-out transform ${
        !isScrolling ? 'opacity-0 translate-y-[-100%]' : 'opacity-100 translate-y-0'
      } text-2xl text-opacity-30 bg-white bg-opacity-50`}
    >
      <h1>Jedi Header</h1>
    </div>
  )}
</IsScrolling>
)
}