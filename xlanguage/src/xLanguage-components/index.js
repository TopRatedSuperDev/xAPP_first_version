import React, { useState } from 'react';
import logo from '../logo.svg';
import '../App.css';

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-python";
import "prismjs/components/prism-c";

import "prismjs/themes/prism.css";
// import * as THREE from "three";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';


const code = `PRINT("Greetings universe!")\nVAR a = [1,2,3] \nVAR b = ["a","b","c"] \n
VAR c = [a,b] \nFOR i = 0 TO LEN(c) THEN \n  FOR j = 0 TO LEN(c->i) THEN \n    PRINT(c->i->j) \n  END \nEND`;

const hightlightWithLineNumbers = (input, language) =>
  highlight(input, language)
    .split("\n")
    .map((line, i) => `<span class='editorLineNumber'>${i + 1}</span>${line}`)
    .join("\n");





function XLanguageDisplay() {
  const [output,setOutput] = useState("OUTPUT：");
  
  const [codeValue, setCodeValue] = useState(code);
  
//   var div_id = 0;

  function complier(e) 
  {
    e.preventDefault();
    const worker = new Worker('./worker.js');
    worker.postMessage(codeValue+"\n"); // Sending the number 5 as an example

    //console.log("===send===");
    //console.log(codeValue+'\n')

    worker.onmessage = (e) => {
      //console.log("===get===")
      const { data } = e;
      console.log(data)
      if(data!=="END")
      {

         if(data.function_name!=null)
         {

            if (data.function_name == "div_create_pre_with_id")
              {
                var div = document.createElement("div");
                div.setAttribute("id",data.div_id.toString())
                div.innerHTML = "New DIV: ['id'="+data.div_id.toString()+"], before ['reference_id'="+data.reference_id.toString()+"]";
          
                
                var reference_div = document.getElementById(data.reference_id.toString())
          
          
                if(reference_div!=null)
                {
                  reference_div.parentNode.insertBefore(div, reference_div);
                }
                else
                {
                  document.body.prepend(div);
                }
              }

            if (data.function_name == "div_create_post_with_id")
              {
                var div = document.createElement("div");
                div.setAttribute("id",data.div_id.toString())
                div.innerHTML = "New DIV: ['id'="+data.div_id.toString()+"], after ['reference_id'="+data.reference_id.toString()+"]";
          
                var reference_div = document.getElementById(data.reference_id.toString())
                
          
                if(reference_div!=null)
                {
                  reference_div.parentNode.insertBefore(div, reference_div.nextSibling);
                }
                else
                {
                  document.body.append(div);
                }
              }

            if (data.function_name == "div_create_child_pre_with_id")
              {
                  var div = document.createElement("div");
                  div.setAttribute("id",data.div_id.toString())
                  div.innerHTML = "New DIV: ['id'="+data.div_id.toString()+"], under ['parent_id'="+data.parent_id.toString()+"]";

                  
                  var parent_div = document.getElementById(data.parent_id.toString());

                  if(parent_div!=null)
                  {
                    parent_div.prepend(div);
                  }
                  else
                  {
                    document.body.prepend(div);
                  }
              }

            if (data.function_name == "div_create_child_post_with_id")
            {
                var div = document.createElement("div");
                div.setAttribute("id", data.div_id.toString())
                div.innerHTML = "New DIV: ['id'="+data.div_id.toString()+"], under ['parent_id'="+data.parent_id.toString()+"]";
          
                
                var parent_div = document.getElementById(data.parent_id.toString());
          
                if(parent_div!=null)
                {
                  parent_div.append(div);
                }
                else
                {
                  document.body.append(div);
                }
            }

            if (data.function_name == "div_create_pre_with_class")
              {
                var div = document.createElement("div");
                div.setAttribute("class",data.div_class.toString())
                div.innerHTML = "New DIV: ['class'="+data.div_class.toString()+"], before ['reference_class'="+data.reference_class.toString()+"]";
          
                
                var reference_div = document.getElementsByClassName(data.reference_class.toString())[data.array_id];
          
          
                if(reference_div!=null)
                {
                  reference_div.parentNode.insertBefore(div, reference_div);
                }
                else
                {
                  document.body.prepend(div);
                }
              }

            if (data.function_name == "div_create_post_with_class")
              {
                var div = document.createElement("div");
                div.setAttribute("class",data.div_class.toString())
                div.innerHTML = "New DIV: ['class'="+data.div_class.toString()+"], after ['reference_class'="+data.reference_class.toString()+"]";
          
                var reference_div = document.getElementsByClassName(data.reference_class.toString())[data.array_id];
                
          
                if(reference_div!=null)
                {
                  reference_div.parentNode.insertBefore(div, reference_div.nextSibling);
                }
                else
                {
                  document.body.append(div);
                }
              }

            if (data.function_name == "div_create_child_pre_with_class")
              {
                  var div = document.createElement("div");
                  div.setAttribute("class",data.div_class.toString())
                  div.innerHTML = "New DIV: ['class'="+data.div_class.toString()+"], under ['parent_class'="+data.parent_class.toString()+"]";

                  
                  var parent_div = document.getElementsByClassName(data.parent_class.toString())[data.array_id];

                  if(parent_div!=null)
                  {
                    parent_div.prepend(div);
                  }
                  else
                  {
                    document.body.prepend(div);
                  }
              }

            if (data.function_name == "div_create_child_post_with_class")
            {
                var div = document.createElement("div");
                div.setAttribute("id", data.div_class.toString())
                div.innerHTML = "New DIV: ['id'="+data.div_class.toString()+"], under ['parent_class'="+data.parent_class.toString()+"]";
          
                
                var parent_div = document.getElementsByClassName(data.parent_class.toString())[data.array_id];
          
                if(parent_div!=null)
                {
                  parent_div.append(div);
                }
                else
                {
                  document.body.append(div);
                }
            }

            if (data.function_name == "div_create_attribute_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id].setAttribute(data.attribute, data.value);
            }
            
            if (data.function_name == "div_create_attribute_with_id")
            {
                var div = document.getElementById(data.div_id).setAttribute(data.attribute, data.value);
            }

            if (data.function_name == "div_change_attribute_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id].setAttribute(data.attribute, data.value);
            } 

            if (data.function_name == "div_change_attribute_with_id")
            {
                var div = document.getElementById(data.div_id).setAttribute(data.attribute, data.value);
            }

            if (data.function_name == "div_change_inner_html_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id];
                div.innerHTML = data.html_content
            } 

            if (data.function_name == "div_change_inner_html_with_id")
            {
                var div = document.getElementById(data.div_id);
                div.innerHTML = data.html_content
            }
            
            if (data.function_name == "div_overwrite_style_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id];
                div.setAttribute('style',data.style);
            }    

            if (data.function_name == "div_overwrite_style_with_id")
            {
                var div = document.getElementById(data.div_id);
                div.setAttribute('style',data.style);
            }    

            if (data.function_name == "div_add_style_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id];
                div.style.cssText += data.style
            }  
            
            if (data.function_name == "div_add_style_with_id")
            {
                var div = document.getElementById(data.div_id);
                div.style.cssText += data.style
            } 

            if (data.function_name == "div_add_inside_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id];
                div.innerHTML = data.child_element;
            } 

            if (data.function_name == "div_add_inside_with_id")
            {
                var div = document.getElementById(data.div_id);
                div.innerHTML = data.child_element;
            }

            if (data.function_name == "div_remove_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id];
                div.parentNode.removeChild(div);
            } 

            if (data.function_name == "div_remove_with_id")
            {
                var div = document.getElementById(data.div_id);
                div.parentNode.removeChild(div);
            }

            if (data.function_name == "event_add_with_class")
            {
                var div = document.getElementsByClassName(data.div_class)[data.array_id].addEventListener(data.event.toString(), function() { eval(data.function_name_execute + '.apply(null, arguments)');});
            } 

            if (data.function_name == "event_add_with_id")
            {
                var div = document.getElementById(data.div_id).addEventListener(data.event.toString(), function() { eval(data.function_name_execute + '.apply(null, arguments)');});
            }

            if (data.function_name == "event_all_remove_with_class")
            {
                var el = document.getElementsByClassName(data.div_class)[data.array_id];
                var elClone = el.cloneNode(true);
                el.parentNode.replaceChild(elClone, el);       
            } 

            if (data.function_name == "event_all_remove_with_id")
            {
                var el = document.getElementsByClassName(data.div_id);
                var elClone = el.cloneNode(true);
                el.parentNode.replaceChild(elClone, el);       
            }

         }
         else if( data.function_name == null )
         {
           console.log(data.style)
           setOutput((output) => ( output + data ));
         }
      }
      else if( data==="END" )
      {
         //console.log("===END===")
         worker.terminate(); // Terminate the worker when done
      }
      
    };
  }


  function clear(e)
  {
    e.preventDefault();
    setOutput("OUTPUT：");
    
  }
  
  
  const handle_click = () => {
    window.open("http://45.32.212.231:8080");
  };
  
  const handle_click_social = () => {
    window.open("http://45.32.212.231:1234");
  };
    
  const handle_text_onChange = () => {

  };


  return (
    <div >
        <div className='xLanguage-content' >
            <header className="App-header">
                <ProSidebar className="Menu" >
                <Menu iconShape="square">
                    <SubMenu title="Website Map" >
                    <MenuItem onClick={handle_click} >1. REFERENCE</MenuItem>
                    <MenuItem onClick={handle_click_social} >2. SOCIAL</MenuItem>
                    </SubMenu>
                </Menu>
                </ProSidebar>
                <img src={logo}  className="App-logo" alt="logo" style={{width: "50px",height:"50px"}}/>
                <Editor
                value={codeValue}
                onValueChange={code => setCodeValue(code)}
                highlight={code => hightlightWithLineNumbers(code, languages.clike )}
                padding={10}
                textareaId="codeArea"
                className="editor"
                style={{
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 13,
                    outline: 0
                }}
                />
                <div style={{margin:"10px"}}>
                {/* <button href="#" className="btn" onClick={(e)=>complier(e)} style={{color:"white", border:"1px solid white", marginRight:"10px"}}>run</button>
                <button href="#" className="btn" onClick={(e)=>clear(e)} style={{color:"white", border:"1px solid white"}}>clear</button> */}
                <button href="#" className="btn" onClick={(e)=>complier(e)} style={{
                                                                                    content: "",
                                                                                    position: "relative",
                                                                                    width: "150px",
                                                                                    height: "50px",
                                                                                    margin:"15px",
                                                                                    color:"white",
                                                                                    background: "linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent)",
                                                                                  }}>run</button>
                <button href="#" className="btn" onClick={(e)=>clear(e)} style={{
                                                                                    content: "",
                                                                                    position: "relative",
                                                                                    width: "150px",
                                                                                    height: "50px",
                                                                                    margin:"15px",
                                                                                    color:"white",
                                                                                    background: "linear-gradient(120deg, transparent, rgba(146, 148, 248, 0.4), transparent)",
                                                                                  }}>clear</button>
                </div>
                <textarea type="text" className="console" id='resultText' name='resultText' value={output} style={{fontSize:"10px",lineHeight:"13px"}} onChange={(e)=>handle_text_onChange(e)} />
                
            </header>
        </div>
    </div>
    
  );
}

export default XLanguageDisplay;