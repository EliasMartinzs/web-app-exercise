import React from 'react';

export default function TableProgress({ difference }) {
  const {
    biceps,
    forearms,
    chest,
    waist,
    butt,
    quadsRight,
    quadsLeft,
    calfRight,
    calfLeft,
    shoulder,
  } = difference;

  console.log(difference);

  const gains = (before, after) => {
    if (after > before) {
      return `Ganho de ${after - before} cm`;
    } else {
      return `Perda de ${before - after} cm`;
    }
  };

  return (
    <div className="flex-center">
      <table>
        <tbody>
          <tr>
            <th>Musculo</th>
            <th>Antes</th>
            <th>Depois</th>
            <th>Cm</th>
          </tr>
          <tr>
            <td>Biceps</td>
            <td>{biceps?.before}</td>
            <td>{biceps?.after}</td>
            <td>{gains(biceps?.before, biceps?.after)}</td>
          </tr>
          <tr>
            <td>Antebraço</td>
            <td>{forearms?.before}</td>
            <td>{forearms?.after}</td>
            <td>{gains(forearms?.before, forearms?.after)}</td>
          </tr>
          <tr>
            <td>Peito</td>
            <td>{chest?.before}</td>
            <td>{chest?.after}</td>
            <td>{gains(chest?.before, chest?.after)}</td>
          </tr>
          <tr>
            <td>Cintura</td>
            <td>{waist?.before}</td>
            <td>{waist?.after}</td>
            <td>{gains(waist?.before, waist?.after)}</td>
          </tr>
          <tr>
            <td>Quadril</td>
            <td>{butt?.before}</td>
            <td>{butt?.after}</td>
            <td>{gains(butt?.before, butt?.after)}</td>
          </tr>
          <tr>
            <td>Coxa Direita</td>
            <td>{quadsRight?.before}</td>
            <td>{quadsRight?.after}</td>
            <td>{gains(quadsRight?.before, quadsRight?.after)}</td>
          </tr>
          <tr>
            <td>Coxa Esquerda</td>
            <td>{quadsLeft?.before}</td>
            <td>{quadsLeft?.after}</td>
            <td>{gains(quadsLeft?.before, quadsLeft?.after)}</td>
          </tr>
          <tr>
            <td>Panturrilha Direita</td>
            <td>{calfRight?.before}</td>
            <td>{calfRight?.after}</td>
            <td>{gains(calfRight?.before, calfRight?.after)}</td>
          </tr>
          <tr>
            <td>Panturrilha Esquerda</td>
            <td>{calfLeft?.before}</td>
            <td>{calfLeft?.after}</td>
            <td>{gains(calfLeft?.before, calfLeft?.after)}</td>
          </tr>
          <tr>
            <td>Ombros</td>
            <td>{shoulder?.before}</td>
            <td>{shoulder?.after}</td>
            <td>{gains(shoulder?.before, shoulder?.after)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
