/**
 * Created by anuprai on 25/07/17.
 */
/**
 * Created by anuprai on 21/07/17.
 */
import React from 'react';
function adaptPropToAlias(props){

}
export default function connectPropAlias(propAliasMap, propModifierFunction) {
  return function wrapWithPropAlias(WrappedComponent) {
    return class extends React.Component {
      constructor(props) {
        super(props);
        //how to cache on this
        propModifierFunction(adaptPropToAlias(propAliasMap, props));
        this.adaptedProps = props;
      }

      componentWillReceiveProps(nextProps) {
        if(nextProps!==this.props){
          adaptPropToAlias(propAliasMap, nextProps);
          propModifierFunction(nextProps);
        }
      }

      render() {
        return (<WrappedComponent {...this.adaptedProps}/>);
      }
    }
  }
};