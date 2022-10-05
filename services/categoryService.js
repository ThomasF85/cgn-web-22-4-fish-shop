const categories = [
  {
    id: "1",
    name: "Süßwasser",
    description:
      "Bewohner von Binnengewässern wie Flüsse und Seen. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
  },
  {
    id: "2",
    name: "Meerwasser",
    description:
      "Fühlen sich in Salzwasser wohl. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
  },
  {
    id: "3",
    name: "Muscheln",
    description:
      "Harte Schale, weicher Kern. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
  },
  {
    id: "4",
    name: "Korallen und Blumentiere",
    description:
      "Sehen hübsch aus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
  },
  {
    id: "5",
    name: "Wirbellose",
    description:
      "Seesterne, Krill und Krebstiere. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum quaerat ea sint ipsum nisi recusandae corrupti ab possimus eveniet voluptate eaque ullam quas voluptatem omnis quod, natus, non eum assumenda.",
  },
];

export async function getAllCategories() {
  return categories;
}

export async function getCategoryById(id) {
  return categories.find((category) => category.id === id);
}
