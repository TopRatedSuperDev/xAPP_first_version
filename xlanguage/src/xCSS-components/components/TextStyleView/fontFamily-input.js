import React, { useState } from 'react'
import { InputGroup } from '@blueprintjs/core'
import _ from 'lodash'

export class FontFamilyInput extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      internalValue: props.value,
      familyNames:[ "Arial",
                    "Arial Black",
                    "Arial Narrow",
                    "Arial Rounded MT Bold",
                    "Calibri",
                    "Candara",
                    "Century Gothic",
                    "Comic Sans MS",
                    "Consolas",
                    "Constantia",
                    "Corbel",
                    "Courier New",
                    "DejaVu Sans",
                    "Dosis",
                    "Droid Sans-serif",
                    "Droid Serif",
                    "Franklin Gothic Medium",
                    "Futura",
                    "Georgia",
                    "Gill Sans",
                    "Helvetica",
                    "Helvetica Neue",
                    "Impact",
                    "Inconsolata",
                    "Lucida Console",
                    "Lucida Grande",
                    "Lucida Sans Unicode",
                    "Lato",
                    "Leelawadee",
                    "Lucida Sans",
                    "Microsoft Sans Serif",
                    "Monaco",
                    "Montserrat",
                    "Myriad Pro",
                    "Noto Sans",
                    "Noto Serif",
                    "Open Sans",
                    "Optima",
                    "Oswald",
                    "Palatino",
                    "Roboto",
                    "Segoe UI",
                    "Tahoma",
                    "Times New Roman",
                    "Trebuchet MS",
                    "Ubuntu",
                    "Verdana",
                    "Webdings",
                    "Wingdings",
                    "Yu Gothic",
                    "Bell MT",
                    "Bembo",
                    "Bernard MT Condensed",
                    "Bodoni MT",
                    "Book Antiqua",
                    "Bookman Old Style",
                    "Bradley Hand",
                    "Brush Script MT",
                    "Calibri Light",
                    "Calisto MT",
                    "Cambria",
                    "Candara Light",
                    "Castellar",
                    "Centaur",
                    "Century Schoolbook",
                    "Chaparral Pro",
                    "Chiller",
                    "Clarendon",
                    "Colonna MT",
                    "Copperplate",
                    "Cooper Black",
                    "Copperplate Gothic Bold",
                    "Copperplate Gothic Light",
                    "Curlz MT",
                    "Didot",
                    "Edwardian Script ITC",
                    "Elephant",
                    "Engravers MT",
                    "Eras Bold ITC",
                    "Felix Titling",
                    "Footlight MT Light",
                    "Forte",
                    "Franklin Gothic Book",
                    "Franklin Gothic Demi",
                    "Franklin Gothic Heavy",
                    "Franklin Gothic Medium Cond",
                    "Freestyle Script",
                    "French Script MT",
                    "Gabriola",
                    "Garamond",
                    "Gigi",
                    "Gill Sans MT",
                    "Gill Sans MT Condensed",
                    "Gill Sans MT Ext Condensed Bold",
                    "Goudy Old Style",
                    "Goudy Stout",
                    "Harrington",
                    "High Tower Text",
                    "Hobo Std",
                    "Imprint MT Shadow",
                    "Informal Roman",
                    "Jokerman",
                    "Kristen ITC",
                    "Kunstler Script",
                    "Leelawadee UI",
                    "Lucida Bright",
                    "Lucida Calligraphy",
                    "Lucida Fax",
                    "Lucida Handwriting",
                    "Magneto",
                    "Maiandra GD",
                    "Matura MT Script Capitals",
                    "Mistral",
                    "Monotype Corsiva",
                    "Neue Haas Grotesk",
                    "Niagara Engraved",
                    "Niagara Solid",
                    "Old English Text MT",
                    "Onyx",
                    "Palace Script MT",
                    "Papyrus",
                    "Perpetua",
                    "Perpetua Titling MT",
                    "Playbill",
                    "Poor Richard"]
    }
  }
  static getDerivedStateFromProps(props, state) {
    const {forceSync, value} = props
    if (forceSync) {
      return {
        internalValue: value
      }
    }
    return null;
  }
  onBlur = () => {
    this.setState({
      internalValue: this.props.value
    })
  }
  onChange = (event) => {
    const { onValueChange } = this.props
    const originValue = event.target.value;
    this.setState({
      internalValue: originValue
    })

    onValueChange(originValue)
  }

  render() {
    const { id, disabled, fill } = this.props
  //   return <InputGroup
  //     className={className}
  //     disabled={disabled}
  //     value={this.state.internalValue}
  //     fill={fill}
  //     onBlur={this.onBlur}
  //     onChange={this.onChange}></InputGroup>
  // }
    return <select
      id={id}
      className='family-select'
      disabled={disabled}
      value={this.state.internalValue}
      onBlur={this.onBlur}
      onChange={this.onChange}
    >
      {this.state.familyNames.map(item=>(<option key={item} value={item}>{item}</option>))}
    </select>
  }
}