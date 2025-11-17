import AddToto from "@/components/reducer&context/AddToto";
import TodoList from "@/components/reducer&context/TodoList";
import { TodosContextProvider } from "@/contexts/todosContext";

export default function Page() {
  return (
    <section className="max-w-xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl space-y-6">
      <h2 className="text-2xl font-bold text-center text-blue-600">
        Simple Todo Application
      </h2>

      <TodosContextProvider>
        <AddToto />
        <TodoList />
      </TodosContextProvider>
    </section>
  );
}
