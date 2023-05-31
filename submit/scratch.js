fetch('http://localhost:8000/api/test', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "XSRF-TOKEN": `S64M99Qi-FbzIkOT3C2AakCOFM36SkhDM4BM`
    },
    body: JSON.stringify({ hello: 'world' })
  }).then(res => res.json()).then(data => console.log(data));