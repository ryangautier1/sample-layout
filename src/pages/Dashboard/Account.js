import React, { useState, useEffect } from 'react';
import CardNav from '../../components/CardNav';
import './account.css';

const Chart = require('chart.js');

function Subscriptions() {
  const [activeCardNav, setActiveCardNav] = useState("menuItem1");

  useEffect(() => {
    renderCharts()
  }, []);


  const toggleActiveCardNav = (id) => {
    if (activeCardNav !== "") {
      document.getElementById(activeCardNav).classList.remove('card-nav-item-active');
    }

    document.getElementById(id).classList.add('card-nav-item-active');
    setActiveCardNav(id);
  }

  const renderCharts = () => {
    var ctxDonut = document.getElementById('donutChart');
    var ctxBar = document.getElementById('barChart');
    let dataDonut = [20, 30, 45];
    let dataBar = [30, 35, 45, 50];
    let labelsBar = ['1', '2', '3', '4'];
    let bgColorsBar = ['rgb(246,136,56,0.75)', 'rgb(246,136,56,0.75)', 'rgb(246,136,56,0.75)', 'rgb(246,136,56,0.75)'];
    let bgColorsDonut = ['rgb(65,65,67)', 'rgb(84,121,156)', 'rgb(246,136,56)'];

    let myDoughnutChart = new Chart(ctxDonut, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: dataDonut,
          backgroundColor: bgColorsDonut,
        }],
        labels: ['Gray', 'Blue', 'Orange']
      },
      options: {
        legend: {
          display: false
        }
      },
    });

    let myBarChart = new Chart(ctxBar, {
      type: 'bar',
      data: {
        labels: labelsBar,
        datasets: [{
          data: dataBar,
          backgroundColor: bgColorsBar,
        }]
      },
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              stepSize: 10
            }
          }]
        }
      }
    });
  }


  return (
    <div className="card">
      <div className="card-header">
        Subscriptions
      </div>
      <CardNav toggleActiveCardNav={toggleActiveCardNav} />
      <div className="card-body">
        <div className="d-flex flex-row flex-wrap chart-flex">
          <canvas id="donutChart"></canvas>
          <canvas id="barChart"></canvas>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">Policy Period</th>
              <th scope="col">Level</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01/10/2020 to 04/10/2020</td>
              <td>Gold</td>
              <td><button className="renew-btn">Renew</button></td>
            </tr>
            <tr>
              <td>06/13/2020 to 12/13/2020</td>
              <td>Gold</td>
              <td><button className="manage-btn">Manage</button></td>
            </tr>
            <tr>
              <td>06/20/2020 to 06/06/2021</td>
              <td>Platinum</td>
              <td><button className="manage-btn">Manage</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Subscriptions;