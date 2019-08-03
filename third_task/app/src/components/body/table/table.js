import React, {Component} from "react";


export default class table extends Component {

    arr = [
        [['1993'], ['родился']],
        [['2000'], ['поступил в школу']],
        [['2008'], ['закончил школу']],
        [['2009'], ['поступил в коледж']]
    ];

    removeItem() {

    }

    elements = this.arr.map((item, index) => {
        return (
            <li key={index}>
                <span>{item[0]} </span>
                <span>{item[1]}</span>
                <button>X</button>
            </li>);
    });

    addItem = () => {

    };

    onChange = () => {
        console.log('.')
    };

    render() {
        console.log(this.elements);
        return (
            <div className='section-4' id='section-4'>
                <div className="container">
                    <form className="table">
                        <ul>
                            {[...this.elements]};
                            <li><span>1993</span> <span>родился</span>
                                <button>X</button>
                            </li>
                            <li><span>2000</span> <span>поступил в школу</span>
                                <button>X</button>
                            </li>
                            <li><span>2008</span> <span>закончил школу</span>
                                <button>X</button>
                            </li>
                            <li><span>2009</span> <span>поступил в коледж</span>
                                <button>X</button>
                            </li>
                        </ul>
                        <input type="text"
                               onChange={this.onChange}/>
                        <button>Добавить</button>
                    </form>
                </div>
            </div>
        )
    };
}