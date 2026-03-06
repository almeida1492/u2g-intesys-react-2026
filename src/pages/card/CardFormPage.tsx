import { useNavigate } from "react-router";
import { CardForm } from "../../components/card/CardForm";
import { cardApi } from "../../services";

function CardFormPage() {
  const navigate = useNavigate();

  const handleSubmit = async (values: {
    title: string;
    description: string;
    assignedTo: string;
    columnId: string;
  }) => {
    try {
      await cardApi.createCard({
        createCardRequest: {
          title: values.title,
          description: values.description,
          columnId: Number(values.columnId),
        },
      });
      navigate(-1);
    } catch (error) {
      console.error("Error creating card", error);
    }
  };

  return <CardForm onSubmit={handleSubmit} onClose={() => navigate(-1)} />;
}

export default CardFormPage;