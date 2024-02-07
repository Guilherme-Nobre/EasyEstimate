import { useEffect, useState } from 'react';
import { useFetchDocument } from '../../hooks/useFetchDocument';
import { useUpdateDocument } from '../../hooks/useUpdateDocument';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from "./EditFunc.module.css"
import { useAuthValue } from '../../context/AuthContext';
import { useDeleteDocument } from '../../hooks/useDeleteDocument';
import CurrencyInput from 'react-currency-input-field';
import InputMask from 'react-input-mask';

const EditFunc = () => {
    /* States responsável por cada parte da TABELA */
    const [funcionarios, setFuncionarios] = useState("")
    const [escritorio, setEscritorio] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [valor, setValor] = useState("")
    const [pix, setPix] = useState("")
    const [diaPagamento, setDiaPagamento] = useState("")
    const [Jan, setJan] = useState("")
    const [Fev, setFev] = useState("")
    const [Mar, setMar] = useState("")
    const [Abr, setAbr] = useState("")
    const [Mai, setMai] = useState("")
    const [Jun, setJun] = useState("")
    const [Jul, setJul] = useState("")
    const [Ago, setAgo] = useState("")
    const [Set, setSet] = useState("")
    const [Out, setOut] = useState("")
    const [Nov, setNov] = useState("")
    const [Dez, setDez] = useState("")
    const [PagJan, setPagJan] = useState("")
    const [PagFev, setPagFev] = useState("")
    const [PagMar, setPagMar] = useState("")
    const [PagAbr, setPagAbr] = useState("")
    const [PagMai, setPagMai] = useState("")
    const [PagJun, setPagJun] = useState("")
    const [PagJul, setPagJul] = useState("")
    const [PagAgo, setPagAgo] = useState("")
    const [PagSet, setPagSet] = useState("")
    const [PagOut, setPagOut] = useState("")
    const [PagNov, setPagNov] = useState("")
    const [PagDez, setPagDez] = useState("")
    const [DecTerceiro, setDecTerceiro] = useState("")
    const [PagDecTerceiro, setPagDecTerceiro] = useState("")
    const [TercoFerias, setTercoFerias] = useState("")
    const [PagTercoFerias, setPagTercoFerias] = useState("")

    const [formError, setFormError] = useState("")
    const { id: url } = useParams();
    const { user } = useAuthValue();
    const { document: itens } = useFetchDocument("funcionarios", url);
    const { updateDocument, response } = useUpdateDocument("funcionarios");
    const navigate = useNavigate();

    const { deleteDocument } = useDeleteDocument("funcionarios");

    const handleDelete = async () => {
        try {
            // Mostrar um alerta de confirmação antes de excluir
            const userConfirmed = window.confirm("Tem certeza de que deseja excluir este documento?");
    
            // Se o usuário confirmar, prosseguir com a exclusão
            if (userConfirmed) {
                await deleteDocument(url);
                
                // Redirecionar ou realizar outras ações após a exclusão bem-sucedida
                navigate("/funcionarios");
            } else {
                // Se o usuário cancelar, você pode optar por não fazer nada ou exibir uma mensagem
                console.log("Exclusão cancelada pelo usuário.");
            }
        } catch (error) {
            console.error("Erro ao excluir documento:", error);
            // Adicione código para lidar com o erro, como exibir uma mensagem ao usuário
        }
    };

    const handleValorChange = (value, name) => {
        setValor(value);
    };

    const handlePagJanChange = (e) => {
        setPagJan(e.target.value);
    };

    const handlePagFevChange = (e) => {
        setPagFev(e.target.value);
    };

    const handlePagMarChange = (e) => {
        setPagMar(e.target.value);
    };

    const handlePagAbrChange = (e) => {
        setPagAbr(e.target.value);
    };

    const handlePagMaiChange = (e) => {
        setPagMai(e.target.value);
    };

    const handlePagJunChange = (e) => {
        setPagJun(e.target.value);
    };

    const handlePagJulChange = (e) => {
        setPagJul(e.target.value);
    };

    const handlePagAgoChange = (e) => {
        setPagAgo(e.target.value);
    };

    const handlePagSetChange = (e) => {
        setPagSet(e.target.value);
    };

    const handlePagOutChange = (e) => {
        setPagOut(e.target.value);
    };

    const handlePagNovChange = (e) => {
        setPagNov(e.target.value);
    };

    const handlePagDezChange = (e) => {
        setPagDez(e.target.value);
    };

    const handlePagDecTerceiroChange = (e) => {
        setPagDecTerceiro(e.target.value);
    };

    const handlePagTercoFeriasChange = (e) => {
        setPagTercoFerias(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormError("");

        if (formError) return;

        const data = {
            funcionarios,
            escritorio,
            empresa,
            valor,
            pix,
            diaPagamento,
            Jan,
            Fev,
            Mar,
            Abr,
            Mai,
            Jun,
            Jul,
            Ago,
            Set,
            Out,
            Nov,
            Dez,
            PagJan,
            PagFev,
            PagMar,
            PagAbr,
            PagMai,
            PagJun,
            PagJul,
            PagAgo,
            PagSet,
            PagOut,
            PagNov,
            PagDez,
            DecTerceiro,
            PagDecTerceiro,
            TercoFerias,
            PagTercoFerias,
            uid: user.uid,
            createdBy: user.displayName
        }

        updateDocument(url, data)

        // redirect to home page
        navigate("/funcionarios")
    }

    const handleVoltar = () => {
        navigate("/funcionarios")
    }

    useEffect(() => {

        if (itens) {
            setFuncionarios(itens.funcionarios)
            setEscritorio(itens.escritorio)
            setEmpresa(itens.empresa)
            setValor(itens.valor)
            setPix(itens.pix)
            setDiaPagamento(itens.diaPagamento)
            setJan(itens.Jan)
            setFev(itens.Fev)
            setMar(itens.Mar)
            setAbr(itens.Abr)
            setMai(itens.Mai)
            setJun(itens.Jun)
            setJul(itens.Jul)
            setAgo(itens.Ago)
            setSet(itens.Set)
            setOut(itens.Out)
            setNov(itens.Nov)
            setDez(itens.Dez)
            setPagJan(itens.PagJan)
            setPagFev(itens.PagFev)
            setPagMar(itens.PagMar)
            setPagAbr(itens.PagAbr)
            setPagMai(itens.PagMai)
            setPagJun(itens.PagJun)
            setPagJul(itens.PagJul)
            setPagAgo(itens.PagAgo)
            setPagSet(itens.PagSet)
            setPagOut(itens.PagOut)
            setPagNov(itens.PagNov)
            setPagDez(itens.PagDez)
            setDecTerceiro(itens.DecTerceiro)
            setPagDecTerceiro(itens.PagDecTerceiro)
            setTercoFerias(itens.TercoFerias)
            setPagTercoFerias(itens.PagTercoFerias)
        }

    }, [itens])

    return (
        <div className={styles.EditFunc}>
            <h1>Editar Funcionário</h1>
            <form onSubmit={handleSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Funcionários</th>
                            <th>Escritório</th>
                            <th>Empresa</th>
                            <th>Valor</th>
                            <th>PIX</th>
                            <th>Dia de Pag</th>
                            <th>Jan</th>
                            <th>Fev</th>
                            <th>Mar</th>
                            <th>Abr</th>
                            <th>Mai</th>
                            <th>Jun</th>
                            <th>Jul</th>
                            <th>Ago</th>
                            <th>Set</th>
                            <th>Out</th>
                            <th>Nov</th>
                            <th>Dez</th>
                            <th>13°</th>
                            <th>1/3 de Férias</th>
                        </tr>
                    </thead>
                    <tbody>
                        {itens && (
                            <tr>
                                <td>
                                    <input
                                        type="text"
                                        name="funcionarios"
                                        onChange={(e) => setFuncionarios(e.target.value)}
                                        value={funcionarios}
                                    />
                                </td>
                                <td>
                                    <select
                                        name='escritorio'
                                        className='slct'
                                        onChange={(e) => setEscritorio(e.target.value)}
                                        value={escritorio}
                                    >
                                        <option value=""></option>
                                        <option value="Patos">Patos</option>
                                        <option value="João Pessoa">João Pessoa</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        name='empresa'
                                        className='slct'
                                        onChange={(e) => setEmpresa(e.target.value)}
                                        value={empresa}
                                    >
                                        <option value=""></option>
                                        <option value="ISN">ISN</option>
                                        <option value="ISNEP">ISNEP</option>
                                    </select>
                                </td>
                                <td>
                                    <CurrencyInput
                                        name="valor"
                                        allowNegativeValue={false}
                                        onValueChange={handleValorChange}
                                        value={valor}
                                        decimalScale={2}  // Define a quantidade de casas decimais
                                        fixedDecimalScale={true}  // Mantém a quantidade de casas decimais fixa    
                                    />
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        name="pix"
                                        onChange={(e) => setPix(e.target.value)}
                                        value={pix}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='diaPagamento'
                                        onChange={(e) => setDiaPagamento(e.target.value)}
                                        value={diaPagamento}
                                    >
                                        <option value=""></option>
                                        <option value="Dia 01">Dia 01</option>
                                        <option value="Dia 02">Dia 02</option>
                                        <option value="Dia 03">Dia 03</option>
                                        <option value="Dia 04">Dia 04</option>
                                        <option value="Dia 05">Dia 05</option>
                                        <option value="Dia 06">Dia 06</option>
                                        <option value="Dia 07">Dia 07</option>
                                        <option value="Dia 08">Dia 08</option>
                                        <option value="Dia 09">Dia 09</option>
                                        <option value="Dia 10">Dia 10</option>
                                        <option value="Dia 11">Dia 11</option>
                                        <option value="Dia 12">Dia 12</option>
                                        <option value="Dia 13">Dia 13</option>
                                        <option value="Dia 14">Dia 14</option>
                                        <option value="Dia 15">Dia 15</option>
                                        <option value="Dia 16">Dia 16</option>
                                        <option value="Dia 17">Dia 17</option>
                                        <option value="Dia 18">Dia 18</option>
                                        <option value="Dia 19">Dia 19</option>
                                        <option value="Dia 20">Dia 20</option>
                                        <option value="Dia 21">Dia 21</option>
                                        <option value="Dia 22">Dia 22</option>
                                        <option value="Dia 23">Dia 23</option>
                                        <option value="Dia 24">Dia 24</option>
                                        <option value="Dia 25">Dia 25</option>
                                        <option value="Dia 26">Dia 26</option>
                                        <option value="Dia 27">Dia 27</option>
                                        <option value="Dia 28">Dia 28</option>
                                        <option value="Dia 29">Dia 29</option>
                                        <option value="Dia 30">Dia 30</option>
                                        <option value="Dia 31">Dia 31</option>
                                    </select>
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Jan'
                                        required
                                        onChange={(e) => setJan(e.target.value)}
                                        value={Jan}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagJan}
                                        onChange={handlePagJanChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Fev'
                                        required
                                        onChange={(e) => setFev(e.target.value)}
                                        value={Fev}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagFev}
                                        onChange={handlePagFevChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Mar'
                                        required
                                        onChange={(e) => setMar(e.target.value)}
                                        value={Mar}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagMar}
                                        onChange={handlePagMarChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Abr'
                                        required
                                        onChange={(e) => setAbr(e.target.value)}
                                        value={Abr}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagAbr}
                                        onChange={handlePagAbrChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Mai'
                                        required
                                        onChange={(e) => setMai(e.target.value)}
                                        value={Mai}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagMai}
                                        onChange={handlePagMaiChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Jun'
                                        required
                                        onChange={(e) => setJun(e.target.value)}
                                        value={Jun}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagJun}
                                        onChange={handlePagJunChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Jul'
                                        required
                                        onChange={(e) => setJul(e.target.value)}
                                        value={Jul}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagJul}
                                        onChange={handlePagJulChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Ago'
                                        required
                                        onChange={(e) => setAgo(e.target.value)}
                                        value={Ago}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagAgo}
                                        onChange={handlePagAgoChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Set'
                                        required
                                        onChange={(e) => setSet(e.target.value)}
                                        value={Set}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagSet}
                                        onChange={handlePagSetChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Out'
                                        required
                                        onChange={(e) => setOut(e.target.value)}
                                        value={Out}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagOut}
                                        onChange={handlePagOutChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Nov'
                                        required
                                        onChange={(e) => setNov(e.target.value)}
                                        value={Nov}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagNov}
                                        onChange={handlePagNovChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='Dez'
                                        required
                                        onChange={(e) => setDez(e.target.value)}
                                        value={Dez}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagDez}
                                        onChange={handlePagDezChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='DecTerceiro'
                                        onChange={(e) => setDecTerceiro(e.target.value)}
                                        value={DecTerceiro}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='months'
                                        mask="99/99/9999"
                                        value={PagDecTerceiro}
                                        onChange={handlePagDecTerceiroChange}
                                    />
                                </td>
                                <td>
                                    <select
                                        className='slct'
                                        name='TercoFerias'
                                        onChange={(e) => setTercoFerias(e.target.value)}
                                        value={TercoFerias}
                                    >
                                        <option value="">Em branco</option>
                                        <option value="Pago">Pago</option>
                                    </select>
                                    <InputMask
                                        className='monthsCreate'
                                        mask="99/99/9999"
                                        value={PagTercoFerias}
                                        onChange={handlePagTercoFeriasChange}
                                    />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </form>
            <div>
                <button onClick={handleDelete} className='delete'>Excluir</button>
                <button onClick={handleSubmit} className='save'>Salvar</button>
                <button onClick={handleVoltar} className='back'>Voltar</button>
            </div>
        </div>
    );
};

export default EditFunc;
