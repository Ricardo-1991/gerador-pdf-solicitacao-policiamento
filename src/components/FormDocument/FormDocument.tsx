import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { checkListDocument } from "../createDocument/checkListDocument";
import { notificationTermDocument } from "../createDocument/notificationTermDocument";

interface FormValues {
  accomodation: string;
  attraction: string;
  audience: string;
  contact: string;
  dateEvent: string;
  endAt: string;
  eventName: string;
  food: string;
  location: string;
  requester: string;
  startAt: string;
  transport: string;
  eventKind: string;
}

export function FormDocument() {
  const {
    register,
    handleSubmit,
    formState: { erros },
  } = useForm<FormValues>();

  function eventsData(data: FormValues) {
    // checkListDocument(data);
    // notificationTermDocument(data);
  }

  return (
    <>
      <h1>Checklist Evento</h1>
      <form onSubmit={handleSubmit(eventsData)}>
        <label htmlFor="">Nome do evento</label>
        <input type="text" {...register("eventName")} name="eventName" />
        <label htmlFor="">Nome do solicitante/responsável</label>
        <input type="text" {...register("requester")} name="requester" />
        <label htmlFor="">Data do evento</label>
        <input type="date" {...register("dateEvent")} name="dateEvent" />
        <label htmlFor="">Horário de início</label>
        <input type="time" {...register("startAt")} name="startAt" />
        <label htmlFor="">Horário de término</label>
        <input type="time" {...register("endAt")} name="endAt" />
        <label htmlFor="">Local do Evento</label>
        <input type="text" {...register("location")} name="location" />
        <label htmlFor="">Atrações</label>
        <input type="text" {...register("attraction")} name="attraction" />
        <label htmlFor="">Estimativa de público</label>
        <input type="number" {...register("audience")} name="audience" />
        <label htmlFor="">Transporte</label>
        <input type="text" {...register("transport")} name="transport" />
        <label htmlFor="">Alimentação</label>
        <input type="text" {...register("food")} name="food" />
        <label htmlFor="">Hospedagem</label>
        <input type="text" {...register("accomodation")} name="accomodation" />
        <label htmlFor="">Característica do evento</label>
        <label htmlFor="">Privado</label>
        <input
          type="radio"
          {...register("eventKind")}
          name="eventKind"
          id="privado"
          value="privado"
        />
        <label htmlFor="">Público</label>
        <input
          type="radio"
          {...register("eventKind")}
          name="eventKind"
          id="publico"
          value="publico"
        />
        <label htmlFor="">Contatos</label>
        <input
          type="tel"
          placeholder="(xx)1234-5678"
          {...register("contact")}
          name="contact"
          // pattern="^\d{2} \d{4}-\d{4}$|^\d{4}-\d{4}$"
        />
        <input type="submit" />
      </form>
    </>
  );
}
