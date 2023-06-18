import React, { useState, FormEvent } from "react";
import axios from "axios";

interface Receta {
  nombre: string;
  ingredientes: string[];
  pasos: string[];
}

const Body = () => {
  const [ingredientes, setIngredientes] = useState("");
  const [tipo, setTipo] = useState("");
  const [dificultad, setDificultad] = useState("");
  const [cantidadSalidas, setCantidadSalidas] = useState(5);
  const [recetas, setRecetas] = useState<Receta[]>([]);

  const NEXT_PUBLIC_OPENAI_API_KEY = "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";

  const handleChangeIngredientes = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIngredientes(event.target.value);
  };

  const handleChangeTipo = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTipo(event.target.value);
  };

  const handleChangeDificultad = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDificultad(event.target.value);
  };

  const handleChangeCantidadSalidas = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCantidadSalidas(parseInt(event.target.value));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const recetasGeneradas = await generarRecetas(ingredientes, tipo, dificultad, cantidadSalidas);
      setRecetas(recetasGeneradas);
    } catch (error) {
      console.error(error);
    }
  };

  const generarRecetas = async (
    ingredientes: string,
    tipo: string,
    dificultad: string,
    cantidadSalidas: number
  ) => {
    const prompt = `Generar ${cantidadSalidas} recetas de ${tipo} con dificultad ${dificultad} utilizando los siguientes ingredientes: ${ingredientes}.`;

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: prompt,
          max_tokens: 200,
          n: cantidadSalidas,
          stop: null,
          temperature: 1,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${NEXT_PUBLIC_OPENAI_API_KEY}`,
          },
        }
      );

      const recetasGeneradas = response.data.choices.map(
        (choice: { text: string }) => {

        }
      );

      return recetasGeneradas;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '36px', marginBottom: '30px', color: 'gray' }}>Generador de Recetas</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: 'gray', marginBottom: '10px' }}>Ingredientes:</span>
          <input type="text" value={ingredientes} onChange={handleChangeIngredientes} style={{ fontSize: '20px' }} />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: 'gray', marginBottom: '10px' }}>Tipo:</span>
          <input type="text" value={tipo} onChange={handleChangeTipo} style={{ fontSize: '20px' }} />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: 'gray', marginBottom: '10px' }}>Dificultad:</span>
          <input type="text" value={dificultad} onChange={handleChangeDificultad} style={{ fontSize: '20px' }} />
        </label>
        <br />
        <label style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <span style={{ fontSize: '24px', color: 'gray', marginBottom: '10px' }}>Cantidad de Salidas:</span>
          <input type="number" value={cantidadSalidas} onChange={handleChangeCantidadSalidas} style={{ fontSize: '20px' }} />
        </label>
        <br />
        <button type="submit" style={{ fontSize: '24px', backgroundColor: '#089bc7', color: 'white', padding: '10px 20px' }}>
          Generar
        </button>
      </form>
      <div>
        {recetas.map((receta, index) => (
          <div key={index} style={{ marginBottom: '50px' }}>
            <h3 style={{ fontSize: '28px', marginTop: '20px', color: 'gray' }}>{receta.nombre}</h3>
            <h4 style={{ fontSize: '24px', marginTop: '10px', color: 'gray' }}>Ingredientes:</h4>
            <ul style={{ fontSize: '20px', color: 'gray' }}>
              {receta.ingredientes.map((ingrediente, ingredienteIndex) => (
                <li key={ingredienteIndex}>{ingrediente}</li>
              ))}
            </ul>
            <h4 style={{ fontSize: '24px', marginTop: '10px', color: 'gray' }}>Pasos:</h4>
            <ol style={{ fontSize: '20px', color: 'gray' }}>
              {receta.pasos.map((paso, pasoIndex) => (
                <li key={pasoIndex}>{paso}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
