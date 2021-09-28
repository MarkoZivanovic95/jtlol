import React, {Component} from 'react'

class Main extends Component {
    
    state={
        jtarray:[]
    }
    getText=(trel)=>{
        var asd=this.state.jtarray
        if(asd.length<3){
            asd.push(trel)
        }else if(asd.length==3){
            asd.splice(-1)
            asd.unshift(trel)

        }
        console.log(asd)
        this.setState({jtarray:asd})
    }
    render() {
        var text=this.state.jtarray.map(slika=>
            <div className="end">
                {slika}
            </div>
            )
            return (
                <div className="App container">
                    <div className="row styl">
                        <div className="col-3 lel" onClick={()=>this.getText("Zoli")}>Zoli</div>
                        <div className="col-3 lel" onClick={()=>this.getText("Ema")}>Ema</div>
                        <div className="col-3 lel" onClick={()=>this.getText("Dragomir")}>Dragomir</div>
                        <div className="col-3 lel" onClick={()=>this.getText("Cule")}>Cule</div>
                        <div className="col-3 lel" onClick={()=>this.getText("X5l")}>X5l</div>
                        <div className="col-3 lel" onClick={()=>this.getText("C5LNA")}>C5LNA</div>
                        <div className="col-3 lel" onClick={()=>this.getText("B7LK")}>B7LK</div>
                        <div className="col-3 lel" onClick={()=>this.getText("X7LJNA")}>X7LJNA</div>
                        <div className="col-3 lel" onClick={()=>this.getText("C123L")}>C123L</div>
                        <div className="col-3 lel" onClick={()=>this.getText("ASDASDQWE123")}>ASDASDQWE123</div>
                        <div className="col-3 lel" onClick={()=>this.getText("ZXCZXC")}>ZXCZXC</div>
                        <div className="col-3 lel" onClick={()=>this.getText("JTIIT")}>JTIIT</div>
                    </div>
                    <div className="line">
                        {text}
                    </div>
                </div>
            )
    }
}

export default Main;