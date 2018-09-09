function wrapper () {
   
    return function (Comp) {
        const props = {
            form: {
                getFieldError () {
    
                }
            },
            a: 1,
            b: 2
        }   
        class WrapperCompo extends React.Component {
            render () {
                return <div className="wrapCompo">
                    <span>333</span>
                    <span>444</span>
                    <Comp {...props} haha=""/>
                </div>
            }
        }
        return WrapperCompo
    }
  
}


