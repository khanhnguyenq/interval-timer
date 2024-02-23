import { FormEvent } from "react";
import Input from "./Input";

export function InputForm() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const formJSON = Object.fromEntries(formData.entries());
    localStorage.setItem("timer", JSON.stringify(formJSON));
  }

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <Input label="Time On" />
      {/* <Input label="Time Off" />
      <Input label="Number of Intervals" />
      <Input label="Warm Up" />
      <Input label="Cooldown" /> */}
      <button type="submit">Submit</button>
    </form>
  );
}
