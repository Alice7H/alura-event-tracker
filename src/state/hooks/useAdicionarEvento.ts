import { IEvento } from "interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "state/atom";
import { adicionaEvento } from "state/json-server";
import { obterId } from "../../util";

const useAdicionarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

  return (evento: IEvento) => {
    const hoje = new Date();
    if(evento.inicio < hoje ){
      throw new Error('Eventos não podem ser cadastrados com a data menor do que a atual.');
    }
    evento.id = obterId();
    adicionaEvento(evento);
    return setListaDeEventos(listaAntiga => [...listaAntiga, evento]);
  }
}

export default useAdicionarEvento;
