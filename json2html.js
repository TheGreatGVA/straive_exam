// json2html.js
export default function json2html(data) {
    // Collect all keys in the data array to get table headers
    const headers = [...new Set(data.flatMap(Object.keys))];
  
    // Start the table with a custom data-user attribute
    let html = `<table data-user="adityagv16@gmail.com">`;
  
    // Create the table header
    html += "<thead><tr>";
    headers.forEach(header => {
      html += `<th>${header}</th>`;
    });
    html += "</tr></thead>";
  
    // Create the table body
    html += "<tbody>";
    data.forEach(row => {
      html += "<tr>";
      headers.forEach(header => {
        html += `<td>${row[header] !== undefined ? row[header] : ""}</td>`;
      });
      html += "</tr>";
    });
    html += "</tbody>";
  
    // Close the table tag
    html += "</table>";
  
    return html;
  }
  