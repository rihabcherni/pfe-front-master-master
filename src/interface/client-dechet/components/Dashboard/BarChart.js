
import React, { useState, useEffect } from "react";
import { Skeleton } from "@mui/material";
import ReactApexChart from "react-apexcharts";

export default function BarChart () {
  const chartOptions = () => {
    setChart ({
      options: {
        plotOptions: { bar: {dataLabels: { position: "top"}}},
        dataLabels: {
          enabled: true,
          formatter: function(val) { return Number(val).toLocaleString() + " KG";},
          offsetY: -20,
          style: { fontSize: "12px", colors: ["#304758"]}
        },
        xaxis: {
          categories: ['plastique','composte', 'papier', 'canette'],
          position: "bottom",
          labels: {
            offsetY: 0
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          crosshairs_: {
            fill: {
              type: "gradient",
              gradient: {
                colorFrom: "#D8E3F0",
                colorTo: "#BED1E6",
                stops: [0, 100],
                opacityFrom: 0.4,
                opacityTo: 0.5
              }
            }
          },
          tooltip: {
            enabled: false,
            offsetY: -35
          }
        },
        fill: {
          gradient: {
            shade: "light",
            type: "horizontal",
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false,
            formatter: function(val) {
              return Number(val).toLocaleString() + " Kg";
            }
          }
        },
        title: {
          floating: true,
          offsetY: 0,
          align: "center",
          style: {
            color: "#444"
          }
        },
        chart: {
          animations: {
            enabled: false
          }
        }
      },
      series: [
        {
          name: "Quantite actuelle",
          data: [8976, 12987, 9853, 10986]
        }
      ]
    });
  }
    setTimeout(() => {
      this.setState({
        series: [
          {
            name: "Chiffre d'affaires",
            data: [8976, 12987, 9853, 67, 3571]
          }
        ]
      });
    }, 4000);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `Bearer ${localStorage.getItem('auth_token')}`);
    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
      const [tableData, setTableData] = useState(null)
      const [chart, setChart] = useState(null)

      const getData = () => {
        fetch("http://127.0.0.1:8000/api/auth-client-dechet/quantite-dechet-total-client", requestOptions)
        .then(response => response.json())
        .then(result => setTableData(result))
        .catch(error => console.log('error', error));
      }  
      useEffect(() => {
        getData()
        chartOptions()
      }, [])
      if(tableData!==null){
      return  (
      <div id="chart">
        <ReactApexChart
          options={chart.options}
          series={chart.series}
          type="bar"
          height="300"
        />
      </div>
    );
  
      }else{
        return (
        <div className='container-prix'>
            <Skeleton variant="rectangular" width={500} height={500} />
        </div>
        );
      };
}
