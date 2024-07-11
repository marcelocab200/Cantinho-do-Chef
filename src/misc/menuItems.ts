// Uma lista para o cardapio do restaurante

export type MenuItemProps = {
  id: number;
  name: string;
  description: string;
  price: number;
  flavors: string[];
  img: string;
};

const menuItems: MenuItemProps[] = [
  {
    id: 1,
    name: "Pizza",
    description:
      "Pizza crocante e deliciosa com ingredientes frescos. Escolha seu tamanho e sabor!",
    price: 75,
    flavors: ["Margherita", "Pepperoni", "Quatro Queijos", "Calabresa"],
    img: require("../assets/MenuItemsImages/pizza.png"),
  },
  {
    id: 2,
    name: "Hambúrguer",
    description:
      "Hambúrguer suculento com ingredientes premium, servido em pão fresco. Satisfaça sua fome!",
    price: 40,
    flavors: ["Clássico", "Cheese Bacon", "Vegano", "Frango"],
    img: require("../assets/MenuItemsImages/hamburger.png"),
  },
  {
    id: 3,
    name: "Salada",
    description:
      "Saladas vibrantes e saudáveis com vegetais frescos e ingredientes deliciosos.",
    price: 30,
    flavors: ["Caesar", "Grega", "Tropical", "Caprese"],
    img: require("../assets/MenuItemsImages/salada.png"),
  },
  {
    id: 4,
    name: "Sanduíche",
    description:
      "Sanduíches recheados com ingredientes de alta qualidade para um sabor incrível a cada mordida.",
    price: 25,
    flavors: [
      "Presunto e Queijo",
      "Frango com Catupiry",
      "Atum",
      "Vegetariano",
    ],
    img: require("../assets/MenuItemsImages/sanduiche.png"),
  },
  {
    id: 5,
    name: "Sopa",
    description:
      "Sopas reconfortantes feitas com receitas tradicionais e ingredientes frescos.",
    price: 20,
    flavors: [
      "Canja de Galinha",
      "Creme de Abóbora",
      "Minestrone",
      "Sopa de Lentilha",
    ],
    img: require("../assets/MenuItemsImages/sopa.png"),
  },
  {
    id: 6,
    name: "Suco",
    description:
      "Sucos naturais feitos na hora com frutas frescas, cheios de sabor e nutrientes.",
    price: 15,
    flavors: ["Laranja", "Limão", "Abacaxi com Hortelã", "Melancia"],
    img: require("../assets/MenuItemsImages/Suco.png"),
  },
  {
    id: 7,
    name: "Sorvete",
    description:
      "Sorvetes cremosos e irresistíveis, feitos com ingredientes de alta qualidade.",
    price: 12,
    flavors: ["Chocolate", "Baunilha", "Morango", "Pistache"],
    img: require("../assets/MenuItemsImages/sorvete.png"),
  },
  {
    id: 8,
    name: "Massa",
    description:
      "Massas artesanais com molhos ricos e saborosos para uma experiência italiana autêntica.",
    price: 50,
    flavors: ["Carbonara", "Bolonhesa", "Alfredo", "Pesto"],
    img: require("../assets/MenuItemsImages/massa.png"),
  },
  {
    id: 9,
    name: "Batata Frita",
    description:
      "Batatas fritas douradas e crocantes, temperadas na medida certa.",
    price: 18,
    flavors: ["Tradicional", "Cheddar e Bacon", "Parmesão", "Páprica Picante"],
    img: require("../assets/MenuItemsImages/batata-frita.png"),
  },
  {
    id: 10,
    name: "Wrap",
    description:
      "Wraps recheados com ingredientes frescos e saborosos, enrolados em tortilha macia.",
    price: 35,
    flavors: ["Frango", "Carne", "Vegetariano", "Falafel"],
    img: require("../assets/MenuItemsImages/wrap.png"),
  },
];

export default menuItems;
