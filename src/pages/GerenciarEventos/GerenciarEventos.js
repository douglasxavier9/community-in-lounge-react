import React, { Component } from 'react';
import './gerenciar-eventos.css';
import axios from 'axios';
import meses from './meses.json'

class MeusEventos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eventos: [],
            mes: 12,
            mesSelecionado: 0
        }

    }


    getEventos = async () => {
        // console.log(this.state.mes);
        var mes = this.state.mes;
        axios.get('http://localhost:5000/api/evento/calendario/' + mes)
            .then(respota => {
                this.setState({ eventos: respota.data }, () => console.log(this.state.eventos));
            })
            .catch(error => console.error(error));

    }

    atualizaMes = (event) => {
        this.setState({ mes: event.target.value });
        setTimeout(() => {
            console.log(this.state.mes)
            this.getEventos();
        }, 500);
    }

    componentDidMount() {
        this.getEventos();
    }

    render() {
        return (
            <div>
                <section class="section-calendario-info">

                    <div class="container-eventos-pendentes">

                        <div class="gerenciar-titulo">
                            <h1>Calendário</h1>
                        </div>

                        <div class="container-lista-data">
                            <div class="calendario-mes">
                                <form action="" >
                                    <select onChange={(e) => this.atualizaMes(e)} name="" id="">
                                        <option value="1">Janeiro</option>
                                        <option value="2">Fevereiro</option>
                                        <option value="3">Março</option>
                                        <option value="4">Abril</option>
                                        <option value="5">Maio</option>
                                        <option value="6">Junho</option>
                                        <option value="7">Julho</option>
                                        <option value="8">Agosto</option>
                                        <option value="9">Setembro</option>
                                        <option value="10">Outubro</option>
                                        <option value="11">Novembro</option>
                                        <option value="12">Dezembro</option>
                                    </select>
                                </form>

                            </div>

                            {meses[this.state.mesSelecionado].dias.map((dia) => {
                                return(
                                    <div>
                                        container
                                        {
                                            // return (
                                                this.state.eventos.map(element => {
                                                    if (parseInt(element.data.split('T')[0].split('-')[2]) === dia) {
                                                        return (
                                                            <div>.</div>
                                                        )
                                                    } else {
                                                        return (
                                                            <div></div>
                                                        )
                                                    }
                                                })
                                                // this.state.eventos.map((evento) => {
                                                //     if (parseInt(evento.data.split('T')[0].split('-')[2]) === dia) {
                                                //         return (
                                                //             <div>sim</div>
                                                //         )
                                                //     } else {
                                                //         return (
                                                //             <div>nao</div>
                                                //         )
                                                //     }
                                                // })
                                            // )
                                        }
                                    </div>
                                )
                                
                            })}

                            {
                                this.state.eventos.map((evento) => {
                                    // console.log(meses[0].dias)
                                    // console.log(parseInt(evento.data.split('T')[0].split('-')[2]))
                                    console.log(meses[this.state.mesSelecionado].dias.indexOf(parseInt(evento.data.split('T')[0].split('-')[2])))
                                })
                            }

                            {
                                this.state.eventos.map(function (evento) {
                                    if (evento.thoughtworks === true) {

                                        return (
                                            <div key={evento.eventoId} class="data-dia border-azul">{evento.data}</div>
                                        );
                                    }

                                    if (evento.quantidade <= 2) {

                                        return (
                                            <div key={evento.eventoId} class="data-dia border-amarelo">{evento.data}</div>
                                        );

                                    } else if (evento.quantidade <= 4) {

                                        return (
                                            <div key={evento.eventoId} class="data-dia border-laranja">{evento.data}</div>
                                        );

                                    } else if (evento.quantidade > 4) {

                                        return (
                                            <div key={evento.eventoId} class="data-dia border-vermelha">{evento.data}</div>
                                        );

                                    } else {

                                        return (
                                            <div key={evento.eventoId} class="data-dia border-cinza">{evento.data}</div>
                                        );

                                    }
                                })


                            }



                            {/* <div class="linha">
                                <div id="1" class="data-dia border-amarelo">1</div>
                                <div id="2" class="data-dia border-azul">2</div>
                                <div id="3" class="data-dia border-cinza">3</div>
                                <div id="4" class="data-dia border-laranja">4</div>
                                <div id="5" class="data-dia border-vermelho">5</div>
                                <div id="6" class="data-dia border-cinza">6</div>
                                <div id="7" class="data-dia border-cinza">7</div>
                                <div id="8" class="data-dia border-cinza">8</div>
                            </div>
                            <div class="linha">

                                <div id="9" class="data-dia border-cinza">9</div>
                                <div id="10" class="data-dia border-cinza">10</div>
                                <div id="12" class="data-dia border-cinza">11</div>
                                <div id="13" class="data-dia border-cinza">12</div>
                                <div id="14" class="data-dia border-cinza">13</div>
                                <div id="15" class="data-dia border-cinza">14</div>
                                <div id="16" class="data-dia border-cinza">15</div>
                                <div id="17" class="data-dia border-cinza">16</div>
                            </div> */}

                            {/* <div class="linha">

                                <div id="18" class="data-dia border-cinza">17</div>
                                <div id="19" class="data-dia border-cinza">18</div>
                                <div id="20" class="data-dia border-cinza">19</div>
                                <div id="21" class="data-dia border-cinza">20</div>
                                <div id="22" class="data-dia border-cinza">21</div>
                                <div id="23" class="data-dia border-cinza">22</div>
                                <div id="24" class="data-dia border-cinza">23</div>
                                <div id="25" class="data-dia border-cinza">24</div>
                            </div> */}

                            {/* <div class="linha">

                                <div id="26" class="data-dia border-cinza">25</div>
                                <div id="27" class="data-dia border-cinza">26</div>
                                <div id="28" class="data-dia border-cinza">27</div>
                                <div id="29" class="data-dia border-cinza">28</div>
                                <div id="30" class="data-dia border-cinza">29</div>
                                <div id="31" class="data-dia border-cinza">30</div>
                                <div id="32" class="data-dia border-cinza">31</div>
                                <div class="data-dia border-cinza"></div>
                            </div> */}

                        </div>

                    </div>

                    <div class="container-legenda-calendario">

                        <div class="legenda-calendario-pendente">
                            <h3>Legenda calendário</h3>

                            <div class="linha-legenda">
                                <div class="cor-leg back-azul"></div>
                                <p>Eventos ThoughtWoks</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-laranja"></div>
                                <p>Laranja</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-vermelho"></div>
                                <p>Vermelho</p>
                            </div>

                            <div class="linha-legenda">
                                <div class="cor-leg back-amarelo"></div>
                                <p>Amarelo</p>
                            </div>

                            <div class="linha-legenda">
                                Clique no mês para troca-lo.
        </div>

                        </div>



                    </div>

                </section>

                <section class="section-lista-eventos-pendentes">

                    <div class="tiulo-lista-eventos">
                        <h2>Eventos do dia 30 de mar, ter</h2>
                    </div>

                    <div class="lista-eventos-pendentes">

                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button class="rejeitar">
                                    <i class="fas fa-times"></i>
                                </button>
                                <button class="aceitar">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button class="rejeitar">
                                    <i class="fas fa-times"></i>
                                </button>
                                <button class="aceitar">
                                    <i class="fas fa-check"></i>
                                </button>
                            </div>
                        </div>
                        <div class="card-pendente">
                            <div class="foto-pendente"></div>
                            <div class="info">
                                <p class="titulo-info">A impotacia da diversidade</p>
                                <p class="data-info">ter, 30 de mar, 16:20</p>
                                <p class="comunidade-info">ThoughtWorks</p>
                            </div>

                            <div class="botoes">
                                <button>
                                    <i class="rejeitar fas fa-times"></i>
                                </button>
                                <button>
                                    <i class="aceitar fas fa-check"></i>
                                </button>
                            </div>
                        </div>






                    </div>

                </section>
            </div>
        );
    }

}
export default MeusEventos;