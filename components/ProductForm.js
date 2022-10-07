import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";

export default function ProductForm({
  categories,
  product,
  onSubmit,
  buttonLabel,
}) {
  const [name, setName] = useState(product?.name ?? "");
  const [description, setDescription] = useState(product?.description ?? "");
  const [price, setPrice] = useState(product?.price ?? "");
  const [category, setCategory] = useState(
    product?.categoryId ?? categories[0].id
  );

  function handleSubmit(event) {
    event.preventDefault();
    onSubmit({
      name,
      description,
      price,
      category,
    });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <input
          name="name"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          required
        />
      </Label>
      <Label>
        Description:
        <input
          name="description"
          value={description}
          onChange={(event) => {
            setDescription(event.target.value);
          }}
          required
        />
      </Label>
      <Label>
        Price:
        <input
          name="description"
          type="number"
          value={price}
          onChange={(event) => {
            setPrice(event.target.value);
          }}
          required
        />
      </Label>
      <Label>
        Kategorie:
        <select
          name="category"
          value={category}
          onChange={(event) => {
            setCategory(event.target.value);
          }}
          required
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </Label>

      <Button type="submit">{buttonLabel}</Button>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 20rem;
  gap: 1rem;
  align-items: flex-start;
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
