import { IEvento } from "interfaces/IEvento";

export function removeEvento(id: number) {
  fetch(`http://localhost:8080/eventos/${id}`,{
    method: 'DELETE',
  })
}

export function adicionaEvento(evento: IEvento) {
  return fetch(`http://localhost:8080/eventos`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  })
}

export function atualizaEvento(evento: IEvento) {
  return fetch(`http://localhost:8080/eventos/${evento.id}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(evento),
  });
}

export async function pegaEventos() {
  const response = await fetch(`http://localhost:8080/eventos`);
  const eventos: IEvento[] = await response.json();
  return eventos.map(evento => ({
    ...evento,
    inicio: new Date(evento.inicio),
    fim: new Date(evento.fim)
  }))
}