import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import InputMask from "react-input-mask";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { checkListDocument } from "../createDocument/checkListDocument";
import { notificationTermDocument } from "../createDocument/notificationTermDocument";
import logo from "../../assets/brasao-pm-ba.png";
import { Stack } from "react-bootstrap";
import { PlusCircle } from "@phosphor-icons/react";
import { MinusCircle } from "@phosphor-icons/react";

interface FormValues {
  accomodation: string;
  policeName: string;
  requester: string;
  attraction: string;
  audience: string;
  contact: string;
  eventName: string;
  eventKind: string;
  dateEvent: string;
  startAt: string;
  endAt: string;
  food: string;
  location: string;
  transport: string;
  amountDate: string;
}

export function FormDocument() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const [imgBase64, setImgBase64] = useState("");
  const [amountDate, setAmountDate] = useState<number>(0);
  const [inputsDateRender, setInputsDateRender] = useState<JSX.Element[]>([]);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.src = logo;

    img.onload = function () {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx?.drawImage(img, 0, 0);

      const dataURL = canvas.toDataURL();
      setImgBase64(dataURL);
    };
  }, []);

  useEffect(() => {
    let inputDateArray = [];
    for (let index = 0; index < amountDate; index++) {
      inputDateArray.push(
        <Row className="mb-3" key={index}>
          <Form.Group as={Col} controlId="formGridEventDate">
            <FloatingLabel label="Data do evento">
              <Form.Control
                id={`eventDate${index}`}
                type="date"
                {...register(`dateEvent${index}`, { required: true })}
                name={`dateEvent${index}`}
                placeholder="Data do evento"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEventDate">
            <FloatingLabel label="Horário de início">
              <Form.Control
                id={`startAt${index}`}
                type="time"
                {...register(`startAt${index}`, { required: true })}
                name={`startAt${index}`}
                placeholder="Horário de início"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridEventDate">
            <FloatingLabel label="Horário de término">
              <label htmlFor="endAt"></label>
              <Form.Control
                id={`endAt${index}`}
                type="time"
                {...register(`endAt${index}`, { required: true })}
                name={`endAt${index}`}
                placeholder="Horário de início"
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
      );
    }
    setInputsDateRender(inputDateArray);
  }, [amountDate]);

  function eventsData(data: FormValues) {
    checkListDocument(data, imgBase64, amountDate);
    // notificationTermDocument(data, imgBase64);
    // console.log(data);
  }

  return (
    <Container className="w-50">
      <h2 className="text-center mt-5">
        Formulário de solicitação de Policiamento em Eventos
      </h2>
      <Form onSubmit={handleSubmit(eventsData)} className="mt-4">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridPoliceName">
            <FloatingLabel label="Nome do Policial Militar">
              <Form.Control
                type="text"
                {...register("policeName", { required: true })}
                name="policeName"
                placeholder="Nome do Policial Militar"
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEventName">
            <FloatingLabel label="Nome do evento">
              <Form.Control
                type="text"
                {...register("eventName", { required: true })}
                name="eventName"
                placeholder="Nome do evento"
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridRequester">
            <FloatingLabel label="Nome do solicitante/responsável">
              <Form.Control
                type="text"
                {...register("requester", { required: true })}
                name="requester"
                placeholder="Nome do solicitante/responsável"
              />
            </FloatingLabel>
          </Form.Group>
        </Row>
        <PlusCircle
          size={32}
          onClick={() => setAmountDate((prev) => prev + 1)}
        />
        Datas
        <MinusCircle
          size={32}
          onClick={() => setAmountDate((prev) => prev - 1)}
        />
        {inputsDateRender}
        <FloatingLabel label="Local do Evento">
          <Form.Control
            type="text"
            {...register("location", { required: true })}
            name="location"
            placeholder="Local do Evento"
          />
        </FloatingLabel>
        <FloatingLabel label="Atrações">
          <Form.Control
            type="text"
            {...register("attraction", { required: true })}
            name="attraction"
            placeholder="Atrações"
          />
        </FloatingLabel>
        <FloatingLabel label="Estimativa de público">
          <Form.Control
            type="number"
            {...register("audience", { required: true })}
            name="audience"
            placeholder="Estimativa de público"
          />
        </FloatingLabel>
        <FloatingLabel label="Transporte">
          <Form.Control
            type="text"
            {...register("transport")}
            name="transport"
            placeholder="Transporte"
          />
        </FloatingLabel>
        <FloatingLabel label="Alimentação">
          <Form.Control
            type="text"
            {...register("food")}
            name="food"
            placeholder="Alimentação"
          />
        </FloatingLabel>
        <FloatingLabel label="Hospedagem">
          <Form.Control
            type="text"
            {...register("accomodation")}
            name="accomodation"
            placeholder="Hospedagem"
          />
        </FloatingLabel>
        <Form.Label className="mb-0">
          Característica do evento
          <InputGroup>
            <Stack
              className="d-flex align-items-baseline"
              direction="horizontal"
              gap={1}
            >
              <Form.Label>Privado</Form.Label>
              <Form.Check
                type="radio"
                inline
                {...register("eventKind")}
                name="eventKind"
                id="privado"
                value="privado"
              />
            </Stack>
            <Stack
              className="d-flex align-items-baseline"
              direction="horizontal"
              gap={1}
            >
              <Form.Label>Público</Form.Label>
              <Form.Check
                inline
                type="radio"
                {...register("eventKind")}
                name="eventKind"
                id="publico"
                value="publico"
              />
            </Stack>
          </InputGroup>
        </Form.Label>
        <Form.Label className="mb-0">Contatos</Form.Label>
        <InputMask
          type="tel"
          mask="(99) 99999-9999"
          placeholder="(xx)xxxx-xxxx"
          {...register("contact", {
            pattern: /^\([1-9]{2}\) [2-9][0-9]{3,4}\-[0-9]{4}$/,
          })}
          name="contact"
          className="w-25"
        />
        <Button variant="primary" type="submit">
          Gerar PDF
        </Button>
      </Form>
    </Container>
  );
}
