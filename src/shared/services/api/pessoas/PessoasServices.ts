import { Environment } from "../../../environment";
import { api } from "../axios-config";

interface IDetalhePessoa {
  id: number,
  nomeCompleto: string,
  email: string,
  cidadeId: number
}

interface IListagemPessoa {
  id: number,
  nomeCompleto: string,
  email: string,
  cidadeId: number
}

type TPessoasComTotalCount = {
  data: IListagemPessoa[],
  totalCount: number
}

const getAll = async (
  page = 1,
  filter = "" 
): Promise<TPessoasComTotalCount | Error> => {
  try {
    const urlRelativa = `/pessoas?_page=${page}&_limit=${Environment.LIMITE_DE_LINHAS}&nomeCompleto_like=${filter}`;

    const { data, headers } = await api.get(urlRelativa);

    if (data) {
      return {
        data,
        totalCount: Number(
          headers["x-total-count"] || Environment.LIMITE_DE_LINHAS
        )
      };
    }

    return new Error(Environment.NENHUM_REGISTRO);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || Environment.NENHUM_REGISTRO
    );
  }
};

const getById = async (id: number): Promise<IDetalhePessoa | Error> => {
  try {
    const { data } = await api.get(`/pessoas/${id}`);

    if (data) {
      return data;
    }

    return new Error(Environment.NENHUM_DADO);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || Environment.NENHUM_REGISTRO
    );
  }
};

const create = async (dados: Omit<IDetalhePessoa, "id">): Promise<number | Error > => {
  try {
    const { data } = await api.post<IDetalhePessoa>("/pessoas", dados);

    if (data) {
      return data.id;
    }

    return new Error(Environment.CRIAR_USUARIO);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || Environment.CRIAR_USUARIO
    );
  }
};

const updateById = async (id: number, dados: IDetalhePessoa): Promise<void | Error> => {
  try {
    await api.put(`/pessoas/${id}`, dados);

  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || Environment.ATUALIZAR_USUARIO
    );
  }
};

const deleteById = async (id: number): Promise<void | Error> => {
  try {
    await api.delete(`/pessoas/${id}`);
  } catch (error) {
    console.error(error);

    return new Error(
      (error as { message: string }).message || Environment.DELETAR_USUARIO
    );
  }
};

export const PessoasServices = {
  getAll,
  getById,
  create,
  updateById,
  deleteById
};
