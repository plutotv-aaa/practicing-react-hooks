
export const useEffectExample = `
useEffect(() => {
    const handler = () => {
      document.title = window.width;
    }
    window.addEventListener('resize', handler);
  
    // ⚡️ won't compile
    return true;
  
    // ✅  compiles
    return () => {
      window.removeEventListener('resize', handler);
    }
  })
`;

export const useEffectFnDeps = `
useEffect(() => {
    
  }, [])
`;