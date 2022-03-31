import { IEvento } from "interfaces/IEvento";
import { useSetRecoilState } from "recoil";
import { listaDeEventosState } from "state/atom";
import { removeEvento } from "state/json-server";

const useDeletarEvento = () => {
  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  return async (evento: IEvento) => {
    if(evento.id) {
      removeEvento(evento.id);
      setListaDeEventos(listaAntiga => listaAntiga.filter(evt => evt.id !== evento.id));
    }
  }
}
export default useDeletarEvento;