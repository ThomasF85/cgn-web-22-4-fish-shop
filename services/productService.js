const products = [
  {
    id: "1",
    name: "Garnele",
    description:
      "Lebt bevorzugt paarweise. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 19,
    category: "Wirbellose",
  },
  {
    id: "2",
    name: "Anemonenfisch",
    description:
      "Nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 60,
    category: "Meerwasser",
  },
  {
    id: "3",
    name: "Pracht-Anemone",
    description:
      "Ist prächtig. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 90,
    category: "Korallen und Blumentiere",
  },
  {
    id: "4",
    name: "Mördermuschel",
    description:
      "Ist hübscher als ihr Name. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 125,
    category: "Muscheln",
  },
  {
    id: "5",
    name: "Kaiserfisch",
    description:
      "Ein tagaktiver Einzelgänger. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    category: "Meerwasser",
    price: 90,
  },
  {
    id: "6",
    name: "Guppy",
    description:
      "Klein aber fein. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 5,
    category: "Süßwasser",
  },
  {
    id: "7",
    name: "Regenbogenfisch",
    description:
      "In allen Farben und bunt. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
    price: 12,
    category: "Süßwasser",
  },
];

export async function getAllProducts() {
  return products;
}

export async function getProductById(id) {
  return products.find((product) => product.id === id);
}
