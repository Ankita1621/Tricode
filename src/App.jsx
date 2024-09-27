import React, { useCallback, useState , useEffect} from 'react'
import Navbar from './components/Navbar'
import CodeMirror from "@uiw/react-codemirror";
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';
import Result from './components/Result';

function App() {
  //* create three usestate 
  const [html_edit, setHtml_Edit] = useState('');
  const [css_edit, setCss_Edit] = useState('');
  const [js_edit, setJs_Edit] = useState('');
  
  //* Load saved code from localStorage when the component mounts
    useEffect(() => {
      const savedHtml = localStorage.getItem('html_edit');
      const savedCss = localStorage.getItem('css_edit');
      const savedJs = localStorage.getItem('js_edit');
  
      if (savedHtml) setHtml_Edit(savedHtml);
      if (savedCss) setCss_Edit(savedCss);
      if (savedJs) setJs_Edit(savedJs);
    }, []);
  
  //* Html onchange handler
  const onChangeHtml = useCallback((value) => {
    console.log(value);
    setHtml_Edit(value);
  }, [])

  //* Css onchange handler 
  const onChangeCss = useCallback((value) => {
    console.log(value);
    setCss_Edit(value)
  }, []);

  //* JavaScript onchange handler 
  const onChangeJavaScript = useCallback((value) => {
    console.log(value);
    setJs_Edit(value)
  }, []);


  //* Save code to localStorage
  const handleSaveCode = () => {
    localStorage.setItem('html_edit', html_edit);
    localStorage.setItem('css_edit', css_edit);
    localStorage.setItem('js_edit', js_edit);
    alert("Code saved successfully!");
  };

  //* Create Html Document
  const srcCode = `
  <html>
  <body>${html_edit}</body>
  <style>${css_edit}</style>
  <script>${js_edit}</script>
  </html>
  `


  return (
    <div>
      {/* Navbar  */}
      <Navbar saveCode={handleSaveCode} />
    
      {/* main content  */}
      <div className=" p-2">
        {/* Editor  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-2">
          {/* Html Editor */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">HTML</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={html_edit}
              height="342px"
              theme="dark"
              extensions={[html(true)]}
              onChange={onChangeHtml}
            />
          </div>

          {/* Css Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">CSS</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={css_edit}
              height="342px"
              theme="dark"
              extensions={[css(true)]}
              onChange={onChangeCss}
            />
          </div>

          {/* JavaScript Editor  */}
          <div className="bg-[#282c34] p-4 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-2 text-white">JavaScript</h2>
            <CodeMirror
              className="text-xl border-gray-700 border"
              value={js_edit}
              height="342px"
              theme="dark"
              extensions={[javascript(true)]}
              onChange={onChangeJavaScript}
            />
          </div>
        </div>

        <Result
        srcCode={srcCode}
        />
      </div>
    </div>
  )
}

export default App