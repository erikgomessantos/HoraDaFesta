import "./EditUser.css";
import React from "react";

  return
    <div id="edit-user">
      <h2>Edite seus dados</h2>
      <p className="subtitle">
        Adicione uma imagem de perfil, e conte mais um pouco sobre você...
      </p>
      <form>
        <input
          type="text"
          placeholder="Nome"
        />
        <input type="email" placeholder="E-mail" disabled value={email || ""} />
        <label>
          <input
            type="password"
            placeholder="Digite sua nova senha..."
          />
        </label>
      </form>
    </div>