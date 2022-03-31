import { IEvento } from "interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "state/atom";
import { atualizaEvento } from "state/json-server";

const useAtualizarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return (evento: IEvento) => {
    if(evento.id){
      atualizaEvento(evento);
    }
    return setListaDeEventos(listaAntiga => {
      const indice = listaAntiga.findIndex(evt => evt.id === evento.id);  
      return [...listaAntiga.slice(0, indice), evento, ...listaAntiga.slice(indice + 1)]
    });
  }
}

export default useAtualizarEvento;