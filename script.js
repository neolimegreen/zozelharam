const ctx = document.getElementById("financeChart").getContext("2d");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Debit",
        data: [750, 680, 350, 290, 720, 330, 430],
        backgroundColor: "#ffa726",
      },
      {
        label: "Credit",
        data: [320, 460, 240, 610, 480, 270, 590],
        backgroundColor: "#66bb6a",
      },
    ],
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});
