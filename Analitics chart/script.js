// Line Chart - Orders
new Chart(document.getElementById("lineChart"), {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Orders",
      data: [120, 190, 300, 250, 320, 400],
      borderColor: "#4bc0c0",
      fill: false,
      tension: 0.4
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } }
    }
  }
});

// Bar Chart - Revenue
new Chart(document.getElementById("barChart"), {
  type: "bar",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [{
      label: "Revenue ($)",
      data: [900, 1300, 2000, 1600, 2100, 2900],
      backgroundColor: "#ff6384"
    }]
  },
  options: {
    plugins: { legend: { labels: { color: "#fff" } } },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } }
    }
  }
});

// Pie Chart - Traffic Source
new Chart(document.getElementById("pieChart"), {
  type: "pie",
  data: {
    labels: ["Direct", "Search", "Social", "Referral"],
    datasets: [{
      label: "Traffic",
      data: [3000, 5000, 2500, 1500],
      backgroundColor: ["#36a2eb", "#ffcd56", "#4bc0c0", "#ff6384"]
    }]
  },
  options: {
    plugins: {
      legend: {
        labels: { color: "#fff" }
      }
    }
  }
});