const instructores = ['Franco', 'Toni', 'Martu', 'Diego'];

async function henryAwait() {
  console.log("¿Quienes son los intstructores de Henry?");
  instructores.forEach(async instructor => {
    const name = await new Promise(resolve => setTimeout(
        () => resolve(instructor),
        Math.random() * 1000//le mete un delay aleatorio
      )
    );
    console.log(name);
  });
  console.log("Gracias vuelvan pronto");
}

henryAwait();