import { useEffect, useRef } from 'react';

function usePrev(value: any) {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    },[value]);
    
    return ref.current;
  }

  export default usePrev;