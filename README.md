# Budgie
 
[Demo Link](https://budgie.caloger.com)

I created Budgie to gain some experience with data visualization and play around with a gradient-heavy visual style. The front-end is a React app that uses [React Router](https://reactrouter.com/) for navigation.

The server portion was written in Java with the Spring Framework as the web layer. It uses JPA with an H2 database for storage.

I originally used the [ReChart](https://recharts.org/en-US/) library for the data visualizations but found it wasn't as flexible as I'd like it to be, so I changed over to [Chart.js](https://www.chartjs.org/) and the accompanying [React ChartJS 2](https://github.com/reactchartjs/react-chartjs-2) library for it.

Some interesting features that are used include ascending/descending sorting, instant visual updating, and gradient charts.
