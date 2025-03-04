import { getCSS, tickConfig } from ".common.js"

async function quantidadeUsuariosPorRede() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuario.json'
    const res = await fetch(URL)
    const dados = await res.json()
    const nomeDasRedes = Object.keys(dados)
    const quantidadeDeUsuarios = Object.values(dados)

    const data = [
        {
            x: nomeDasRedes,
            y: quantidadeDeUsuarios,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]
   
    const laytout = {
        plot_bgcolor:getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        tittle: {
            text: 'redes sociais com mais usuarios',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                size: 30,
                font: getCSS('--font')
                  }
        },
        xaxis:{
            tickfont: tickConfig,
            tittle:{
                text: 'nome das redes',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            tittle: {
                text: 'bilhões de usuarios ativos',
                font: {
                    color: getCSS('--secondary-color')
                }
            }
        }
    }

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementById('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico, data, laytout)
}

 quantidadeUsuariosPorRede()