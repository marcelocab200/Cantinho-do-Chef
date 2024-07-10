import React, { useState } from "react";
import "./styles.scss";
import Input from "../../../../components/UI/Input";

export default function OrderDetail() {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div className="Container">
      <div className={"Order-detail"}>
        <form>
          <Input
            label="Item"
            placeholder="Selecione o item"
            options={["Item 1", "Item 2", "Item 3"]}
          />
          <Input
            label="Sabor"
            placeholder="Selecione o sabor"
            options={["Item 1", "Item 2", "Item 3"]}
          />
          <Input
            label="Tamanho"
            placeholder="Selecione o tamanho"
            options={["Item 1", "Item 2", "Item 3"]}
          />
          <Input
            label="Descrição adicional"
            placeholder="Possui alguma observação?"
            type="textarea"
          />
        </form>
        <div className="Item-detail">
          <img alt="Item image"/>
          <div id="Item-text-container">
            <div>
              <p id="Item-title">Pizza de calabresa</p>
              <p>Deliciosa pizza</p>
            </div>
            <div>
              <div className="Lower-text">
                <p>Preço:</p>
                <p>R$ 20,00</p>
              </div>
              <div className="Lower-text">
                <p>Tempo de preparo:</p>
                <p>30 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
