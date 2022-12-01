import React from 'react';
import Counter from './components/page/counter';
import ExportSample from './study/01.moduleExport'  // 폴더 내에 index라는 파일명으로 만들경우 파일명을 생략할 수 있습니다.
import ConditionalRender from './study/02.conditionalRender';
import LifeCycle from './study/03.lifeCycle';

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      
      {/* js module export import */}
      {/* <ExportSample /> */}
      
      {/* optional Render */}
      {/* <ConditionalRender /> */}

      {/* 라이프 사이클 기본 */}
      {/* <LifeCycle solution='A'/> */}
    </div>
  );
};

export default App;