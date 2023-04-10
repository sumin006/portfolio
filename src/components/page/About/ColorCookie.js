import React from 'react'
import reactCSS from 'reactcss'
import { SketchPicker } from 'react-color'
import { getCookie, setCookie } from '../../../App';

class ColorCookie extends React.Component {  
  state = {
    color: {
      r: getCookie("r"),
      g: getCookie("g"),
      b: getCookie("b"),
      a: getCookie("a"),
    },
  };
  handleChangeComplete = (color) => {
    setCookie("r",color.rgb.r);
    setCookie("g",color.rgb.g);
    setCookie("b",color.rgb.b);
    setCookie("a",color.rgb.a);
    this.setState({ color: {
      r: getCookie("r"),
      g: getCookie("g"),
      b: getCookie("b"),
      a: getCookie("a")
    } });
    window.location.reload();
  };

  render() {
    return (
      <SketchPicker
      color={ this.state.color }
      onChangeComplete={ this.handleChangeComplete }
    />
    )
  }
}

export default ColorCookie