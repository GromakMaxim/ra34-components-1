import * as React from "react";

export default class ShopItem extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        const receivedData = this.props.item;

        return (
            <div className="main-content">
                <h2>{receivedData.brand}</h2>
                <h1>{receivedData.title}</h1>
                <h3>{receivedData.description}</h3>
                <div className="description">{receivedData.descriptionFull}</div>
                <div className="highlight-window mobile">
                    <div className="highlight-overlay"/>
                </div>
                <div className="divider"/>
                <div className="purchase-info">
                    <div className="price">{receivedData.currency}{(receivedData.price).toFixed(2)}</div>
                    <button>Добавить в корзину</button>
                </div>
            </div>
        );
    }
}
